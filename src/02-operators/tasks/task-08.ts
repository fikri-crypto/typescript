/**
 * A smart home monitors electricity usage every day.
 * Today's information:
 * | Information               | Value |
 * | ------------------------- | ----- |
 * | Previous Meter            | 25640 |
 * | Current Meter             | 25892 |
 * | Electricity Price per kWh | 1650  |
 * | Solar Panel Installed     | Yes   |
 * | Energy Saving Mode        | No    |
 * 
 * Business Rules
 * - Electricity usage is calculated from the meter difference.
 * - Houses with solar panels receive a 20% discount.
 * - Houses receive an additional 5% discount if Energy Saving Mode is enabled.
 * - Houses receive an additional 25% discount if electricity usage exceeds 300kwh.
 * - A house qualifies for the Green Energy Program only if:
 *      - Solar panel is installed
 *      - Energy consumption is below 300 kWh
 *      - Energy Saving Mode is enabled 
 * 
 * The system must calculate:
 * - Total energy consumption
 * - Electricity bill
 * - Final bill
 * - Green Energy Program eligibility
 */
const previousMeter: number = 25640;
const currentMeter: number = 25892;
const electricity: number = 1650;
const solarPanel: boolean = true;
const energySaving: boolean = false;
const solarPanelDiscount: number = 0.20;
const additional: number = 0.5; 
const additionalTwo = 0.25;


const differenceElectricity = currentMeter - previousMeter;
const bill = differenceElectricity * electricity;
const diskonPanel = solarPanel ? bill * solarPanelDiscount : 0;
const total = energySaving ? diskonPanel * additional : 0;
const totalsemua = differenceElectricity > 300 ? total * additionalTwo : 0;
const totalSemuadua = bill - diskonPanel - total - totalsemua;
const greenHouse = solarPanel && (differenceElectricity < 300 ) && energySaving;

console.log(totalSemuadua);
console.log(greenHouse);




