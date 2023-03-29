import {Given, When, Then, DataTable} from '@badeball/cypress-cucumber-preprocessor'
import MainPage from '../support/pages/mainPage'
import SearchPage from '../support/pages/searchResultPage'
import ItemPage from '../support/pages/itemDetail'
import { showData } from '../support/utils'
const items = []

Given('I navigate to Amazon website', () => {
MainPage.openWebAmazon()
})

When('I make a search and open the first result',  (datatable) => {
datatable.hashes().forEach((element) =>{
MainPage.clearSearchBox()
MainPage.searchElement(element.article)
SearchPage.clickFirstResult()
ItemPage.getPrice().then( (price)=> {
      items.push({name:element.article, price})   
      })
});
})

Then('I can see the item and store the name and price',  () => {
showData(items)

})
