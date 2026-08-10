/**
 * An online marketplace wants to calculate the customer's final payment and reward points after checkout.
 * The customer purchases the following items:
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Monitor Stand       | 420000 |        1 |
 * 
 * Customer Information:
 * | Information       | Value                            |
 * | ----------------- | -------------------------------- |
 * | Voucher Value     | 100000                           |
 * | Premium Member    | Yes                              |
 * | Reward Point Rate | 1 point for every Rp50,000 spent |
 * 
 * Business Rules:
 * - Premium members receive 10% discount.
 * - Voucher is deducted after the membership discount.
 * - Reward points are calculated from the final payment before tax.
 * - VAT is 11%.
 * - Free shipping is available if:
 * - Premium member OR
 * - Final payment before tax exceeds Rp1,500,000.
 * 
 * The checkout system must calculate:
 * - Product subtotal
 * - Membership discount
 * - Voucher deduction
 * - Payment before tax
 * - VAT
 * - Final payment
 * - Reward points
 * - Free shipping eligibility

 */
const mechanicalPrice = 850000;
const mechanicalQ = 1;
const wirelessPrice = 275000;
const wirelessQ = 2;
const monitorsPrice = 420000;
const monitorsQ = 1;
const voucher = 100000;
const premiumMember = true;
const premPrice = 0.10;
const vat = 0.11;
const reward = 50000;


const subtotal = (mechanicalPrice * mechanicalQ) + (wirelessPrice * wirelessQ) + (monitorsPrice * monitorsQ);
 const diskonMember = premiumMember ? subtotal * premPrice : 0;
const diskonVoucher = subtotal - diskonMember - voucher;
const rewardPoint = diskonVoucher / reward;
const vatPrice = diskonVoucher * vat;
const hargaTotal = diskonVoucher + vatPrice;
const freeShiping = diskonVoucher >= 1500000 || premiumMember;

console.log(rewardPoint);
console.log(diskonVoucher)
console.log(vatPrice);
console.log(hargaTotal);
console.log(freeShiping);   


