import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import data from "../data.json"
import { assert } from "node:console";

test("Click to cartStore move to CartPage", async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoWebsite()
    await login.LoginUser(data.name, data.password)

    // Add item to cart so cart is not empty
    await page.getByRole('button', { name: 'Add to cart' }).first().click()

    // Click on shopping cart icon/link
    await page.locator('a.shopping_cart_link').click()

    // Verify navigation to cart page
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html')
    await expect(page.locator('.cart_list')).toBeVisible()
})

test("Verify added item appears in cart list by name and price", async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoWebsite();
    await login.LoginUser(data.name, data.password);

    const itemName = 'Sauce Labs Backpack';
    const itemPrice = '$29.99';

    await page.locator('.inventory_item').filter({ has: page.getByText(itemName) }).getByRole('button', { name: 'Add to cart' }).click();
    await page.locator('a.shopping_cart_link').click();

    const cartItem = page.locator('.cart_item', { has: page.getByText(itemName) });
    await expect(cartItem).toBeVisible();
    await expect(cartItem.locator('.inventory_item_price')).toHaveText(itemPrice);
});

test("Add all items to the card", async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoWebsite();
    await login.LoginUser(data.name, data.password);

    const buttons = page.locator('[data-test^="add-to-cart"]');

    while (await buttons.count() > 0) {
        await buttons.first().click();
    }

    await expect(page.locator('.shopping_cart_badge')).toHaveText('6');

    await page.waitForTimeout(1000)
})

test("Remove items update card count", async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoWebsite();
    await login.LoginUser(data.name, data.password);
    await page.getByRole('button', { name: 'Add to cart' }).nth(0).click()
    await page.getByRole('button', { name: 'Add to cart' }).nth(1).click()
    await expect(page.locator('.shopping_cart_link')).toHaveText('2')
    await page.locator('.shopping_cart_link').click()
    await expect(page).toHaveURL(/cart/)
    const itemsOncardPage = await page.locator('[data-test="inventory-item"]')
    await expect(itemsOncardPage).toHaveCount(2)
    // Remove item from the card
    await page.getByRole('button', { name: "Remove" }).first().click()
    await expect(page.locator('.shopping_cart_link')).toHaveText('1')
    await page.waitForTimeout(4000)



})

test("Back from Cart page to Shoping Page", async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoWebsite();
    await login.LoginUser(data.name, data.password);
    await page.locator('.shopping_cart_link').click()
    await expect(page).toHaveURL(/cart/)
    await page.waitForTimeout(2000)
    await page.getByRole('button', { name: 'Continue Shopping' }).click()
    expect(page).toHaveURL(/inventory/)
    await page.waitForTimeout(2000)

})

