/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */
const ratePerHour: number = 8000;
const hoursPlayed: number = 7;
const minutesPlayed: number = 35;

const totalMinutes: number = (hoursPlayed * 60) + minutesPlayed;
const remainingMinutes: number = totalMinutes % 60;
const billedHours: number = totalMinutes / 60;
const paymentBeforeDiscount: number = billedHours * ratePerHour;
const discountPercent: number = billedHours > 5 ? 0.15 : 0;
const discountAmount: number = paymentBeforeDiscount * discountPercent;
const finalPayment: number = paymentBeforeDiscount - discountAmount;
 console.log(remainingMinutes);
 console.log(finalPayment);


