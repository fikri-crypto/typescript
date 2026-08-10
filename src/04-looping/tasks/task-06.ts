/**
 * A warehouse stores the stock quantity of each product in following array.
 * Warehouse Rules:
 * - Out of Stock → quantity = 0
 * - Low Stock → quantity < 10
 * - Safe Stock → quantity ≥ 10
 * 
 * Students have to Calculate:
 * - Number of Out of Stock products
 * - Number of Low Stock products
 * - Number of Safe Stock products
 * - Total inventory
 * - Average stock quantity
 */

const stocks = [
    25, 0, 18, 6, 42,
    9, 0, 55, 13, 2,
    30, 8, 41, 0, 16
];
let outOfStockCount = 0;
let lowStockCount = 0;
let safeStockCount = 0;
let totalInventory = 0;
 
for (let i = 0; i < stocks.length; i++) {
    const stock = stocks[i];
    totalInventory += stock;
 
    if (stock === 0) {
        outOfStockCount++;
    } else if (stock < 10) {
        lowStockCount++;
    } else {
        safeStockCount++;
    }
}
 
const averageStock = totalInventory / stocks.length;
 
console.log("\n=== Soal 2: Stok Gudang ===");
console.log("Out of Stock:", outOfStockCount);
console.log("Low Stock   :", lowStockCount);
console.log("Safe Stock  :", safeStockCount);
console.log("Total inventori:", totalInventory);
console.log("Rata-rata stok :", averageStock);