
describe('Ermitazas homepage', () => {
  it.only('should open ermitazas.lt', () => {
    cy.visit('https://www.ermitazas.lt/');
    cy.title().should('include', 'ermitazas.lt');
    cy.get('body', { timeout: 30000 }).should('be.visible')

    //accept cookies
    cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll', { timeout: 10000 })
      .should('be.visible')
      .click()

    cy.get('button[aria-label="user button"]').first()
      .should('be.visible')
      .click()

    cy.contains('Registruotis')
      .click()

    cy.get('body', { timeout: 30000 }).should('be.visible')

    cy.get('form#register-form', { timeout: 20000 })
      .should('be.visible')

    cy.get('[data-testid="input-register-form-email"]', { timeout: 10000 })
      .should('be.visible')
      .and('be.enabled')
      .type('vardasvardauskas2022@gmail.com');

    cy.get('[data-testid="input-register-form-password"]')
      .should('be.visible')
      .and('be.enabled')
      .type('slaptazodis2022');

    cy.get('[data-testid="input-register-form-repeatPassword"]')
      .should('be.visible')
      .and('be.enabled')
      .type('slaptazodis2022');

    cy.get('label[for="checkbox-register-form-privacy"]')
      .click({ force: true })

    cy.get('[data-testid="checkbox-register-form-privacy"]')
      .should('be.checked');


    cy.get('button[type="submit"]')
      .first()
      .click({ force: true });

    cy.contains('Toks el. paštas jau egzistuoja!')
      .should('be.visible');
      
    cy.contains('Registracija nepavyko')
      .should('be.visible');

  });
});