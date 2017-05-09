// Subtotal calculator
const getSubTotal = items => items.reduce((acc, i) => (
  acc += i.price
), 0)

export default getSubTotal
