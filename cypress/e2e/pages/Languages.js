class Languages {
    validateUA() {
        cy.visit('/')
    }
    validateLangButtons() {
        cy.get('#menu-item-wpml-ls-14-uk > a:nth-child(2)', { force: true }).click()
        cy.get('#menu-item-wpml-ls-14-en > a:nth-child(1) > span:nth-child(2)', { force: true }).click()
    }

}   
export default Languages;