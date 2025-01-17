import { Page } from '@playwright/test'; 
import { expect } from '@playwright/test';
import { basketPage } from '../selectors/basket.selectors'; 
import { bookDrugPage } from '../selectors/bookDrug.selectors'; 
import { goToPricesPage } from '../pageObject/pricesPage'; 
import { addProductToBasket } from '../pageObject/basketPage'; 
import { loginData } from '../fixture/dictionary.fixture';


export async function goToMakeReservationPage(page: Page) { 

  await goToPricesPage(page); 
  await page.waitForSelector(basketPage.buttonOrder, { state: 'visible' });
  await page.click(basketPage.buttonOrder); 
  await addProductToBasket(page); 
  await page.click(bookDrugPage.buttonMakeBooking); 
  await page.waitForSelector(bookDrugPage.formMakeBooking, { state: 'visible' });
  
} 

export async function fillInValidPhone(page: Page, validReservationPhone: string) { 
  await page.fill(bookDrugPage.inputBookPhone, validReservationPhone); 
  
} 

export async function orderDrug(page: Page) { 
  await goToMakeReservationPage(page); 
  await fillInValidPhone(page, loginData.phoneNumber); 
  await page.click(bookDrugPage.buttonMakeOrder); 
  await expect(page.locator(bookDrugPage.modalWaitingForBooking)).toBeVisible({ timeout: 20000 });
  await expect(page.locator(bookDrugPage.modalWaitingForBooking)).toBeHidden({ timeout: 20000 });  
  await expect(page.locator(bookDrugPage.formBookedOrder)).toBeVisible();  
  
}