import { test, expect } from '@playwright/test';
import { navigatorTo } from '../pageObject/homePage'; 
import { invalidPasswordLogin, goToLoginPage, validLogin, goToMedExpertProfile } from '../pageObject/loginPage'; 
import { buyerProfilePage, medExpertProfilePage } from '../selectors/login.selectors'; 
import { loginData, tabs } from '../fixture/dictionary.fixture';



test.describe('Login Tests', () => {
    test.beforeEach(async ({ page }) => {
        await navigatorTo(page);
      });
  
    test('NC-TC-775: Registered Phone Number and Valid Password', async ({ page }) => { 
        await goToLoginPage(page);
        await validLogin(page, loginData.phoneNumber, loginData.password); 
        await page.click(buyerProfilePage.buttonLogIn); 
        expect(await page.textContent(buyerProfilePage.tabMyOrders)).toContain(tabs.myOrders);
         
    }); 



    test('NC-TC-784: Registered Phone Number and Invalid Password', async ({ page }) => { 
        await goToLoginPage(page);
        await invalidPasswordLogin(page, loginData.phoneNumber, loginData.invalidPassword); 
        await page.click(buyerProfilePage.buttonLogIn); 
        expect(await page.textContent(buyerProfilePage.invalidLoginMessage)).toContain(loginData.invalidLoginDataMessage);
         
    }); 

    test('NC-TC-894: Enter Medical Expert Profile', async ({ page }) => {
     
        await goToMedExpertProfile(page); 
        await expect(page.locator(medExpertProfilePage.formDoctorLogin)).toBeVisible();
  
      });
  
    test.afterEach(async ({ page }) => {
        await page.close();
    });
  });