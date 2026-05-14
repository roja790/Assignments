import { test, expect } from '@playwright/test';

test('Logo', async ({ page }) => {
    /*To identify the logo in the page------------------------------------------------------------------*/
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  /*---------------------------------------------To check whether the logo is disalyed  --------------*/
  await expect(page.getByTitle('ParaBank')).toBeVisible();
  /*----------------To display the text-------------------*/

  await expect(page.locator('p.caption')).toHaveText("Experience the difference");
 /*-----------------------------------enter Invalid username-----------------------------*/
await page.locator('input[name="username"]').fill('john');
/*-----------------------Empty password------------------------------*/
await page.locator('input[name="password"]').fill('');
/*-----------------------------------------------------click Login Button------------*/
await page.locator('input.button').click();
/**------------------------validate the error message */
await expect(page.locator('p.error')).toContainText('Please enter a username and password.');
await page.locator('li>a[href="admin.htm"]').click;
await page.locator('input[value="soap"]').click();
});


