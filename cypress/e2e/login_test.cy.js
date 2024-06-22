import InventoryPage from "../pages/InventoryPage";
import LoginPage from "../pages/LoginPage";

describe('Login Test', () => {
  it('Valid Login', () => {
    new LoginPage().login(Cypress.env('SAUCE_USERNAME'), Cypress.env('SAUCE_PASSWORD'))
    new InventoryPage().assertPageUrl().logout()
  });

  it('Invalid Login', () => {
    new LoginPage().login(Cypress.env('SAUCE_USERNAME'), "test")
    new LoginPage().verifyErrorMessage()
  });


});