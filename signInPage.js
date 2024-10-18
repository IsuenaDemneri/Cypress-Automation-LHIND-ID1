class SignInPage {
    visit() {
      cy.visit('https://magento.softwaretestingboard.com/');
    }
  
    clickSignIn()  {
        cy.get('a[href*="https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/"]')
          .first() 
          .click({ force: true }); 
    }
  
    fillCredentials(email, password) {
      cy.get('input[name="login[username]"]').type(email);
      cy.get('input[name="login[password]"]').type(password);
    }
  
    submit() {
        cy.get('button[type="submit"]').contains('Sign In').click();
      }
  
    verifyUsernameDisplayed(username) {
      cy.contains('Welcome, Isuena Demneri!').should('be.visible')
        .and('contain.text', username);
    }
  
    signOut() {
        cy.get('a[href*="https://magento.softwaretestingboard.com/customer/account/logout/"]')
          .first() 
          .click({ force: true }); 
    }
  }
  
  export default new SignInPage();