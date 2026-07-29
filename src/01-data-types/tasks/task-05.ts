/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */
type dailyAtt = {
    employeeID: number;
    employeeName: string;
    date: string;
    checkin: number;
    checkout: number;
    totalWork: number;
    presentONday: boolean;
};
const attendance: dailyAtt[] = [
    {
        employeeID: 1245,
        employeeName: "FikriMr",
        date: "12-3-2026",
        checkin: 16.34,
        checkout: 17.34,
        totalWork: 7,
        presentONday: true
    },
    {
        employeeID: 124445,
        employeeName: "Rakakumis",
        date: "14-5-2026",
        checkin: 13.34,
        checkout: 16.34,
        totalWork: 7,
        presentONday: true
    },
    {
        employeeID: 1245,
        employeeName: "FikriMr",
        date: "12-3-2026",
        checkin: 16.34,
        checkout: 17.34,
        totalWork: 7,
        presentONday: false
    },




]
console.log(attendance);