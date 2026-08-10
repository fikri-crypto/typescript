import { toNamespacedPath } from "node:path";

/**
 * A manufacturing company monitors production machines continuously.

Business Rules

If the machine is powered off:

Display Machine Offline.

Otherwise, check its operating condition.

If the machine temperature exceeds 90°C:

If vibration level is High, display:
Emergency Shutdown
Otherwise:
Cooling Required

If the temperature is 90°C or below:

If production speed is below 80%, display:
Performance Warning
Otherwise:
Machine Operating Normally

Today's machine status:
| Information      | Value |
| ---------------- | ----- |
| Powered On       | Yes   |
| Temperature      | 95    |
| High Vibration   | No    |
| Production Speed | 92    |

Student Tasks
- Declare all variables.
- Translate every business rule into conditional statements.
- Display the final machine status.
 */
const powerON = true;
const temperature = 95;
const highVibration = false;
const productionSpeed = 92;
console.log("mechine");
if(powerON){
if (temperature > 90 ){
    if(highVibration) {
        console.log("emergency shutdown") 
    } else{ 
        console.log("colling required");
    } 
} else if (temperature <= 90) {
    if(productionSpeed < 80) {
        console.log("Performance warning")
    } else{
        console.log("mechine operating normally");
    }

} } else{
    console.log("mechine off")
};