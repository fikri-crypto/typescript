/**
 * An online store has the following products:
 */

/**
 * The warehouse system needs to perform different operations on the same product list.
 * 1. Operation for display product
 * Keyboard - Rp850000
 * Mouse - Rp275000
 * Monitor - Rp2200000
 * Headset - Rp650000
 * 
 * 2. Display expensive products - Only products with a price above Rp1,000,000 should be displayed.
 * 3. Display products that cost more than Rp500,000 and show a 10% discount price.
 * 
 * Instead of creating a separate loop for every operation, the developer creates a reusable processing function.
 */
const products = [
    { name: "Keyboard", price: 850000 },
    { name: "Mouse", price: 275000 },
    { name: "Monitor", price: 2200000 },
    { name: "Headset", price: 650000 }
];

function processProducts(
    products: { name: string, price: number }[],
    callback: (product: { name: string, price: number }) => void
): void {
    for (let index = 0; index < products.length; index++) {
        callback(products[index])
    }
}

function displayProduct(product: { name: string, price: number }) {
    console.log(`${product.name} - Rp${product.price}`);
}

function displayExpensiveProduct(product: { name: string, price: number }) {
    if (product.price > 1000000) {
        console.log(`${product.name} - Rp${product.price}`);
    }
}


function displayDiscountedProduct(product: { name: string, price: number }) {
    if (product.price > 500000) {
        const discountedPrice = product.price - (product.price * 0.1);
        console.log(`${product.name} - Rp${discountedPrice} (setelah diskon 10%)`);
    }
}

processProducts(products, displayProduct);
processProducts(products, displayExpensiveProduct);
processProducts(products, displayDiscountedProduct);