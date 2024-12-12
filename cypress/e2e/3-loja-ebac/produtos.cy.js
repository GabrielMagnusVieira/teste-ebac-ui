///<reference types="cypress"/>

import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    });
    
    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Aether Gym Pant')
        cy.get('#tab-title-description > a').should('contain','Descrição')
    });

    it('Deve buscar um produto com sucesso', () => {
        produtosPage.buscarProduto('Aether Gym Pant')
        cy.get('.product_title').should('contain', 'Aether Gym Pant' )
    });

    it('Deve visitar a pagina do produto', () => {
        
        produtosPage.visitarProduto('Aether Gym Pant')
        cy.get('.product_title').should('contain', 'Aether Gym Pant')
    });

    it('Deve adicionar um produto ao carrinho', () => {

        produtosPage.buscarProduto('Aether Gym Pant')
        produtosPage.addProdutoCarrinho('32', 'Green', 3)

        cy.get('.woocommerce-message').should('contain', '3 × ')
        
    });

    it.only('Deve adicionar um produto ao carrinho buscando da massa de dados', () => {

        cy.fixture('produtos').then(dados => {
            
            produtosPage.buscarProduto(dados[0].nomeProduto)
            produtosPage.addProdutoCarrinho(
                dados[0].tamanho,
                dados[0].cor,
                dados[0].quantidade )
    
            cy.get('.woocommerce-message').should('contain', dados[0].nomeProduto)
        })



        
        
    });

    
});
