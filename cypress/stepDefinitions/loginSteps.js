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
Then('I can see the item and store the name and price', async () => {
    //gcy.lo(cy.get('body.a-m-us.a-aui_72554-c.a-aui_accordion_a11y_role_354025-c.a-aui_killswitch_csa_logger_372963-c.a-aui_pci_risk_banner_210084-c.a-aui_preload_261698-c.a-aui_rel_noreferrer_noopener_309527-c.a-aui_template_weblab_cache_333406-c.a-aui_tnr_v2_180836-c.a-meter-animate:nth-child(2) div.ce.es_US:nth-child(78) div.a-container:nth-child(12) div.rightCol.rightCol-bbcxoverride:nth-child(1) div.celwidget:nth-child(4) div.celwidget div.a-section.a-spacing-none:nth-child(1) div.celwidget div.a-box-group.a-accordion.a-spacing-large:nth-child(2) div.a-box.a-accordion-active.celwidget:nth-child(1) div.a-box-inner.a-accordion-row-container div.a-accordion-row-a11y.a-accordion-row.a-declarative.accordion-header.mobb-header-css div.celwidget:nth-child(2) div.celwidget:nth-child(1) div.a-column.a-span12.a-text-left div.a-spacing-top-mini:nth-child(2) span.a-price.a-text-normal.aok-align-center.reinventPriceAccordionT2 span:nth-child(2) > span.a-price-whole').invoke('text').as('itemName'))
    //Aun quedan dudas de como imprimir el precio de manera eficiente (actualmente solo traigo el item) 

    cy.get('body.a-m-us.a-aui_72554-c.a-aui_accordion_a11y_role_354025-c.a-aui_killswitch_csa_logger_372963-c.a-aui_pci_risk_banner_210084-c.a-aui_preload_261698-c.a-aui_rel_noreferrer_noopener_309527-c.a-aui_template_weblab_cache_333406-c.a-aui_tnr_v2_180836-c.a-meter-animate:nth-child(2) div.ce.es_US:nth-child(78) div.a-container:nth-child(12) div.rightCol.rightCol-bbcxoverride:nth-child(1) div.celwidget:nth-child(4) div.celwidget div.a-section.a-spacing-none:nth-child(1) div.celwidget div.a-box-group.a-accordion.a-spacing-large:nth-child(2) div.a-box.a-accordion-active.celwidget:nth-child(1) div.a-box-inner.a-accordion-row-container div.a-accordion-row-a11y.a-accordion-row.a-declarative.accordion-header.mobb-header-css div.celwidget:nth-child(2) div.celwidget:nth-child(1) div.a-column.a-span12.a-text-left div.a-spacing-top-mini:nth-child(2) span.a-price.a-text-normal.aok-align-center.reinventPriceAccordionT2 span:nth-child(2) > span.a-price-whole').should(($div) => {
        const text = $div.text()
      cy.log(text)
        
      })
})
