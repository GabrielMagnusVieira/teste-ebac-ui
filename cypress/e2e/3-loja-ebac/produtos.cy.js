///<reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });
    
    it('Deve selecionar um produto da lista', () => {
        cy.get('.products > .row')
            //.first()
            //.last()
            //.eq(0)
            .contains('Abominable Hoodie')
            .click()

            cy.get('#tab-title-description > a').should('contain','Descrição')
    });
});