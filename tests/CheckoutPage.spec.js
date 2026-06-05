import { test, expect } from "@playwright/test";
import { Checkout } from "../pages/Checkout";
import data from "../data.json"
import { Payment } from "../pages/Payment";
import { errorTestCases } from "../utils/UserPaymentError";

test.beforeEach("Flow from login to Checkout Page ", async ({ page }) => {
    const checkout = new Checkout(page)
    await checkout.CheckoutPageFlow(data.name, data.password)

    await expect(page).toHaveURL(/checkout-step-one.html/);

})

errorTestCases.forEach(({ description, firstName, lastName, postalCode, expectedError }) => {
    test(description, async ({ page }) => {
        await page.getByPlaceholder('First Name').fill(firstName)
        await page.getByPlaceholder('Last Name').fill(lastName)
        await page.getByPlaceholder('Zip/Postal Code').fill(postalCode)
        await page.locator('[name="continue"]').click()
        await expect(page.getByRole('heading')).toContainText(expectedError)
    })
})

test.skip('Continue to payment option', async ({ page }) => {
    const payment = new Payment(page)
    await payment.paymentGateWay(data.name, data.password)
    await expect(page).toHaveURL(/checkout-step-two/)
    await expect(page.locator('[data-test="payment-info-label"]')).toContainText('Payment Information:')
    await expect(page.locator('[data-test="shipping-info-label"]')).toContainText('Shipping Information:')
})

test.skip('Cancel make reback to product page', async ({ page }) => {
    const payment = new Payment(page)
    await payment.paymentGateWay(data.name, data.password)
    await expect(page).toHaveURL(/checkout-step-two/)
    await expect(page.locator('[data-test="payment-info-label"]')).toContainText('Payment Information:')
    await expect(page.locator('[data-test="shipping-info-label"]')).toContainText('Shipping Information:')
    await page.getByRole('button', { name: 'Cancel' }).click()
    await expect(page).toHaveURL(/inventory/)
})

test.only("Make product delivery start", async ({ page }) => {
    const payment = new Payment(page)
    await payment.paymentGateWay(data.name, data.password)
    await expect(page).toHaveURL(/checkout-step-two/)
    await page.getByRole('button', { name: 'Finish' }).click()
    await expect(page).toHaveURL(/checkout-complete/)
    await expect(page.getByText('Your order has been dispatched, and will arrive just as fast as the pony can get there!', { exact: true })).toBeVisible()
    await expect(page.getByRole('heading')).toContainText('Thank you for your order!')
    await expect(page.getByRole('button', { name: 'Back Home' })).toBeVisible()
    await page.getByRole('button', { name: 'Back Home' }).click()
    await expect(page).toHaveURL(/inventory/)
})
