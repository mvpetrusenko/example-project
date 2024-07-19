import { test, expect } from '@playwright/test';
import {navigatorTo } from '../pageObject/homePage'; 
import { goToPricesPage } from '../pageObject/pricesPage';
import { pricesPage } from '../selectors/prices.selectors';
import { sorting } from '../fixture/dictionary.fixture'; 

 

test.describe('Prices Tests', () => {
    test.beforeEach(async ({ page }) => {
        await navigatorTo(page);
      });
  
    test('NC-TC-119: Default Sorting on Prices Page', async ({ page }) => {

        await goToPricesPage(page); 
        const defaultSorting = await page.textContent(pricesPage.defaultSortingTab);
        expect(defaultSorting).toContain(sorting.timeOnRoad); 
     
      

    }); 


  
    test.afterEach(async ({ page }) => {
        await page.close();
    });
  });