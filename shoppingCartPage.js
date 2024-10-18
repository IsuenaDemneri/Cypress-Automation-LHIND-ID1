class ShoppingCartPage {

    addSizeToCart() {

    cy.get('.products.list.items.product-items').each(($el) => {
      cy.wrap($el).find('.item.product.product-item').first().click();

      cy.get('.swatch-attribute.size')
      .contains('M')
      .should('be.visible')
      .click({ multiple: true, force: true });

    });
  }
      addColorToCart() {
        cy.get('.swatch-option.color')
        .first()
        .click({ multiple: true, force: true });

        cy.contains('Add to Cart').click();
  
      }
    
    verifySuccessMessage() {
    cy.get('.message-success.success.message').should('be.visible')
    .and('contain.text', 'You added Inez Full Zip Jacket to your shopping cart.')
    .and('have.class', 'success');
  }

    openShoppingCart() {
    cy.get('.message-success.success.message a[href*="checkout/cart"]').click(); 
  }

    verifyOnShoppingCartPage() {
    cy.url().should('include', '/checkout/cart');
    cy.get('.page-title').should('contain.text', 'Shopping Cart');
  }

    verifyPricesMatch() {
    let totalPrice = 0;
    
    cy.get('.cart.items.data.table').each(($el) => {
    cy.wrap($el).find('.price-excluding-tax').invoke('text').then((priceText) => {

        const price = parseFloat(priceText.replace(/[^0-9.-]+/g, ""));
        totalPrice += price;
      });
      }).then(() => {

      cy.get('.cart-summary .price').invoke('text').then((totalText) => {
      const orderTotal = parseFloat(totalText.replace(/[^0-9.-]+/g, ""));
      const tolerance = 0.01;
      expect(orderTotal).to.eq(totalPrice);
      });
    });
  }
}

export default new ShoppingCartPage();