import getSubTotal from './subtotal.js'
import getTaxes from './taxes.js'
import getTotal from './total.js'

var shopCart = {
  taxPercent: 19,
  items: [
    {id: 23, price: 10000},
    {id: 24, price: 13000},
    {id: 28, price: 12000}
  ]
};
console.log(this)

// Main code
var subTotalValue = getSubTotal(shopCart.items);
var taxValue = getTaxes(subTotalValue,  shopCart.taxPercent);
var total = getTotal(subTotalValue,  taxValue);

document.getElementById('output').innerHTML = `
    <p>Subtotal: $ ${subTotalValue}
    <p>Taxes: $ ${taxValue}
    <p>Total: $ ${total}
  `
