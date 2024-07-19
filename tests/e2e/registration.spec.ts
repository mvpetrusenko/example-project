import { test } from '@playwright/test';
import { navigatorTo } from '../pageObject/homePage'; 
import { goToRegistrationPage, fillInErrorPhone, checkInvalidPhoneMessage } from '../pageObject/registrationPage'; 
import { loginData } from '../fixture/dictionary.fixture';


test.describe('Registration Tests', () => {
    test.beforeEach(async ({ page }) => {
        await navigatorTo(page);
      });
  
    test('NC-TC-845: Phone Number with Error on Registration Page', async ({ page }) => {
     
      await goToRegistrationPage(page); 
      await fillInErrorPhone(page, loginData.errorPhone); 
      await checkInvalidPhoneMessage(page);
      
      

    });
  
    test.afterEach(async ({ page }) => {
        await page.close();
    });
  });