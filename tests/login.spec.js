import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { LogoutPage } from "../pages/LogoutPage";
import data from "../data.json"

test('Login test and logout', async ({ page }) => {

    const login = new LoginPage(page);
    await login.gotoWebsite()
    await login.LoginUser(data.name, data.password)
    await expect(page).toHaveURL(/inventory.html/);
    const logout = new LogoutPage(page)
    await page.waitForTimeout(3000)
    await logout.LogoutUser()
    await expect(page).toHaveURL('https://www.saucedemo.com/');
})

test('No userName Present or wrong userName', async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoWebsite()
    await login.LoginUser("wrong_user", data.password)
    await expect(page.locator('[data-test="error"]'))
        .toContainText('Epic sadface: Username and password do not match any user in this service')
})

test("No password Present or wrong password", async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoWebsite()
    await login.LoginUser("wrong_user", data.password)
    await expect(page.locator('[data-test="error"]'))
        .toContainText('Username and password do not match ')
})

test("Invetory Page heading Check",async({page})=>{
    
    const login = new LoginPage(page);
    await login.gotoWebsite()
    await login.LoginUser(data.name, data.password)
    await page.waitForTimeout(3000)
    await expect(page).toHaveTitle('Swag Labs')
})


test("Page referesh move remain on Same  page (Inventory Page)",async({page})=>{
      const login = new LoginPage(page);
    await login.gotoWebsite()
    await login.LoginUser(data.name, data.password)
    await page.waitForTimeout(3000)
    await expect(page).toHaveTitle('Swag Labs')
    await page.reload()
    await expect(page).toHaveURL(/inventory/)
})