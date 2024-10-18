import SignInPage from '../page-objects/signInPage';
import EmptyShoppingCartPage from '../page-objects/emptyShoppingCartPage';


describe('Empty Shopping Cart Test', () => {
  const email = 'isuena.demneri@gmail.com'; 
  const password = 'Password123!'; 

  beforeEach(() => {
    cy.on('fail', (error) => {
      cy.screenshot('failure_screenshot', { capture: 'fullPage' });
      throw error; 
    });
  });

  it('should empty the shopping cart completely', () => {
    SignInPage.visit();
    SignInPage.clickSignIn();
    SignInPage.fillCredentials(email, password);
    SignInPage.submit();

    EmptyShoppingCartPage.openShoppingBasket()
  
    EmptyShoppingCartPage.deleteFirstItem();

    it('should delete the first item in the cart', () => {

      cy.get('.minicart-items').find('.minicart-items').should('have.length', 3);
    });

    EmptyShoppingCartPage.verifyCartIsEmpty();
    
  });
});