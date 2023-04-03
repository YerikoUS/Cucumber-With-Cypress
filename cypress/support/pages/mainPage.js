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

    static openHamburguerMenu(){
        cy.xpath("//a[@id='nav-hamburger-menu']").click();
    }

    static departmensCheck(departments){
        const lista = []
        cy.xpath("//li/a[contains(@class,'hmenu-item')]")
.each(($list) => {
  const nombre = $list.text()

  if(departments.includes(nombre)){
    lista.push(nombre)
  }
}).then(_ => {
  departments.forEach(item => {
    cy.log(lista.includes(item))
    cy.expect(lista.includes(item)).to.be.true
  })
})



    }




}

export default MainPage



