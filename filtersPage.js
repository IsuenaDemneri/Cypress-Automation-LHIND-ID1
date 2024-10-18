class FiltersPage {
    hoverWomenMenu() {
        cy.contains('Women')
        .should('be.visible')
        .trigger('mouseover');
      }
  
      hoverTopsDropdown() {
        cy.contains('Tops')
        .should('be.visible')
        .trigger('mouseover'); 
      }
    
      selectJacket() {
        cy.contains('Jackets', { timeout: 10000 })
          .should('be.visible')
          .click();
      }

      clickColorDropdown() {
        cy.get('.filter-options-title', { timeout: 10000 }) 
          .contains('Color') 
          .click({ multiple: true }); 
      }
    
      selectColor() {
        cy.get('a[href*="https://magento.softwaretestingboard.com/women/tops-women/jackets-women.html?color=58"]')  
        .click({ force: true });
      }

      verifyProductsColorBorderedInRed() {   
        cy.get('.filter-value')
        .contains('Red');
     }

     selectPrice() {
        cy.get('.filter-options-title', { timeout: 10000 })
        .contains('Price')
        .click({ force: true });
     }

     selectPriceRange() {
      
      cy.get('a[href*="https://magento.softwaretestingboard.com/women/tops-women/jackets-women.html?color=58&price=50-60"]')  
      .click({ force: true });
      }

      verifyProductCount(expectedCount) {
        cy.get('.toolbar-amount').should('have.length', expectedCount);
      }
    
      verifyProductPrices(minPrice, maxPrice) {
        cy.get('.products.list.items.product-items').each(($el) => {
          cy.wrap($el).find('.price').invoke('text').then((text) => {
            const price = parseFloat(text.replace(/[^0-9.-]+/g, '')); 
            expect(price).to.be.gte(minPrice).and.be.lte(maxPrice);
          });
        });
      }
  }
  
  export default new FiltersPage();