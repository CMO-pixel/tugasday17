describe('template spec', () => {
    it('passes', () => {
        cy.visit('https://the-internet.herokuapp.com/login') 
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('ayangjisoo')
        cy.get('.fa').click()
    })
})