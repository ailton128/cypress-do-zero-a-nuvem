const { CypressTestComponentRenderer } = require("cypress/angular")

describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(( )=>{
    cy.visit('./src/index.html')
  })
  it('verifica o título da aplicação', () => {
  cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
  })
  it('preenche os campos obrigatórios e envia o formulário',()=> {
    
    const longText =Cypress._.repeat('Bahia o campeão, Bahia o campeão', 10 )
    cy.get('#firstName').type('Ailton')
    cy.get('#lastName').type('silva ')
    cy.get('#email').type('ailton240625@gmail.com')
    cy.get('#open-text-area').type(longText, {delay: 0 })
    cy.contains('button', 'Enviar').click()

    cy.get('.success').should('be.visible')
    
  })
  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida',()=> {
    cy.get('#firstName').type('Ailton')
    cy.get('#lastName').type('silva ')
    cy.get('#email').type('ailton240625@gmail,com ')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()

    cy.get('.error').should('be.visible')
})
   it('campo de telefone continua vazio quando preenchido com valor não-numerico',()=>{
   cy.get('#phone')
   .type('abcde')
   .should('have.value', '')
    })
      //Exercico extra 4
   it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário',()=>{
   cy.get('#firstName').type('Ailton')
   cy.get('#lastName').type('silva ')
   cy.get('#email').type('ailton240625@gmail,com ')
   cy.get('#open-text-area').type('Teste')
   cy.get('[for="phone-checkbox"]').click()
   cy.contains('button', 'Enviar').click()
   
   cy.get('.error').should('be.visible')
   
      })
  it('preenche e limpa os campos nome, sobrenome, email e telefone',()=>{
    cy.get('#firstName')
    .type('Ailton')
    .should('have.value','Ailton')
   .clear()
   .should('have.value','')

   cy.get('#lastName')
   .type('silva santos')
   .should('have.value','silva santos')
   .clear()
   .should('have.value','')

   cy.get('#email')
   .type('ailton240625@gmail.com ')
   .should('have.value','ailton240625@gmail.com')
   .clear()
   .should('have.value', '')

   cy.get('#phone')
   .type('123456789')
   .should('have.value','123456789')
   .clear()
   .should('have.value','')
 }) // EXERCICO EXTRA 6 
  it(' exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios',()=>{
     
    cy.contains('button', 'Enviar').click()
    cy.get('.error').should('be.visible')
 })
  it('envia o formuário com sucesso usando um comando customizado',()=>{
    cy.fillMandatoryFieldsAndSubmit()
    cy.get('.success').should('be.visible')
     
  })

  it('seleciona um produto (YouTube) por seu texto',() =>{
   cy.get('#product')
  .select('YouTube')
  .should('have.value','youtube')
})
it('seleciona um produto (Mentoria) por seu valor (value)', ()=>{
  cy.get('#product')
  .select('mentoria')
  .should('have.value','mentoria')
})
it('seleciona um produto (Blog) por seu índice',()=>{
  cy.get('#product')
  .select( 1 )
  .should('have.value','blog')
})
///
it('marca o tipo de atendimento "Feedback"',()=>{
  cy.get('input[type="radio"][value="feedback"]')
  .check() 
})
  })
   
