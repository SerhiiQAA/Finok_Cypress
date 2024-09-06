describe('Data Questions Test', () => {
    before(() => {
      cy.fixture('example.json').as('testData'); // Alias the testData
    });
  
    it('User questions from testData', function () {
      // The function notation allows you to use 'this.testData'
      // which is set by the use of the alias in the before hook.
      this.testData.forEach((data) => {
        cy.visit('/');
        cy.get('.elementor-element-3da457a > div:nth-child(1)').scrollIntoView().should('be.visible');

        cy.get(':nth-child(1) > p > .wpcf7-form-control-wrap > .wpcf7-form-control').type(data["How to contact you*"]);
        cy.get('#wpcf7-f4055-p1969-o2 > .wpcf7-form > .row > .input-subject > p > .wpcf7-form-control-wrap > .wpcf7-form-control').type(data["Phone*"]);
        cy.get('[placeholder="Email*"]').type(data["Email*"]);
        cy.get('#wpcf7-f4055-p1969-o2 > .wpcf7-form > .row > :nth-child(4) > p > .wpcf7-form-control-wrap > .wpcf7-form-control').type(data["Message"]);
        cy.get('#wpcf7-f4055-p1969-o2 > .wpcf7-form > .row > .mt-15 > p > .wpcf7-form-control').click()
        cy.wait(12000)
        cy.get('#wpcf7-f4055-p1969-o2 > .wpcf7-form > .wpcf7-response-output').contains('Одне або декілька полів містять помилкові дані. Будь ласка, перевірте їх і спробуйте ще раз.').should('be.visible');
      });
    });
  });
  