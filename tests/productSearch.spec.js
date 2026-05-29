import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import data from "../data.json"
test("Check the Product on low to high Criteria", async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoWebsite()
    await login.LoginUser(data.name, data.password)
    await page.locator('.product_sort_container').selectOption('lohi')
    await expect(page.locator('.inventory_item_name ').first()).toHaveText('Sauce Labs Onesie')
})

test.only("Check click product show same Details", async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoWebsite()
    await login.LoginUser(data.name, data.password)
    const productName = await page.locator('.inventory_item_name').first().innerText();
    await page.locator('.inventory_item_name').first().click();

    await expect(page).toHaveURL(/inventory-item\.html/);
    await expect(page.locator('.inventory_details_name')).toHaveText(productName);

})

test("Card Count zero for first time visit", async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoWebsite()
    await login.LoginUser(data.name, data.password)
    await expect(page).toHaveURL(/inventory/)
    await expect(page.locator('.shopping_cart_badge')).toHaveCount(0)
})

test.only("Add to cart increse the Count of  Shopping Cart", async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoWebsite()
    await login.LoginUser(data.name, data.password)
    await expect(page).toHaveURL(/inventory/)
    await page.getByRole('button',{name:'Add to cart'}).first().click()
    await expect(page.locator('.shopping_cart_badge')).toHaveCount(1)
})