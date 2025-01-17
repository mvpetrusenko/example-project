import { Page } from '@playwright/test'; 
import { buyerProfilePage } from '../selectors/login.selectors'; 
import { mainPage } from '../selectors/mainPage.selectors';


export async function goToLoginPage(page: Page) { 
    await page.click(mainPage.buttonLogin); 
    await page.click(buyerProfilePage.buyerLogin); 
    await page.waitForSelector(buyerProfilePage.formLogin, { state: 'visible' }); 
    
} 


  export async function validLogin(page: Page, phone: string, password: string) { 
    await page.fill(buyerProfilePage.inputLoginPhone, phone); 
    await page.fill(buyerProfilePage.inputLoginPassword, password); 
    
} 

export async function invalidPasswordLogin(page: Page, phone: string, invalidPassword: string) { 
  await page.fill(buyerProfilePage.inputLoginPhone, phone); 
  await page.fill(buyerProfilePage.inputLoginPassword, invalidPassword); 
  
} 

export async function goToMedExpertProfile(page: Page) { 
  await page.waitForSelector(mainPage.buttonLogin, { state: 'visible' });
  await page.click(mainPage.buttonLogin); 
  await page.waitForSelector(mainPage.buttonMedExpertProfile, { state: 'visible' });
  await page.click(mainPage.buttonMedExpertProfile); 

}