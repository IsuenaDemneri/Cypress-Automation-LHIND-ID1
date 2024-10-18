import SignInPage from '../page-objects/signInPage';
import FiltersPage from '../page-objects/filtersPage';
import ShoppingCartPage from '../page-objects/shoppingCartPage';

describe('Shopping Cart Test', () => {
  const email = 'isuena.demneri@gmail.com'; 
  const password = 'Password123!'; 

  beforeEach(() => {
    cy.on('fail', (error) => {
      cy.screenshot('failure_screenshot', { capture: 'fullPage' });
      throw error; 
    });
  });

  it('should add items to shopping cart and verify totals', () => {
   
    SignInPage.visit();
    SignInPage.clickSignIn();
    SignInPage.fillCredentials(email, password);
    SignInPage.submit();
    
    FiltersPage.hoverWomenMenu();
    FiltersPage.hoverTopsDropdown();
    FiltersPage.selectJacket();
    FiltersPage.clickColorDropdown();

    FiltersPage.selectColor();
    FiltersPage.verifyProductsColorBorderedInRed();
    
    FiltersPage.selectPrice();
    FiltersPage.selectPriceRange();
    
    ShoppingCartPage.addSizeToCart();
    ShoppingCartPage.addColorToCart();
    ShoppingCartPage.verifySuccessMessage();
    
    ShoppingCartPage.openShoppingCart();
    ShoppingCartPage.verifyOnShoppingCartPage();
    
    ShoppingCartPage.verifyPricesMatch();
  });
});
