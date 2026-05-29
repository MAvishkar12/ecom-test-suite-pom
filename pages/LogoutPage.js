export class LogoutPage{
    constructor(page){
        this.page=page
        this.hamberger=page.locator('.bm-burger-button')
        this.logoutText=page.getByText('Logout')
    }

    async LogoutUser(){
        await this.hamberger.click()
        await this.logoutText.click()
    }
}