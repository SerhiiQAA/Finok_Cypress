import Languages from "../pages/Languages.js";
describe('Main page_Page object', () => {
    it('Main page validation', () => {
        cy.viewport(1280, 1020);
        cy.visit('/');
        
        // cy.injectAxe();
        // cy.checkA11y();

        const Lang = new Languages();

        Lang.validateCountLanguages();
        Lang.validateUA();
        Lang.validateEN();
        Lang.validatePL();
    });
})