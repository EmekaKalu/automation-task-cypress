export default class BasePage {
    constructor(path = '/') {
        this.path = path;
        this.baseUrl = Cypress.env('SAUCE_URL');
        this.url = `${this.baseUrl}${this.path}`
    }

    visit() {
        cy.visit(this.url)
        return this;
    }

    assertPageUrl() {
        cy.location('pathname').should('eq', this.path)
        return this;
    }
}