export const showData = (items) => {
    items.forEach( (item) =>{
        cy.log('The value of ' + item.name + ' is ' + item.price);
  })
}