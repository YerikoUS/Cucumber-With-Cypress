import {Before, Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'
//import { Before, Given, When, Then } from "cypress-cucumber-preprocessor/steps"

//const apodKeys = require('cypress\fixtures\nasaWebInfo.json')//('../fixtures/nasaWebInfo.json')
//const status = 0;
let apodInfo
let myURL 
let apodResponseStatus


Before(()=>{
cy.readFile('cypress/fixtures/nasaWebInfo.json').then((json) => {
 apodInfo = json
myURL = json.baseUrl + json.endpoint
})
})

Given('I navigate to NASA.gov page', () => {
cy.visit(apodInfo.baseUrl)
});

When('I make 2 request GET', () => {
cy.request({
  method: 'GET',
  url: myURL,
  qs: {
    'api_key': apodInfo.accessToken
  }
}).then((response) => {
apodResponseStatus = response.status
    }) 
})

Then('I can confirm the response is 200', () => {
expect(apodResponseStatus).to.eq(200)
})

//////////////////////

