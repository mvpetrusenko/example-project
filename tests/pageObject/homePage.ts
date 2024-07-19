import { Page } from '@playwright/test'; 
import { expect } from '@playwright/test'; 
import { mainPage } from '../selectors/mainPage.selectors'; 
import { aboutDrugPage } from '../selectors/aboutDrug.selectors'; 
import { mainConfig } from '../fixture/constants.fixture'; 




  export async function baseSearch(page: Page, term: string) :Promise<void> {
 
    await page.waitForSelector( mainPage.headerWrapper, { state: 'hidden' });

    await page.evaluate(selector => {
      const element = document.querySelector(selector);
      if (element) element.setAttribute('style', 'display: block;');
    }, mainPage.headerWrapper);

    await page.waitForSelector(mainPage.inputSearch, { state: 'visible' }); 
    await page.fill(mainPage.inputSearch, term);


  } 

  export async function navigatorTo(page: Page){
    await page.goto(mainConfig.baseUrl);  
    const currentUrl = page.url();
    expect(currentUrl).toContain(mainConfig.baseUrl);
} 

export async function clickDrugItem(page: Page) { 

  await page.waitForSelector(mainPage.firstResult, { state: 'visible' });
  await page.click(mainPage.firstResult); 
  await page.waitForSelector(aboutDrugPage.tabAboutDrug, { state: 'visible' });
} 

export async function deleteDrugFromFavorites(page: Page) {

  await page.click(aboutDrugPage.selectedHeartIcon); 
  await expect(page.locator(aboutDrugPage.emptyFavoritesPage)).toBeVisible(); 

} 

export async function changeLocalization (page: Page, language: string) {

  const ru = 'ru'; 

  if(language === ru) {
    await page.waitForSelector(mainPage.ruSwitcher, { state: 'visible' }); 
    await page.click(mainPage.ruSwitcher); 
  } 
  else {
    await page.waitForSelector(mainPage.uaSwitcher, { state: 'visible' }); 
    await page.click(mainPage.uaSwitcher); 
  }
} 

