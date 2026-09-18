/**
 * A company has a simple data-processing engine used to analyze transaction records.
 */
type Transaction = {
    id: string
    customer: string
    amount: number
    status: string
}


const transactions = [
    {
        id: "TRX001",
        customer: "Alya",
        amount: 850000,
        status: "paid"
    },
    {
        id: "TRX002",
        customer: "Budi",
        amount: 1250000,
        status: "pending"
    },
    {
        id: "TRX003",
        customer: "Citra",
        amount: 450000,
        status: "paid"
    },
    {
        id: "TRX004",
        customer: "Dimas",
        amount: 2100000,
        status: "paid"
    },
    {
        id: "TRX005",
        customer: "Eka",
        amount: 780000,
        status: "cancelled"
    }
];

/** TASKS:
 * - Extract customer's name only in array
 * - Determine Transaction Category with rules below:
 *   - ≥ Rp2,000,000 → HIGH VALUE
 *   - ≥ Rp1,000,000 → MEDIUM VALUE
 *   - < Rp1,000,000 → LOW VALUE
 * - Calculate platform fee:
 *   - Paid transactions → 2%
 *   - Pending transactions → 1%
 *   - Cancelled transactions → 0%
 */


type TRANSACTION_CATEGORY = "HIGH VALUE" | "MEDIUM VALUE" | "LOW VALUE"
type TransactionWithCategory = Transaction & { category: TRANSACTION_CATEGORY }
type TransactionWithFee = Transaction & { fee: number }


function extractCustomerName(selectedTransaction: Transaction): string {
    return selectedTransaction.customer;
}


function getTransactionCategory(selectedTransaction: Transaction): TransactionWithCategory {
    let category: TRANSACTION_CATEGORY;
    if (selectedTransaction.amount >= 2000000) {
        category = "HIGH VALUE";
    } else if (selectedTransaction.amount >= 1000000) {
        category = "MEDIUM VALUE";
    } else {
        category = "LOW VALUE";
    }
    return { ...selectedTransaction, category };
}
function calculatePlatformFee(selectedTransaction: Transaction): TransactionWithFee {
    let feePercentage = 0;
    if (selectedTransaction.status === "paid") {
        feePercentage = 0.02;
    } else if (selectedTransaction.status === "pending") {
        feePercentage = 0.01;
    } else {
        feePercentage = 0;
    }
    const fee = selectedTransaction.amount * feePercentage;
    return { ...selectedTransaction, fee };
}


function processTransactions<T>(
    arr: Transaction[],
    callback: (transaction: Transaction) => T
): T[] {
    const result: T[] = [];
    for (let index = 0; index < arr.length; index++) {
        result.push(callback(arr[index]));
    }
    return result;
}

const customerNames = processTransactions(transactions, extractCustomerName);
const transactionsWithCategory = processTransactions(transactions, getTransactionCategory);
const transactionsWithFee = processTransactions(transactions, calculatePlatformFee);

console.log("====== CUSTOMER NAMES ======");
console.log(customerNames);
console.log("====== TRANSACTION CATEGORY ======");
console.log({ transactions: transactionsWithCategory });
console.log("====== PLATFORM FEE ======");
console.log({ transactions: transactionsWithFee });