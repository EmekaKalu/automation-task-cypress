import BasePage from "./BasePage";
export default class LoginPage extends BasePage {
    constructor() {
        super('/');

        this.elements = {
            username: () => cy.get('#user-name'),
            password: () => cy.get('#password'),
            loginButton: () => cy.get('#login-button'),
            errorMessage: () => cy.get('[data-test="error"]')
        }
    }

    fillUsername(username) {
        this.elements.username().type(username);
        return this;
    }

    fillPassword(password) {
        this.elements.password().type(password);
        return this;
    }

    clickLoginButton() {
        this.elements.loginButton().click();
        return this;
    }

    verifyErrorMessage() {
        this.elements.errorMessage().should('be.visible');
        this.elements.errorMessage().should('contain', 'Epic sadface: Username and password do not match any user in this service');
        return this;
    }

    login(username, password) {
        return this.visit()
            .fillUsername(username)
            .fillPassword(password)
            .clickLoginButton()
    }

}