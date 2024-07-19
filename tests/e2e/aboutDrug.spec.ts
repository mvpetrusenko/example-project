import { test, expect } from '@playwright/test'; 
import { baseSearch, navigatorTo, clickDrugItem, deleteDrugFromFavorites } from '../pageObject/homePage'; 
import {  drugs, tabs } from '../fixture/dictionary.fixture';
import { mainRoutes } from '../fixture/routes.fixture'; 
import { aboutDrugPage } from '../selectors/aboutDrug.selectors'; 
import { addDrugToFavorite, compareDrugPriceQuantityInfo } from '../pageObject/aboutDrugPage'; 
import { searchResults } from '../pageObject/searchResultsPage';



test.describe('About Drug Page Tests', () => {
    test.beforeEach(async ({ page }) => {
        await navigatorTo(page);
      });



      test('NC-TC-70: Change Minimum Drug Price and Quantity of Drugstores After Changing Geolocation on About Drug Page', async ({ page }) => { 

        await baseSearch(page, drugs.ascorbine); 
        await searchResults(page);
        await clickDrugItem(page);
      
        const getTextContent = aboutDrugPage.tabAboutDrug; 
        expect(await page.textContent(getTextContent)).toContain(tabs.aboutDrugTabUa); 
      
        await compareDrugPriceQuantityInfo(page); 
      
      });  
      
    
    test('NC-TC-76: Add Drug to Favorite', async ({ page }) => { 

      await baseSearch(page, drugs.ascorbine); 
      await searchResults(page);
      await clickDrugItem(page);
    
      const getTextContent = aboutDrugPage.tabAboutDrug; 
      expect(await page.textContent(getTextContent)).toContain(tabs.aboutDrugTabUa);

      await addDrugToFavorite(page); 

      const currentUrl = page.url();
      expect(currentUrl).toContain(mainRoutes.favorites); 
      await expect(page.locator(aboutDrugPage.addedItemToSelected)).toBeVisible(); 
  }); 

  test('NC-TC-77: Delete Drug from Favorite', async ({ page }) => { 

    await baseSearch(page, drugs.ascorbine); 
    await searchResults(page);
    await clickDrugItem(page);
  
    const getTextContent = aboutDrugPage.tabAboutDrug; 
    expect(await page.textContent(getTextContent)).toContain(tabs.aboutDrugTabUa);

    await addDrugToFavorite(page); 

    const currentUrl = page.url();
    expect(currentUrl).toContain(mainRoutes.favorites); 
    await expect(page.locator(aboutDrugPage.addedItemToSelected)).toBeVisible(); 
    await deleteDrugFromFavorites(page);

}); 




  test.afterEach(async ({ page }) => {
    await page.close();

  });

}); 
