import { Page } from '@playwright/test'; 
import { expect } from '@playwright/test'; 
import { buyerProfilePage } from '../selectors/login.selectors'; 
import { registrationPage } from '../selectors/registration.selectors'; 
import { goToLoginPage } from '../pageObject/loginPage'; 
import { loginData } from '../fixture/dictionary.fixture';


export async function goToRegistrationPage(page: Page) {
    
    await goToLoginPage(page); 
    await page.click(buyerProfilePage.buttonRegistration); 
    await page.waitForSelector(registrationPage.formRegistration, { state: 'visible' });

} 

export async function fillInErrorPhone(page: Page, errorResetPhone: string) { 
    await page.fill(registrationPage.inputRegistrationPhone, errorResetPhone); 
    
  } 

  export async function checkInvalidPhoneMessage(page: Page) { 
    expect(await page.textContent(buyerProfilePage.invalidPhoneMessage)).toContain(loginData.invalidPhoneMessage); 
    await expect(page.locator(buyerProfilePage.buttonContinueDisabled)).toBeVisible();
  } 