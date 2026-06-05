import { Checkout } from "./Checkout"


export class Payment {
    constructor(page) {
        this.page = page
        this.checkoutUser = new Checkout(page)
        this.firstName = page.getByPlaceholder('First Name')
        this.lastName = page.getByPlaceholder('Last Name')
        this.pinCode = page.getByPlaceholder('Zip/Postal Code')
        this.ContinueBtn =  page.locator('#continue')
    }

    async paymentGateWay(name, password) {
        await this.checkoutUser.CheckoutPageFlow(name, password)
        await this.firstName.fill("abc")
        await this.lastName.fill("xyz")
        await this.pinCode.fill('411030')
        await this.ContinueBtn.click()
    }
}