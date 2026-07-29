/**
 * An e-commerce platform is preparing a flash sale event. Before the discount calculation begins, 
 * the system temporarily stores several pieces of information as individual variables.
 * A customer wants to purchase a Mechanical Keyboard RGB with the product code KBR-001. 
 * The original price of the product is 850000 rupiahs, 
 * and the flash sale offers a 25% discount. The customer plans to buy 2 keyboards. 
 * Because the customer is a premium member, they are eligible for free shipping. 
 * The current stock available in the warehouse is 18 units.
 * 
 * Task:
 * 1. Identify every value that should become a variable.
 * 2. Choose an appropriate variable name for each value.
 * 3. Determine the correct data type.
 * 4. Declare all variables in TypeScript.
 * 5. Display the product data using console.log.
 */

const produk: string = "Mc Keyboard RGB";
const idproduk: string = "KBR-001";
const hargaproduk: number = 850.000;
const diskon: number = 0.25;
const member: boolean = true;
const freeshiping: boolean = true;
const jumlahbeli: number = 2;
console.log({ produk });
console.log({ idproduk });
console.log({ hargaproduk });
console.log({ diskon });
console.log({ member, freeshiping, jumlahbeli });

