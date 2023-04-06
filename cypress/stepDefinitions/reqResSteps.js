import {Before, Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'
import ReqRes from '../support/pages/reqRes'
let pageData
let myURL
let pageRequestStatus 

Before(()=>{
cy.readFile('cypress/fixtures/reqResFixture.json').then((json) => {
pageData = json
myURL = json.baseUrl + json.endpoint
myURLDelete = json.baseUrl + json.deleteEndpoint + '2'
myURLPUT = json.baseUrl + json.putEndpoint + '1'
})
})

Given('I navigate to ReqRes page', () => {
cy.visit(pageData.baseUrl)
});

When('I make a POST request', () => {
ReqRes.postRequest(myURL)
  .then(res => {cy.log(res.status)
    pageRequestStatus = res.status
  })
})

Then('I can confirm the POST request', () => {
expect(pageRequestStatus).to.eq(201)
})

When('I make a DELETE request', () => {
ReqRes.deleteRequest(myURLDelete)
.then(res => {pageRequestStatus = res.status})
})

Then('I can confirm the DELETE request', () => {
expect(pageRequestStatus).to.eq(204)
})

When('I make a PUT request', () => {
ReqRes.putRequest(myURLPUT)
.then(res => {pageRequestStatus = res.status})
})

Then('I can confirm the PUT request', () => {
expect(pageRequestStatus).to.eq(200)
})