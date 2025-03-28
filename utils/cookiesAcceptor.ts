import { Page } from "@playwright/test";

/**
 * Global helper function to accept cookies on any page
 * @param page
 */
export async function acceptCookies(page: Page): Promise<void> {
  try {

    const cookieButton = page.getByRole('button', { name: 'Allow all cookies' });
    
    if (await cookieButton.isVisible({ timeout: 5000 })) {
      await cookieButton.click();
    }
  } catch (e) {
    // No cookie banner found or already accepted
    console.log("Cookie banner not found or already accepted");
  }
}