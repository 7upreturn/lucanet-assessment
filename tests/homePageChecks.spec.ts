import { HomePage } from "../pages/HomePage";
import { test } from "@playwright/test";

let homePage: HomePage;

test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.gotoHomePage();

    await page.context().clearCookies();
    await page.evaluate(() => {
        sessionStorage.clear();
    })

})

test.afterEach(async ({ page }) => {
    // Additional cleanup after each test if needed
    await page.context().clearCookies();
    await page.evaluate(() => {
        localStorage.clear();
        sessionStorage.clear();
    });
});

test('Wait for page load, allow cookies and verify hero heading', async () => {
    await homePage.verifyHeroHeading();
})

test('Verify that page title is CFO Solutions Platform', async () => {
    await homePage.verifyPageTitle();

})

test('Verify that navbar is visible and enabled', async () => {
    await homePage.verifyNavbarVisibility();
})

test('Verify that footer links are visible and enabled', async () => {
    await homePage.checkFooterLinks();
})

test('Verify that clicking on Solutions nav bar item scrolls to the section', async () => {
    await homePage.goToSolutionsPage();
    await homePage.verifySolutionsPage();
})
