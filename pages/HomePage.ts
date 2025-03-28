import { Locator, Page, expect } from "@playwright/test";
import { getBaseUrl } from "../config";
import homePageText from "../data/HomePageText.json";
import { acceptCookies } from "../utils/cookiesAcceptor";

export class HomePage {
    readonly page: Page;
    readonly title: Locator;

    constructor(page: Page) {
        this.page = page;
        

    }
    //Home Page Locators 


    heroHeading = () => this.page.locator('div.hero-advanced__headline.hero-advanced__headline--default');
    navbarSection = () => this.page.locator('#header')
    imprintLocator = () => this.page.getByRole('link', { name: 'Imprint' })
    complianceLocator = () => this.page.getByRole('link', { name: 'Compliance', exact: true })
    contractualTermsLocator = () => this.page.getByRole('link', { name: 'Contractual terms' })
    solutionsNavBarLocator = () => this.page.getByRole('link', { name: 'Solutions', exact: true })
    solutionsPageHeroImage = () => this.page.locator('#c36834').getByRole('img')

    async gotoHomePage() {
        await this.page.goto(getBaseUrl(), { waitUntil: "networkidle"});
        await acceptCookies(this.page);

    }

   

    async verifyHeroHeading() {
        await this.heroHeading().waitFor({state: 'visible'});
        await expect(this.heroHeading()).toContainText(homePageText.homePage.heroHeading);
    }

    async verifyPageTitle() {
        await expect(this.page).toHaveTitle(homePageText.homePage.pageTitle);
    }

    async verifyNavbarVisibility() {
        await this.navbarSection().waitFor({state: 'visible'});
        await expect(this.navbarSection()).toBeVisible();
        await expect(this.navbarSection()).toBeEnabled();
    }

    async checkFooterLinks(){
        await this.imprintLocator().scrollIntoViewIfNeeded();
        await expect(this.imprintLocator()).toBeVisible();
        await expect(this.complianceLocator()).toBeVisible();
        await expect(this.contractualTermsLocator()).toBeVisible();
        await expect(this.imprintLocator()).toBeEnabled();
        await expect(this.complianceLocator()).toBeEnabled();
        await expect(this.contractualTermsLocator()).toBeEnabled();
        await expect(this.imprintLocator()).toHaveAttribute('href', '/en/imprint/');
        await expect(this.complianceLocator()).toHaveAttribute('href', '/en/compliance/');
        await expect(this.contractualTermsLocator()).toHaveAttribute('href', '/en/contractual-terms/');
    }

    async goToSolutionsPage(){
        await this.solutionsNavBarLocator().scrollIntoViewIfNeeded();
        await this.solutionsNavBarLocator().click();
        

    }

    async verifySolutionsPage(){
        await expect(this.solutionsPageHeroImage()).toBeVisible();
        await expect(this.page).toHaveURL(homePageText.homePage.solutionsPageUrl);
    }

}   