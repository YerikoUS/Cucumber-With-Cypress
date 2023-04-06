class ReqRes{
    
static openWebPage(page){
    cy.visit(page)
} 

static postRequest(myURL){

return cy.request({
  method: 'POST',
  url: myURL,
  body: {
    "name": "Saint Seiya",
    "job": "Caballero"
  }
}).then(response => {
  return response
})
}

static deleteRequest(endpoint){
return cy.request({
  method: 'DELETE',
  url: endpoint,
}).then(response =>{
    return response
})
}


static putRequest(endpoint){
return cy.request({
  method: 'PUT',
  url: endpoint,
}).then(response => {
  return response
})
}


}
export default ReqRes