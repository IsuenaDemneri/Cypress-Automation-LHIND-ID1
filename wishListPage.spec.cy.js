import SignInPage from '../page-objects/signInPage';
import FiltersPage from '../page-objects/filtersPage';
import WishListPage from '../page-objects/wishListPage';

describe('Wish List Test', () => {
  const email = 'isuena.demneri@gmail.com'; 
  const password = 'Password123!'; 
  const itemCount = Number
  const initialCount = 2;

  beforeEach(() => {
    cy.on('fail', (error) => {
     
      cy.screenshot('failure_screenshot', { capture: 'fullPage' });
      throw error; 
    });
  });

  it('should manage wish list correctly', () => {
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


    WishListPage.removePriceFilter();

    WishListPage.verifyIncreasedItemCount(initialCount);
    
    WishListPage.addFirstTwoItemsToWishList();

    WishListPage.verifyWishListCount(2);
  });
});




