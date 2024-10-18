class AccountPage {
    visit() {
      cy.visit('https://magento.softwaretestingboard.com/');
    }
  
    clickCreateAccount() {
      cy.get('a[href*="https://magento.softwaretestingboard.com/customer/account/create/"]')
        .first() 
        .click({ force: true }); 
  }
    checkTitle(expectedTitle) {
      cy.title().should('eq', expectedTitle);
    }
  
    fillForm(firstName, lastName, email, password) {
      cy.get('input[name="firstname"]').type(firstName);
      cy.get('input[name="lastname"]').type(lastName);
      cy.get('input[name="email"]').type(email);
      cy.get('input[name="password"]').first().type(password); 
      cy.get('input[name="password_confirmation"]').type(password);
    }
  
    submit() {
      cy.get('button[type="submit"]').contains('Create an Account').click();
    }
  
    verifySuccessMessage() {
      cy.get('.message-success').should('be.visible')
        .and('contain.text', 'Thank you for registering with Main Website Store.')
        .and('have.class', 'success');
    }
  
    signOut() {
      cy.get('a[href*="https://magento.softwaretestingboard.com/customer/account/logout/"]')
        .first() 
        .click({ force: true }); 
  }
}
  export default new AccountPage();