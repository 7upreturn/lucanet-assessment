import { Locator, Page, expect } from "@playwright/test";
import { getContactPageUrl } from "../config";
import contactFormFieldsData from "../data/ContactFormFieldsData.json";
import { acceptCookies } from "../utils/cookiesAcceptor";


export class ContactPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        
    }

    //Contact Form Fields Locators
    firstNameField = () => this.page.getByPlaceholder('First name*')
    lastNameField = () => this.page.getByPlaceholder('Last name*')
    businessEmailField = () => this.page.getByPlaceholder('Business email*')
    companyNameField = () => this.page.getByPlaceholder('Company*')
    jobTitleField = () => this.page.getByPlaceholder('Job title*')
    phoneNumberField = () => this.page.getByPlaceholder('Phone number*')
    countrySelectorOption = () => this.page.locator('select[name="country"]').selectOption('Romania');
    contactTopicOption = () => this.page.locator('select[name="contact_topic"]').selectOption('Other');
    purchaseCategoryOption = () => this.page.locator('select[name="purchase_category"]').selectOption('Consolidation and Financial Planning');
    userMessageField = () => this.page.getByPlaceholder('Your message*')
    furtherCommunicationCheckbox = () => this.page.getByRole('checkbox', { name: 'I agree to receive further' })
    sendRequestButton = () => this.page.getByRole('button', { name: 'Send Request' })
    fullContactFormLocator = () => this.page.locator('#c19822 div')


    async  goToContactPage() {
        await this.page.goto(getContactPageUrl(), { waitUntil: "networkidle"});
        await acceptCookies(this.page);
    }

    async fillContactForm() {
        await this.firstNameField().fill(contactFormFieldsData.contactForm.firstName);
        await this.lastNameField().fill(contactFormFieldsData.contactForm.lastName);
        await this.businessEmailField().fill(contactFormFieldsData.contactForm.businessEmail);
        await this.companyNameField().fill(contactFormFieldsData.contactForm.companyName);
        await this.jobTitleField().fill(contactFormFieldsData.contactForm.jobTitle);
        await this.phoneNumberField().fill(contactFormFieldsData.contactForm.phoneNumber);
        await this.countrySelectorOption()
        await this.contactTopicOption()
        await this.purchaseCategoryOption()
        await this.userMessageField().fill(contactFormFieldsData.contactForm.userMessage);
        await this.furtherCommunicationCheckbox().check();
    
        //await this.sendRequestButton().click(); THIS IS COMMENTED OUT TO NOT FLOOD PRODUCTION ENVIRONMENT WITH TEST REQUESTS

    }
   
    

}