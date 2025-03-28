import { ContactPage } from "../pages/ContactPage";
import { test } from "@playwright/test";



let contactPage: ContactPage;

test.beforeEach(async ({ page }) => {

    contactPage = new ContactPage(page);
    await contactPage.goToContactPage();
    await page.context().clearCookies();
    await page.evaluate(() => {
        sessionStorage.clear();
    });
})


test('Fill out the contact form and take a screenshot', async () => {
    await contactPage.fillContactForm();
    
})
