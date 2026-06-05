import { LoginPage } from "./LoginPage"

export class Checkout {

    constructor(page) {
        this.page = page
        this.login = new LoginPage(page)
        this.ItemSelect = page.getByRole('button', { name: 'Add to cart' }).first()
        this.CartStore = page.locator('.shopping_cart_container')
        this.CheckoutBtn = page.getByRole('button', { name: 'Checkout' })
    }

    async CheckoutPageFlow(name, password) {
        await this.login.gotoWebsite()
        await this.login.LoginUser(name, password)
        await this.ItemSelect.click()
        await this.CartStore.click()
        await this.CheckoutBtn.click()

    }
}