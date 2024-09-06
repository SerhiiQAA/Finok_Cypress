class CrossPlatform {
    validateWeb() {
        cy.viewport(1600, 1020)
        cy.visit('/');
        cy.wait(500)
        cy.matchImageSnapshot({
          failureThreshold: 0.05,
          failureThresholdType: 'percent'
        });
    }
    validateTabletNormal() {
      cy.viewport(800, 1100)
        cy.visit('/');
        // cy.wait(500)
        cy.matchImageSnapshot({
            failureThreshold: 0.05,
            failureThresholdType: 'percent'
        });
    }
    validateTabletLandscape() {
      cy.viewport(1100, 800)
        cy.visit('/');
        // cy.wait(500)
        cy.matchImageSnapshot({
            failureThreshold: 0.05,
            failureThresholdType: 'percent'
        });
    }
    validateMobileNormal() {
      cy.viewport('iphone-8')
        cy.visit('/');
        // cy.wait(500)
        cy.matchImageSnapshot({
            failureThreshold: 0.05,
            failureThresholdType: 'percent'
        });
    }
    validateMobileLandscape() {
      cy.viewport('iphone-8', 'landscape')
      cy.visit('/');
        // cy.wait(500)
        cy.matchImageSnapshot({
            failureThreshold: 0.05,
            failureThresholdType: 'percent'
        });
    }
}
export default CrossPlatform;