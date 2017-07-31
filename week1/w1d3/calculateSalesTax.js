// implement a function that calculates the total sales and total tax, grouped by company.

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

// Implement the function calculateSalesTax that returns the results below.
function calculateSalesTax(salesData, taxRates) {

  var container = {};

  //  LOGS COMPANY NAME IN EACH ARRAY OBJECT
  for (var h = 0; h < companySalesData.length; h++) {
    var tempName = companySalesData[h].name;
    if (container[tempName] == undefined) {
      var tempProvince = companySalesData[h].province;
      var tempSales = companySalesData[h].sales;

      var sum = 0;
      for (var i of tempSales) {
        sum += i;
      }

      var totalTaxes = 0;
      for (var i in taxRates) {
        if (tempProvince === i) {
          totalTaxes = sum * taxRates[i];
        }
        container[tempName] = {sum, totalTaxes};
      }
    } else {
      var tempProvince = companySalesData[h].province;
      var tempSales = companySalesData[h].sales;

      var sum = 0;
      for (var i of tempSales) {
        sum += i;
      }

      var totalTaxes = 0;
      for (var i in taxRates) {
        if (tempProvince === i) {
          totalTaxes = sum * taxRates[i];
        }
      }

      container[tempName].sum += sum;
      container[tempName].totalTaxes += totalTaxes;
    }
  }
  console.log(container);
}

var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
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
