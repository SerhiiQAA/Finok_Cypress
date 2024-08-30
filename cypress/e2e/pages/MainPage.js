class MainPage {
    navigate() {
        cy.visit('https://1000and1songs.com/#/');
    }
    validateHttps() {
        cy.location('protocol').should('eq', 'https:');
    }
    validateHeader() {
        cy.get('.wsmainwp').should('be.visible');
    }
    validateFooter() {
        cy.get('#footer-4').should('be.visible');
    }
    validateHomeContainer() {
        cy.get('.wsmainwp').should('be.visible');
        cy.contains('.wsmainwp', 'Головна').should('be.visible');
        cy.contains('.wsmainwp', 'Наші переваги').should('be.visible');
        cy.contains('.wsmainwp', 'Кому підходить').should('be.visible');
        cy.contains('.wsmainwp', 'Тарифи').should('be.visible');
        cy.contains('.wsmainwp', 'Інформація').should('be.visible');
        cy.contains('.wsmainwp', 'UA').should('be.visible');
        cy.contains('.wsmainwp', 'Вхід').should('be.visible');
        cy.contains('.wsmainwp', 'Реєстрація').should('be.visible');
    }
    validateHomeSection() {
        cy.get('#homeSection').should('be.visible');
    }
    validateElementorSection() {
        cy.get('.elementor-element-4c93df5').should('be.visible')
        .within(() => {
            cy.get('.img-fluid').should('have.length', 5);
            cy.contains('Звіти, що легко налаштовуються').should('be.visible')
            cy.contains('Планування').should('be.visible')
            cy.contains('Облік заробітної плати').should('be.visible')
            cy.contains('Взаємодії з контрагентами').should('be.visible')
            cy.contains('Товари та послуги').should('be.visible')
        })
    }
    validateBanksSection() {
        cy.get('#integrationWithBanks > .elementor-container > .elementor-column > .elementor-widget-wrap').should('be.visible');
        cy.get('.swiper-slide-inner').should('have.length', 4);
    }
    validateAdventageSection() {
        cy.get('#ourAdvantagesSection').should('be.visible');
        cy.contains('.news', 'Новини').should('be.visible');
        cy.contains('.news', 'Переглянути усі').should('be.visible');
    }
}
export default MainPage;