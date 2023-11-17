
describe('Splash', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it('displays splash page ', () => {
    cy.get('h2').contains('ORTE Reference Map Layer')
    cy.get('a#jump').contains('Open Map')
  })
  it('on button click loads map ', () => {
    cy.contains('Open Map').click()
    cy.url().should('eq', 'http://localhost:3000/main#map')
  })
})
