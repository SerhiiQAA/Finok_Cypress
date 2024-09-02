describe('Tablet', () => {
    it('normal', () => {
        cy.viewport(800, 1100)
        cy.visit('/');
        // cy.wait(500)
        cy.matchImageSnapshot({
            failureThreshold: 0.05,
            failureThresholdType: 'percent'
        });
    });
    it('landscape', () => {
        cy.viewport(1100, 800)
        cy.visit('/');
        // cy.wait(500)
        cy.matchImageSnapshot({
            failureThreshold: 0.05,
            failureThresholdType: 'percent'
        });
    });
})