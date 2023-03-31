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

        cy.xpath("//li/a[contains(@class,'hmenu-item')]")
.each(($list) => {
  const nombre = $list.text()
  if(departments.includes(nombre))
  {
    switch(nombre){
      case 'Electrónicos' :
        cy.expect(nombre).to.equal('Electrónicos')
      break

      case 'Computadoras' :
        cy.expect(nombre).to.equal('Computadoras')
      break

      case 'Smart Home' :
        cy.expect(nombre).to.equal('Smart Home')
      break

      case 'Arte y Artesanías' :
        cy.expect(nombre).to.equal('Arte y Artesanías')
      break

      case 'Testing Element' :
        cy.expect(nombre).to.equal('Testing Element')
      break
    }
  }
})
    }




}

export default MainPage



