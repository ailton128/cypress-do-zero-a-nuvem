Cypress.Commands.add('fillMandatoryFieldsAndSubmit',() => {
    cy.get('#firstName').type('Ailton')
    cy.get('#lastName').type('silva ')
    cy.get('#email').type('ailton240625@gmail.com ')
    cy.get('#open-text-area').type('Teste.')
    cy.contains('button', 'Enviar').click()
})