import { Page, expect } from '@playwright/test';  
import { mainPage} from '../selectors/mainPage.selectors';

export async function searchResults (page: Page) { 

    await page.waitForSelector(mainPage.buttonSearch, { state: 'visible' }); 
    await page.click(mainPage.buttonSearch);
    await page.waitForSelector(mainPage.searchResult, { state: 'visible' });
    
  }