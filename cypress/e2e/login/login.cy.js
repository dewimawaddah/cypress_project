describe('login page success', () => {
    it('visit login page', () => {
        cy.visit('https://taufanfadhilah.github.io/react-gallery/')
        cy.title().should('eq','React Gallery')
        cy.contains('Hello Again')
    });
});