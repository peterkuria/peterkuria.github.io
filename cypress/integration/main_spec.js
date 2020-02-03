describe('Main test', function() {
    it('visits the home page', function() {
        cy.visit('/')
    })
    it('finds name', function() {
        cy.contains('Peter Kuria')
    })
    it('finds github repos ', function() {
        cy.get('a[href^="https://github.com/peterkuria"]').should('have.length', 5)
    })
    it('finds instagram feed', function() {
        cy.get('a[href^="https://www.instagram.com/p/"]').should('have.length', 1)
    })
  })