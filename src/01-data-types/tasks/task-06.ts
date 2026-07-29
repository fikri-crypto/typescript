/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */
type marketplace = {
    productCode: number;
    productName: string;
    price: number;
    stockQuantity: number;
    productWeight: number;
    avgRating: number;
    diskon: boolean;

};
const product: marketplace[] = [
    {
        productCode: 12421,
        productName: "Buku",
        price: 14_000,
        stockQuantity: 2,
        productWeight: 17,
        avgRating: 5,
        diskon: true
    },
    {
        productCode: 1241,
        productName: "Pensil",
        price: 4_000,
        stockQuantity: 2,
        productWeight: 17,
        avgRating: 5,
        diskon: true
    },
    {
        productCode: 12421,
        productName: "rautan",
        price: 1_000,
        stockQuantity: 2,
        productWeight: 1,
        avgRating: 5,
        diskon: true
    },

]
console.log(product);