export class loginPage{
    loginPage_userName='#uname';
    loginPage_password='#pwd';
    loginPage_submitButton='[type="submit"]'
    naviagate(url :string){
        cy.visit(url)
    }
    enterUserName(uname:string){
        cy.get(this.loginPage_userName).type(uname)
    }
    enterUserPassword(upwd:string){
        cy.get(this.loginPage_password).type(upwd)
    }
    clickSubmit(){
        cy.get(this.loginPage_submitButton).click()
    }
}