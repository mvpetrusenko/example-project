import { test, expect } from '@playwright/test'; 
import { navigatorTo } from '../pageObject/homePage'; 
import { mainPage } from '../selectors/mainPage.selectors';
import { components } from '../fixture/dictionary.fixture';



test.describe('News Page Tests', () => {
    test.beforeEach(async ({ page }) => {
      await navigatorTo(page);
    });
  
    test('NC-TC-962: Go To News Page', async ({ page }) => { 

        expect(await page.textContent(mainPage.newsText)).toContain(components.news); 
        await page.click(mainPage.newsText); 
        expect(await page.textContent(mainPage.newsArticleTitle)).toContain(components.news); 

    }); 

    
    test.afterEach(async ({ page }) => {
      await page.close();
  });
});