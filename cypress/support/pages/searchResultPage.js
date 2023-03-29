class SearchPage{
    static clickFirstResult(){
        cy.get('[data-component-type="s-search-result"]')
        .first()
        .find('a')
        .first()
        .click()
    } 
}

export default SearchPage