import {Given, When, Then, DataTable} from '@badeball/cypress-cucumber-preprocessor'
import MainPage from '../support/pages/mainPage'
// Given I navigate to Amazon website is on login Steps
const departmentList = require('../support/hamburguer Menu Support/departmentsList.json');
const prog = require('../support/hamburguer Menu Support/programaYFuncionalidades.json');
//const  departamentos = ["Electrónicos", "Computadoras", "Smart Home","Arte y Artesanías","Testing Element"]

When('I open the hamburguer menu', () => {
MainPage.openHamburguerMenu()
})


Then('I can confirm the elements inside the hamburguer menu', () => {
MainPage.departmensCheck(departmentList.departments)
})








