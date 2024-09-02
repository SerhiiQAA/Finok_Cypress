describe('Mobile', () => {
    it('normal', () => {
        cy.viewport('iphone-8')
        cy.visit('/');
        // cy.wait(500)
        cy.matchImageSnapshot({
            failureThreshold: 0.05,
            failureThresholdType: 'percent'
        });
    });
    it('landscape', () => {
        cy.viewport('iphone-8', 'landscape')
        cy.visit('/');
        // cy.wait(500)
        cy.matchImageSnapshot({
            failureThreshold: 0.05,
            failureThresholdType: 'percent'
        });
    });
})