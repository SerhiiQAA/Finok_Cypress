import Languages from "../pages/Languages.js";
describe('Main page_Page object', () => {
    it('Main page validation', () => {
        cy.viewport(1280, 1020);
        cy.visit('/');
        
        // cy.injectAxe();
        // cy.checkA11y();

        const Lang = new Languages();

        Lang.validateLangButtons();
        // Lang.validateHeader();
        // Lang.validateFooter();
        // Lang.validateHomeSection();
        // Lang.validateElementorSection();
        // Lang.validateBanksSection();
        // Lang.validateAdventageSection();
        // Lang.validateWhoSuitsSection();
        // Lang.validateDemonstrationSection();
        // Lang.validateFaqSection();
        // Lang.validatePriceSection();
        // Lang.validateNewsSection();
        // Lang.validateWillBeSoonSection();
        // Lang.validateContactUsSection();
        // Lang.validateFooterSection();
    });
})