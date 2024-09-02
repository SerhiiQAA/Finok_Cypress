describe('Web', () => {
  it('should be publicly accessible', () => {
    cy.viewport(1600, 1020)
    cy.visit('/');
    // cy.wait(500)
    cy.matchImageSnapshot({
      failureThreshold: 0.05,
      failureThresholdType: 'percent'
    });
  });
});