/**
 * A hotel calculates a guest's payment based on the following information.
 * | Information          | Value  |
 * | -------------------- | ------ |
 * | Room Price per Night | 650000 |
 * | Nights Stayed        | 4      |
 * | Service Charge       | 120000 |
 * | Tax                  | 11%    |
 * | VIP Member           | Yes    |
 * 
 * Business Rules
 * - VIP guests receive a 12% room discount.
 * - Tax is calculated after the discount.
 * - Service charge is not discounted.
 * - The hotel also offers free breakfast if the guest stays at least 3 nights or is a VIP member.
 * 
 * The system must calculate:
 * - Room subtotal
 * - Discount
 * - Tax
 * - Final payment
 * - Whether the guest is eligible for free breakfast
 */
const roomPerNight: number = 650000;
const nightStayed: number = 4;
const serviceCharge: number = 120000;
const tax: number = 0.11;
const vipMember: boolean = true;
const vipGuest: number = 0.12;

const subtotal = roomPerNight * nightStayed;
const discount = subtotal * vipGuest;
const finalTax = discount / tax;
const finalPayment = finalTax + serviceCharge;
const isEligible = nightStayed >= 3 && vipMember;
console.log(finalPayment);
console.log(isEligible);

