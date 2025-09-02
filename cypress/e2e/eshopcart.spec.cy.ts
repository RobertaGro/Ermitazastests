
describe('Ermitazas homepage', () => {
  it.only('should open ermitazas.lt', () => {
    cy.visit('https://www.ermitazas.lt/');
    cy.title().should('include', 'ermitazas.lt');

    //accept cookies
    cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll', { timeout: 10000 })
      .should('be.visible')
      .click()

    cy.get('button[aria-label="user button"]').first()
      .should('be.visible')
      .click()

    cy.get('#input-login-form-email')
      .should('be.visible')
      .type('vardasvardauskas2022@gmail.com');

    cy.get('#input-login-form-password')
      .should('be.visible')
      .type('slaptazodis2022');

    cy.get('button[type="submit"]')
      .first()
      .should('be.visible')
      .click({ force: true });

    cy.wait(5000);

    cy.contains('Mano paskyra')
      .should('be.visible');

    cy.get('#input-undefined')
      .should('be.visible')
      .clear()
      .type('Skalbyklė BOSCH WGE03200SN{enter}');

    cy.get('[data-testid="product-card"]')
      .contains('Skalbyklė BOSCH WGE03200SN')
      .click({ force: true });

    cy.wait(2000);

    cy.get('[data-testid="add-to-cart-button"]', { timeout: 10000 })
      .contains('499')
      .should('be.visible')
      .click();

    cy.contains('Prekė pridėta į krepšelį')
      .should('be.visible');

    cy.get('button.absolute.right-\\[16px\\].top-\\[15px\\]')
      .should('be.visible')
      .click();

    cy.get('#input-undefined')
      .type('Diržas MAKITA, greita jungtis, su žiedu{enter}', { delay: 50 })

    cy.get('[data-testid="product-card"]')
      .contains('Diržas MAKITA, greita jungtis, su žiedu')
      .click({ force: true });

    cy.wait(2000);

    cy.get('[data-testid="add-to-cart-button"]', { timeout: 10000 })
      .contains('18')
      .should('be.visible')
      .click();

    cy.get('button.absolute.right-\\[16px\\].top-\\[15px\\]')
      .should('be.visible')
      .click();



    cy.get('#input-undefined')
      .type('Vonios spintelė CERSANIT MODUO 40 Balta{enter}', { delay: 50 })

    cy.get('[data-testid="product-card"]')
      .contains('Vonios spintelė CERSANIT MODUO 40 Balta')
      .click({ force: true });

    cy.wait(8000);

    cy.get('[data-testid="add-to-cart-button"]', { timeout: 10000 })
      .contains('129')
      .should('be.visible')
      .click({ force: true });

    cy.get('button.absolute.right-\\[16px\\].top-\\[15px\\]')
      .should('be.visible')
      .click();


    //check the products in the cart
    cy.get('[data-testid="mini-cart-popover-button"]')
      .should('be.visible')
      .click();


    cy.contains('Skalbyklė BOSCH WGE03200SN')
      .should('be.visible');
    cy.contains('Diržas MAKITA, greita jungtis, su žiedu')
      .should('be.visible');
    cy.contains('Vonios spintelė CERSANIT MODUO 40 Balta')
      .should('be.visible');

    cy.get('[data-testid="cart-product-quantity"]')
      .first()
      .clear()
      .type('4{enter}');

    cy.get('[data-testid="cart-product-quantity"]')
      .first()
      .should('have.value', '4');

    cy.get('button[name="minus"][aria-label="Decrease quantity"]')
      .eq(1)
      .should('be.disabled')
      .click({ force: true })

    cy.get('[data-testid="cart-product-quantity"]')
      .eq(1)
      .should('have.value', '1');

    cy.get('button[name="plus"][aria-label="Increase quantity"]')
      .eq(2)
      .click({ force: true })

    cy.get('[data-testid="cart-product-quantity"]')
      .eq(2)
      .should('have.value', '2');

    cy.get('[data-testid="cart-product-remove-button"]')
      .eq(2)
      .click();

    cy.get('[data-testid="cart-product-remove-button"]')
      .eq(1)
      .click();

    cy.get('[data-testid="cart-product-remove-button"]')
      .eq(0)
      .click();

    cy.contains('Krepšelis tuščias', { timeout: 10000 })
      .should('be.visible');
  });
});