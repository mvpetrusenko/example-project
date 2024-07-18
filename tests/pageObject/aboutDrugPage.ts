import { Page, expect } from '@playwright/test'; 
import { aboutDrugPage} from '../selectors/aboutDrug.selectors';
import { components } from '../fixture/dictionary.fixture'; 
import { changeGeoLocationCategoriesPage } from '../pageObject/categoriesPage';


export async function addDrugToFavorite(page: Page) { 

  await page.waitForSelector(aboutDrugPage.unSelectedHeartIcon, { state: 'hidden' });

  await page.evaluate(selector => {
    const element = document.querySelector(selector);
    if (element) element.setAttribute('style', 'display: block;');
  }, aboutDrugPage.unSelectedHeartIcon);
    
    await page.click(aboutDrugPage.unSelectedHeartIcon); 
    await page.waitForSelector(aboutDrugPage.selectedHeartIcon, { state: 'visible' }); 
    await page.click(aboutDrugPage.buttonSelected); 
  
} 


export async function compareDrugPriceQuantityInfo(page: Page) {
  let quantityCity1 = await page.textContent(aboutDrugPage.quantityInDrugStores); 
  let minPriceFrom1 = await page.textContent(aboutDrugPage.minPriceFrom);
 await changeGeoLocationCategoriesPage(page, components.city1); 
 let quantityCity2 = await page.textContent(aboutDrugPage.quantityInDrugStores); 
 let minPriceFrom2 = await page.textContent(aboutDrugPage.minPriceFrom);
 expect(quantityCity1).not.toEqual(quantityCity2); 
 expect(minPriceFrom1).not.toEqual(minPriceFrom2); 

}
  

  