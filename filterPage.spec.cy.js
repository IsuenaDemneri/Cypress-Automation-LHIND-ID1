import SignInPage from '../page-objects/signInPage';
import FiltersPage from '../page-objects/filtersPage';

describe('Check Page Filters Test', () => {
  const email = 'isuena.demneri@gmail.com'; 
  const password = 'Password123!';

  beforeEach(() => {
    cy.on('fail', (error) => {
     
      cy.screenshot('failure_screenshot', { capture: 'fullPage' });
      throw error; 
    });
  });

  it('should check page filters work correctly', () => {
    
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
    

    FiltersPage.verifyProductCount(2);

    FiltersPage.verifyProductPrices(50, 59.99); 
  });
});
