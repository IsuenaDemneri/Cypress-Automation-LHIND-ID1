import AccountPage from '../page-objects/accountPage';

describe('Create an Account Test', () => {
  beforeEach(() => {
    cy.on('fail', (error) => {
      
      cy.screenshot('failure_screenshot', { capture: 'fullPage' });
      throw error; 
    });
  });

  it('should create a new account successfully', () => {
    AccountPage.visit();
    AccountPage.clickCreateAccount();
    AccountPage.checkTitle('Create New Customer Account');
    
    const firstName = 'Isuena';
    const lastName = 'Demneri';
    const email = `isuena.demneri@gmail.com`;
    const password = 'Password123!';

    AccountPage.fillForm(firstName, lastName, email, password);
    AccountPage.submit();
    AccountPage.verifySuccessMessage();
    AccountPage.signOut();
  });
});
