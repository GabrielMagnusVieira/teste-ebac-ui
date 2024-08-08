///<reference types="cypress"/>

describe('Funcionalidade: Login' , () => {

    it('Deve fazer login com sucesso' , () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('magnus181098@gmail.com')
        cy.get('#password').type('dilolilo22.')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' ,'Olá, magnus181098 (não é magnus181098? Sair)')
    })

} )