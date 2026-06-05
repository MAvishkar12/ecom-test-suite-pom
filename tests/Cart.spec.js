import {test,expect} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import data from "../data.json"

test("Click to cartStore move to CartPage",async({page})=>{
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

test.only("Verify added item appears in cart list by name and price", async ({ page }) => {
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