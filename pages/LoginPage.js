import { test, expect } from "@playwright/test";
export class LoginPage {
    constructor(page) {
        this.page = page
        this.userName = page.getByPlaceholder('Username')
        this.password = page.getByPlaceholder('Password')
        this.button = page.getByRole('button', { name: 'Login' })
    }
    async gotoWebsite() {
        await this.page.goto('https://www.saucedemo.com/')
    }
    async LoginUser(name,password) {
        await this.userName.fill(name)
        await this.password.fill(password)
        await this.button.click()
    }
}

