import { test, expect } from '@playwright/test';
import { navigatorTo } from '../pageObject/homePage'; 
import { tabs } from '../fixture/dictionary.fixture';
import { analoguePage } from '../selectors/analogues.selectors'; 
import { mainPage } from '../selectors/mainPage.selectors'; 
import { aboutDrugPage } from '../selectors/aboutDrug.selectors'; 
import { goToAnalogueTab } from '../pageObject/analoguesPage';


test.describe('Analogues Page Tests', () => {
    test.beforeEach(async ({ page }) => {
        await navigatorTo(page);
      });
  
    

    test('NC-TC-85: Verify Drug Name is Clickable', async ({ page }) => { 

        await goToAnalogueTab(page); 
        await page.click(mainPage.firstResult); 
        expect(await page.textContent(aboutDrugPage.tabAboutDrug)).toContain(tabs.aboutDrugTabUa); 
        

    }); 

    test('NC-TC-86: Verify Drug Photo is Clickable', async ({ page }) => { 

        await goToAnalogueTab(page); 
        await page.click(mainPage.firstResultPhoto); 
        expect(await page.textContent(aboutDrugPage.tabAboutDrug)).toContain(tabs.aboutDrugTabUa); 
        

    }); 

    test('NC-TC-89: Check Tile Display Mode', async ({ page }) => { 

        await goToAnalogueTab(page); 
        await page.click(analoguePage.buttonGrid); 
        await expect(page.locator(analoguePage.gridDisplay)).toBeVisible();
        await page.click(analoguePage.buttonTile); 
        await expect(page.locator(analoguePage.tileDisplay)).toBeVisible();
         

    }); 

    test('NC-TC-90: Check Grid Display Mode', async ({ page }) => { 

        await goToAnalogueTab(page); 
        await page.click(analoguePage.buttonGrid); 
        await expect(page.locator(analoguePage.gridDisplay)).toBeVisible();
         

    }); 



    test.afterEach(async ({ page }) => {
        await page.close();
    });
  });