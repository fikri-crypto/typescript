    /**
     * An online store wants to analyze today's sales transactions. 
     * Each transaction amount is stored in an array.
     * ---------------------------------
     * const sales = [
     * 125000,
     * 350000,
     * 78000,
     * 910000,
     * 150000,
     * 420000,
     * 275000,
     * 99000,
     * 640000,
     * 18000
     * ]
     * -------------------------------------
     * 
     * Student task in calculate:
     * 1. Total sales revenue
     * 2. Highest transaction
     * 3. Lowest transaction
     * 4. Number of transactions worth Rp300,000 or more
     * 5. Average transaction value
     */
    const sales = [
    125000,
    350000,
    78000,
    910000,
    150000,
    420000,
    275000,
    99000,
    640000,
    18000
];
 
let total = 0;
let highTransaction = sales[0];  
let lowestTransaction = sales[0]; 
let countAbove300k = 0;
 
for (let i = 0; i < sales.length; i++) {
    const sale = sales[i];  
    total += sale;
    if (sale > highTransaction) {
        highTransaction = sale;
    }

    if (sale < lowestTransaction) {
        lowestTransaction = sale;
    }
    if (sale >= 300000) {
        countAbove300k++;
    }
}
const average = total / sales.length;
 
console.log("=== Soal Awal: Sales ===");
console.log("Total penjualan   :", total);
console.log("Transaksi tertinggi:", highTransaction);
console.log("Transaksi terendah :", lowestTransaction);
console.log("Jumlah transaksi >= 300rb:", countAbove300k);
console.log("Rata-rata transaksi:", average);
