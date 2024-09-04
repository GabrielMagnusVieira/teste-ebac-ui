/// <reference types="cypress" />

describe('Funcionalidade: Detalhes da conta', () => {

    beforeEach(() => {
        cy.visit('minha-conta/edit-account/')
        cy.fixture('perfil').then(login => { 

        })
        cy.login('magnus181098@gmail.com', 'dilolilo22')
    });

    it('Deve completar detalhes da conta com sucesso', () => {
        cy.detalhesConta('gabriel', 'magnus', 'justaus3r')
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });
    
});