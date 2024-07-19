import { Page } from '@playwright/test'; 
import { mainPage } from '../selectors/mainPage.selectors'; 


export async function changeGeoLocationCategoriesPage(page: Page, city: string) { 

    await page.waitForSelector(mainPage.buttonAddress, { state: 'visible' });
    await page.click(mainPage.buttonAddress); 
    await page.waitForSelector(mainPage.inputSearchCity, { state: 'visible' }); 
    await page.fill(mainPage.inputSearchCity, city); 
    await page.click(mainPage.buttonSearchCity); 
    await page.waitForSelector(mainPage.firstCitySuggestion, { state: 'visible' });
    await page.click(mainPage.firstCitySuggestion); 
    await page.waitForSelector(mainPage.firstCitySuggestion, { state: 'hidden' }); 
    
  } 