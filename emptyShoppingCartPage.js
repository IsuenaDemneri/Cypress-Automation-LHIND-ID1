class EmptyShoppingCartPage {

  openShoppingBasket(){

    cy.get('.items-total', { timeout: 15000 }) 
        .should('have.length.greaterThan', 0);
        cy.get('.counter-number')
        .click({ multiple: true });
  }

  deleteFirstItem() {
  
    cy.get('.minicart-items .action.delete', { timeout: 10000 }).then($buttons => {
      const buttons = $buttons.toArray(); 
    
      const clickDeleteButton = (index) => {
          if (index < buttons.length) { 
              cy.wrap(buttons[index]) 
                  .click({ force: true }); 

            
              cy.get('.action-primary', { timeout: 5000 })
                  .should('be.visible') 
                  .click(); 

              
              cy.get('.action-primary', { timeout: 5000 }).should('not.exist');

              
              clickDeleteButton(index + 1);
          } else {
              cy.log('No more items to delete');
          }
      };
      
    
      clickDeleteButton(0);
  });
}
      verifyCartIsEmpty() {
      cy.get('.empty-cart-message').should('be.visible')
      .and('contain.text', 'You have no items in your shopping cart.');

  }
}

export default new EmptyShoppingCartPage();

