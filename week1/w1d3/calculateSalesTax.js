
var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

// implement a function that calculates the total sales and total tax, grouped by company.
function calculateSalesTax(salesData, taxRates) {

  var container = {};

  function sumSales(salesArray) {
    for (var i of salesArray) {
      sum += i;
    };
  };

  function calculateTax(taxRates, province) {
    for (var i in taxRates) {
      if (province === i) {
        totalTaxes = sum * taxRates[i];
      };
    };
  };

  for (var h = 0; h < companySalesData.length; h++) {
    var company = companySalesData[h].name;
    var province = companySalesData[h].province;
    var provincialSales = companySalesData[h].sales;

    var sum = 0;
    sumSales(provincialSales);

    var totalTaxes = 0;
    calculateTax(taxRates, province);

    if (container[company] == undefined) {
      container[company] = {sum, totalTaxes};
    } else {
      container[company].sum += sum;
      container[company].totalTaxes += totalTaxes;
    };
  };
  return container;
};

console.log(calculateSalesTax(companySalesData, salesTaxRates));

/* Expected output:
{
  Telus: {
  totalSales: 1300
  totalTaxes: 144
  },
  Bombardier: {
  totalSales: 800,
  totalTaxes: 40
  }
}
*/
