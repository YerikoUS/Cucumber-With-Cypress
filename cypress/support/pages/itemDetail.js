class ItemPage {

    static getPrice(){
        return cy.get('#corePriceDisplay_desktop_feature_div > div.a-section.a-spacing-none.aok-align-center > span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay > span.a-offscreen')
        .first()
        .invoke('text')
         .then((price) =>{
            return price 
          })      
          } 

    }
export default ItemPage