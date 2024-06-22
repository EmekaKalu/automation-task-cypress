import BasePage from "./BasePage";
export default class InventoryPage extends BasePage {

    constructor() {
        super('/inventory.html');

        this.elements = {
            menuButton: () => cy.get('.bm-burger-button'),
            logoutButton: () => cy.get('#logout_sidebar_link'),
        }
    }

    clickMenuButton() {
        this.elements.menuButton().click();
        return this;
    }

    clickLogoutButton() {
        this.elements.logoutButton().click();
        return this;
    }

    logout() {
        return this
            .clickMenuButton()
            .clickLogoutButton();
    }
}