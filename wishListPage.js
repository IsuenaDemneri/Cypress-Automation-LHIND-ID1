class WishListPage {
    removePriceFilter() {
       cy.get('.action.remove', { timeout: 15000 })
       .last()
       .click({force:true})
      }

     verifyIncreasedItemCount(initialCount) {
      cy.get('.toolbar-number').should('have.length', initialCount);
     }

      addFirstTwoItemsToWishList() {
        cy.get('iframe').then(($iframe) => {
          if ($iframe.is(':visible')) {
          
            cy.get('iframe').invoke('hide'); 
          }
        });
      
        cy.get('.products.list.items.product-items').each(($el, index) => {
          if (index = 2) {
           
            cy.wrap($el).scrollIntoView();
    
            cy.wrap($el)
              .find('.action.towishlist')
              .click({ multiple: true ,force: true });
    
            cy.get('.message-success')
              .should('contain.text', 'has been added to your Wish List');
          }
        }); 
          }
  
     verifyWishListCount(expectedCount) {
      cy.get('.toolbar-number').should('have.length', expectedCount);
    
    }
  }
  
  export default new WishListPage();
  