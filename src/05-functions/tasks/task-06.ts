/**
 * An online store wants to generate a daily sales dashboard. All transaction amounts are stored in an array.
 * Instead of writing one long program, the development team decides to split the calculations into reusable functions.
 * The dashboard should display:
 * - Total sales
 * - Highest transaction
 * - Lowest transaction
 * - Average transaction
 * - Number of transactions above Rp500,000
 * 
 * Student Tasks
 * Create the following functions:
 */

const sales = [
  125000,
  780000,
  250000,
  99000,
  540000,
  670000,
  180000,
  450000,
  310000,
  820000
];  

function calculateTotalSales(sales: number[]): number {
  let total = 0;
  for (let index = 0; index < sales.length; index++) {
    total += sales[index];
    
  }
return total;
}

function findHighestTransaction(sales: number[]): number {
  let highest = sales[0];
  for (let index = 0; index < sales.length; index++) {
    if (sales[index] > highest) {
      highest = sales[index];
      
    }
    
    
  }
return highest;

}

function findLowestTransaction(sales: number[]): number {
  let lowest = sales[0];
  for (let index = 0; index < sales.length; index++) {
    if (sales[index] < lowest) {
      lowest = sales[index];
      
    }
    
  }
return lowest;
}

function calculateAverageSale(sales: number[]): number {
  let total = 0;
  for (let index = 0; index < sales.length; index++) {
total += sales[index];

    
  }
 return total / sales.length;
}

function countLargeTransactions(sales: number[], minimumAmount: number): number {
  let count = 0;
  for (let index = 0; index < sales.length; index++) {
    if (sales[index] > minimumAmount) {
      count++
      
    }
    
  }
return count;
}
console.log("Total = ", calculateTotalSales(sales));
console.log("Highest = " , findHighestTransaction(sales));
console.log("lowest = " , findLowestTransaction(sales));
console.log("avarage = ", calculateAverageSale(sales));
console.log("Count large = ", countLargeTransactions(sales, 500000));
