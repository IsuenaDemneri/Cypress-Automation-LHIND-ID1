import SignInPage from '../page-objects/signInPage';

describe('Sign In Test', () => {
  const email = `isuena.demneri@gmail.com`; 
  const password = 'Password123!'; 
  const username = 'Isuena Demneri'; 

  beforeEach(() => {
    cy.on('fail', (error) => {
      cy.screenshot('failure_screenshot', { capture: 'fullPage' });
      throw error; 
    });
  });

  it('should sign in successfully', () => {
    SignInPage.visit();
    SignInPage.clickSignIn();
    SignInPage.fillCredentials(email, password);
    SignInPage.submit();
    SignInPage.verifyUsernameDisplayed(username);
    SignInPage.signOut();
  });
});
