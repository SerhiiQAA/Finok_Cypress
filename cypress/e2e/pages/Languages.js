class Languages {
    validateUA() {
        cy.visit('/')
    }
    validateCountLanguages() {
        cy.get('.wpml-ls-native').should('have.length', 3)
    }
    validateUA() {
        cy.get('[title="UA"]').contains('UA')
        cy.title().should('eq', 'Головна - FinOK')
    }
    validateEN() {
        cy.get('#menu-item-wpml-ls-14-en > a:nth-child(1) > span:nth-child(2)').click({ force: true })
        cy.title().should('eq', 'Main - FinOK')
        cy.url().should('include','en/')
    }
    validatePL() {
        cy.get('#menu-item-wpml-ls-14-pl > a:nth-child(1) > span:nth-child(2)').click({ force: true })
        cy.title().should('eq', 'Główna - FinOK')
        cy.url().should('include','pl/')
    }
}
export default Languages;