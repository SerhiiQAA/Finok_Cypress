import MainPage from "../pages/MainPage.js";

describe('Main page_Page object', () => {
    it('Main page validation', () => {
        cy.viewport(1280, 1020);
        cy.visit('/');
        
        // cy.injectAxe();
        // cy.checkA11y();

        const Main = new MainPage();

        Main.validateHttps();
        Main.validateHeader();
        Main.validateFooter();
        Main.validateHomeSection();
        Main.validateElementorSection();
        Main.validateBanksSection();
        Main.validateAdventageSection();
        Main.validateWhoSuitsSection();
        Main.validateDemonstrationSection();
        Main.validateFaqSection();
        Main.validatePriceSection();
        Main.validateNewsSection();
        Main.validateWillBeSoonSection();
        Main.validateContactUsSection();
        Main.validateFooterSection();
    });
})