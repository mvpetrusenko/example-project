import { Page } from '@playwright/test'; 
import { baseSearch, clickDrugItem } from '../pageObject/homePage'; 
import { searchResults } from '../pageObject/searchResultsPage'; 
import { drugs } from '../fixture/dictionary.fixture'; 
import { pricesPage } from '../selectors/prices.selectors';  
import { basketPage } from '../selectors/basket.selectors';  




export async function clickOrderButton(page: Page) {
    
      await page.waitForSelector(basketPage.buttonPrice, { state: 'visible' });
      await page.click(basketPage.buttonPrice); 
      await page.waitForSelector(basketPage.buttonOrder, { state: 'visible' });
      await page.click(basketPage.buttonOrder);  
   
  } 

  export async function goToPricesPage(page: Page) {
    await baseSearch(page, drugs.citramon); 
    await searchResults(page);
    await clickDrugItem(page); 
    await page.waitForSelector(pricesPage.tabPrices, { state: 'visible' });
    await page.click(pricesPage.tabPrices); 
    await page.waitForSelector(pricesPage.offersBlock, { state: 'visible' });

} 