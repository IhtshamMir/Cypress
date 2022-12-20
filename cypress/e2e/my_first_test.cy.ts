/// <reference types="cypress"/>
it('Linkedin test',   () => {
    cy.visit('https://trytestingthis.netlify.app/')
})
it('Login test', () => {
    cy.visit('https://erp.arbisoft.com/')
    cy.wait(2000)
    cy.get('.MnpxuiGrid-grid-xs-4 > .MuiButtonBase-root').click()
    cy.get('.jss2700')
        .should('contain','Forgot')
        .should('have.class', 'jss2700')
        .should('be.visible')
    cy.get('.jss2700').invoke('attr','class')
        .should('equal','jss2700')
    cy.get('.jss2700')
        .should('contain','Forgot')
        .and('have.class', 'jss2700')

     // Explicit assertions
    expect(true).to.be.true
    let name='Ihtsham';
    expect(name).to.be.equal('Ihtsham')
    assert.equal(4,5,'Not equal')
})