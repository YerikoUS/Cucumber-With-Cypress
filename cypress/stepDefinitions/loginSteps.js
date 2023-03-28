// <reference types=”Cypress” />
import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'
Given('I navigate to Amazon website', () => {
cy.visit('https://www.amazon.com')
})
When('I make a search and open the first result', () => {
cy.get('#twotabsearchtextbox').type('Iphone 14 pro max')
cy.get('#nav-search-submit-button').click()
cy.get('[data-component-type="s-search-result"]')
      .first()
      .find('a')
      .first()
      .click()
})
Then('I can see the item and store the name and price',  () => {
    cy.log(cy.get('body.a-m-us.a-aui_72554-c.a-aui_accordion_a11y_role_354025-c.a-aui_killswitch_csa_logger_372963-c.a-aui_pci_risk_banner_210084-c.a-aui_preload_261698-c.a-aui_rel_noreferrer_noopener_309527-c.a-aui_template_weblab_cache_333406-c.a-aui_tnr_v2_180836-c.a-meter-animate:nth-child(2) div.ce.es_US:nth-child(78) div.a-container:nth-child(12) div.centerColAlign.centerColAlign-bbcxoverride:nth-child(4) div.celwidget:nth-child(11) div.offersConsistencyEnabled div:nth-child(1) div.celwidget:nth-child(3) div.a-section.a-spacing-none.aok-align-center:nth-child(2) span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay > span.a-offscreen:nth-child(1)')
    .invoke('text')
    .then(price => {
    cy.log('The price of the item is: ' + price) //prints price in console as string
    } ))
        //const pricetext = price.text() //stores the price value in variable pricetext

    //Aun quedan dudas de como imprimir el precio de manera eficiente (actualmente solo traigo el item) 

    
})
