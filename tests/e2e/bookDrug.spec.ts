import { test, expect } from '@playwright/test';
import { navigatorTo } from '../pageObject/homePage'; 
import { mainRoutes } from '../fixture/routes.fixture'; 
import { orderDrug } from '../pageObject/bookDrugPage'; 
 

test.describe('Book Drug Tests', () => {
    test.beforeEach(async ({ page }) => {
        await navigatorTo(page);
      });
  
    test('NC-TC-45: Make Order with Registered Phone Number', async ({ page }) => {
     
      await orderDrug(page); 
      expect(page.url()).toContain(mainRoutes.order); 

    });


    test.afterEach(async ({ page }) => {
        await page.close();
    });
  });