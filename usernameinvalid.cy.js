describe('template spec', () => {
    it('passes', () => {
        cy.visit('https://the-internet.herokuapp.com/login') 
        cy.get('#username').type('tomcat')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.fa').click()
    })
})