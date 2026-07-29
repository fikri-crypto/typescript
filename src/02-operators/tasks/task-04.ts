/**
 * An online store is processing a customer's shopping cart.
 * The customer purchased:
 * 
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Mouse Pad           | 120000 |        1 |
 * 
 * Business Rules:
 * - Customers receive 10% discount if the total purchase exceeds Rp1,000,000.
 * - Only Premium members receive free shipping.
 * - Every purchased product increases the total item counter.
 * 
 * Additional Information: Current customer is Premium member.
 * 
 * Task:
 *  - Calculate subtotal.
 *  - Count the total purchased items using an increment operator.
 *  - Determine whether a discount should be applied.
 *  - Calculate the final payment.

*/


const keyboardprice: number = 850000;
const keyboardqty: number = 1;

const mouseprice: number = 275000;
const mouseqty: number = 2;

const mousepadprice: number = 120000;
const mousepadqty: number = 1;

const ispremium: boolean = true;
const subtotal: number =
    (keyboardprice * keyboardqty) +
    (mouseprice * mouseqty) +
    (mousepadprice * mousepadqty);
let totalitems: number = 0;

for (let i = 0; i < keyboardqty; i++) totalitems++;
for (let i = 0; i < mouseqty; i++) totalitems++;
for (let i = 0; i < mousepadqty; i++) totalitems++;
let discount: number = 0;

if (subtotal > 1000000) {
    discount = subtotal * 0.10;
}
let shippingcost: number;
if (ispremium) {
    shippingcost = 0;
} else {
    shippingcost = 25000;
}
const finalpayment: number = subtotal - discount + shippingcost;

console.log("=== Shopping Cart Summary ===");
console.log("Subtotal: Rp", subtotal);
console.log("Total Items:", totalitems);
console.log("Discoun: Rp", discount);
console.log("Shipping Cost: Rp", shippingcost);
console.log("Final Payment: Rp", finalpayment);



