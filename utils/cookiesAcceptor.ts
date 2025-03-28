import { Page } from "@playwright/test";

/**
 * Global helper function to accept cookies on any page
 * @param page The Playwright Page object
 */
export async function acceptCookies(page: Page): Promise<void> {
  try {
    // Use the specific selector for the cookie accept button
    const cookieButton = page.getByRole('button', { name: 'Allow all cookies' });
    
    // Check if cookie button is visible with a reasonable timeout
    if (await cookieButton.isVisible({ timeout: 5000 })) {
      await cookieButton.click();
      // Optional: wait a moment for any animations to complete
      await page.waitForTimeout(500);
    }
  } catch (e) {
    // No cookie banner found or already accepted
    console.log("Cookie banner not found or already accepted");
  }
}