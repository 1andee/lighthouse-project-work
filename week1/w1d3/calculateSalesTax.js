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

// console.log(companySalesData[0].sales[0]);
// console.log(companySalesData[1].sales);
// console.log(companySalesData[2].sales);


//  LOGS COMPANY NAME IN EACH ARRAY OBJECT
for (var h = 0; h < companySalesData.length; h++) {
    var companyName = companySalesData[h].name;
    console.log(companyName)
}

// ITERATES THROUGH THE SALES FIELD OF EACH ARRAY OBJECT
for (var i = 0; i < companySalesData.length; i++) {
    var salesValue = companySalesData[i].sales;

    var salesTotal = 0;

// ITERARES THROUGH (AND LOGS) EACH VALUE IN SALES FIELD
      for (var j = 0; j < salesValue.length; j++) {
        salesTotal += salesValue[j];
        // console.log(salesValue[j])
      }
      console.log(salesTotal);
}

// Implement the function calculateSalesTax that returns the results below.
function calculateSalesTax(salesData, taxRates) {

  // Implement your code here

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

/* Hints
Break down the problem into step-by-step pseudo-code (try pen and paper sketching, thinking "top-down" vs "bottom-up", pairing--whatever feels right to you!), and use console.log statements to debug and check your assumptions.

Don't be afraid to write additional functions if it helps you reason about your code! Sometimes even a very simple function like calculateTax(sales, taxRate) (calculating tax on a single dollar amount with a known rate) can help by giving the operation a name. What other small operations would partially solve this problem?

Naming your variables clearly and descriptively will help avoid confusion.

If you try to access an object attribute (property) that does not exist, then it will return undefined. This is important to know so if you are encountering undefined issues you may be falsely assuming that an attribute exists. Remember undefined is a "falsey" value.

*/