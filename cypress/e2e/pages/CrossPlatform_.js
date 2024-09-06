class CrossPlatform {
    validateWeb() {
        cy.viewport(1600, 1020)
        cy.visit('/');
        // cy.wait(500)
        cy.matchImageSnapshot({
          failureThreshold: 0.05,
          failureThresholdType: 'percent'
        });
    }
    validateTablet() {
    }
    validateMobile() {
    }
}
export default CrossPlatform;