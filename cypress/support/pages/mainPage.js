class MainPage {
    static openWebAmazon(){
        cy.visit('https://www.amazon.com')
    } 

    static clearSearchBox(){
        cy.get('#twotabsearchtextbox').clear()
    } 

    static searchElement(article){
        cy.get('#twotabsearchtextbox').type(article)
        cy.get('#nav-search-submit-button').click()
    }
}
export default MainPage



