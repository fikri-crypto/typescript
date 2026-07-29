/**
 * The school cafeteria sells lunch packages to students. Today, Raka purchased 3 fried rice meals, each costing Rp18,000, and 2 bottles of mineral water, each costing Rp5,000. Because he is a member of the student council, he received a Rp10,000 discount.
 * The cashier wants to calculate:
 *  - Total price of fried rice
 *  - Total price of drinks
 *  - Total price before discount
 *  - Final amount to be paid
 *
 * Task:
 * 1. Use operators to calculate:
 *  - Total food price
 *  - Total drink price
 *  - Grand total
 *  - Final payment
 * 2. Display the calculation results.
 */
const friedricemeals: number = 18000;
const bottlewater: number = 5000;
const discount: number = 10000;
const totalfood: number = friedricemeals * 3;
const totaldrink: number = bottlewater * 2;
const priceBefore: number = totaldrink + totalfood;
const finalprice: number = priceBefore - discount;
console.log(totalfood);
console.log(totaldrink);
console.log(priceBefore);
console.log(finalprice);
