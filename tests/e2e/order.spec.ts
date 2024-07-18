import {test, expect } from '@playwright/test';
import { baseSearch, navigatorTo } from '../pageObject/homePage'; 
import { addProductToBasket } from '../pageObject/basketPage';
import { clickOrderButton } from '../pageObject/pricesPage'; 
import { basketPage } from '../selectors/basket.selectors'; 
import { pricesPage } from '../selectors/prices.selectors'; 
import { searchResults } from '../pageObject/searchResultsPage'; 
import { drugs } from '../fixture/dictionary.fixture'; 


test.describe('Orders Tests', () => {
    test.beforeEach(async ({ page }) => {
      await navigatorTo(page);
    });
  

    test('NC-TC-41: Verify Drug Name is the Same on Prices and Basket Pages', async ({ page }) => {
 
      await baseSearch(page, drugs.ascorbine); 
      await searchResults(page); 

      await clickOrderButton(page); 
      // non-null assertion operator to assert that textContent is not null
      const textDrugNamePrice = (await page.textContent(pricesPage.drugName))!.trim(); 

      await addProductToBasket(page); 
      const textDrugNameBasket = (await page.textContent(basketPage.drugName))!.trim();
      expect(textDrugNameBasket).toEqual(textDrugNamePrice);
    
  }); 

    test('NC-TC-42: Verify Drug Price is the Same on Prices and Basket Pages', async ({ page }) => {
 
      await baseSearch(page, drugs.ascorbine); 
      await searchResults(page); 
    
      await clickOrderButton(page); 
      const textDrugPricePrices = (await page.textContent(pricesPage.drugPrice))!.trim();

      await addProductToBasket(page); 
      const textDrugPriceBasket = (await page.textContent(basketPage.drugPrice))!.slice(0, -drugs.substringPrice.length)!.trim(); 
      expect(textDrugPriceBasket).toEqual(textDrugPricePrices);
  
});

    
  
    test.afterEach(async ({ page }) => {
      await page.close();
  });
});