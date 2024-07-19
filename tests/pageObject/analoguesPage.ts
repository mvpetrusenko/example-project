import { Page } from '@playwright/test'; 
import { analoguePage } from '../selectors/analogues.selectors'; 
import { drugs } from '../fixture/dictionary.fixture'; 
import { baseSearch, clickDrugItem } from '../pageObject/homePage'; 
import { searchResults } from '../pageObject/searchResultsPage'; 


export async function goToAnalogueTab(page: Page) {
  await baseSearch(page, drugs.ascorbine); 
  await searchResults(page);
  await clickDrugItem(page);  
  await page.waitForSelector(analoguePage.tabAnalogues, { state: 'visible' });
  await page.click(analoguePage.tabAnalogues);

}
