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
        cy.get('.elementor-element-5598966').should('be.visible')
            .within(() => {
                cy.get('.elementor-accordion-title').should('have.length', 5);
                // cy.contains('Функціональність').should('be.visible')
                // cy.contains('Гнучкість').should('be.visible')
                // cy.contains('Економія часу').should('be.visible')
                // cy.contains('Технічна підтримка').should('be.visible')
            })
    }
    validateWhoSuitsSection() {
        cy.get('#whoSuitsSection').should('be.visible')
    }
    validateOurPartnersSection() {
        cy.get('.elementor-element-18c1540').should('be.visible')
    }
    validateDemonstrationSection() {
        cy.get('.elementor-element-18c1540').should('be.visible')
        cy.get('.customButtonModal').contains('Замовити демо').should('be.visible')
    }
    validateFaqSection() {
        cy.get('#faqSection').should('be.visible')
        cy.get('#faqSection > .elementor-container > .elementor-column > .elementor-widget-wrap').contains('Часті питання').should('be.visible')
    }
    validatePriceSection() {
        cy.get('#priceSection').contains('Тарифи').should('be.visible')
        cy.get('.headerTabs > ul').should('be.visible')
        .within(() => {
            cy.contains('Місяць').should('be.visible')
            cy.contains('Півроку').should('be.visible')
            cy.contains('Рік').should('be.visible')
        })
        cy.get('#priceTabSection').should('be.visible')
        .within(() => {
            cy.contains('Start').should('be.visible')
            cy.contains('Business').should('be.visible')
            cy.contains('Business +').should('be.visible')
        })
        
    }
    validateReviewsSection() {
        cy.get('.elementor-element-d348c63 > .elementor-container > .elementor-column > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-heading-title').contains('Відгуки').should('be.visible')
    }
    validateNewsSection() {
        cy.get('.elementor-element-2d04a06 > .elementor-container > .elementor-column > .elementor-widget-wrap').should('be.visible')
        .within(() => {
            cy.contains('Новини').should('be.visible')
            cy.contains('Переглянути всі').should('be.visible')
        })
    }
}
export default MainPage;