// Taxes calculator
var getTaxes = function (subTotal, taxPercent) {
  return subTotal * (taxPercent / 100)
};

export default getTaxes
