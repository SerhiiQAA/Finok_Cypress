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
    validateRunningString() {
        cy.get('.tapes').should('be.visible');
    }
    validateMap() {
        cy.get('.map').should('be.visible');
    }
    validateExpeditionBlock() {
        cy.get('.expeditions').should('be.visible');
        cy.contains('.expeditions', 'Переглянути').should('be.visible');
        cy.contains('.expeditions', 'Переглянути усі').should('be.visible');
    }
    validateNewsBlock() {
        cy.get('.news').should('be.visible');
        cy.contains('.news', 'Новини').should('be.visible');
        cy.contains('.news', 'Переглянути усі').should('be.visible');
    }
}
export default MainPage;