///<reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Login' , () => {

    beforeEach(() => {
        cy.visit('minha-conta/')
        
    });

    afterEach(() => {
        cy.screenshot()
    })

    it('Deve fazer login com sucesso' , () => {
        cy.get('#username').type('magnus181098@gmail.com')
        cy.get('#password').type('dilolilo22')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' ,'Olá, magnus181098 (não é magnus181098? Sair)')
    });

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('agnus181098@gmail.com')
        cy.get('#password').type('dilolilo22.')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain' , 'Endereço de e-mail desconhecido.')
    });

    it('Deve exibir uma mensagem de erro ao inserir senha invalida', ()=> {
        cy.get('#username').type('magnus181098@gmail.com')
        cy.get('#password').type('dilolilo23.')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida para o e-mail magnus181098@gmail.com está incorreta. Perdeu a senha?')
        cy.get('.woocommerce-error').should('exist')
    });

    it('Deve fazer login com sucesso usando massa de dados', () => {
        
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' ,'Olá, magnus181098 (não é magnus181098? Sair)')

    });

    it('Deve fazer login com sucesso usando Fixture', () => {
        cy.fixture('perfil').then( dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha , { log: false })
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' ,'Olá, magnus181098 (não é magnus181098? Sair)')
        })
        

    } );

    it.only('Deve fazer login com sucesso usando comandos custominzados ', () => {
        cy.login('magnus181098@gmail.com', 'dilolilo22')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' ,'Olá, magnus181098 (não é magnus181098? Sair)')
    });







})
