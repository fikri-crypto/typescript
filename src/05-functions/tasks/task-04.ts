/**
 * The homeroom teacher stores attendance information as follows.
 * The school wants to display an attendance report.
 * The report should include:
 * - Total Present
 * - Total Absent
 * - Names of absent students
 * The report is displayed directly on the console.
 * Student Tasks:
 * - Create a function named printAttendanceReport.
 * - The function receives the attendance array.
 * - Use looping and conditions.
 * - Display the report inside the function.
 * - The function should not return any value.
 */
const attendances = [
    { name: "Alya", present: true },
    { name: "Budi", present: false },
    { name: "Citra", present: true },
    { name: "Dimas", present: true },
    { name: "Eka", present: false }
];
function printAttendanceReport(data: typeof attendances): void {
    let totalPresent = 0;
    let totalAbsent = 0;
    const absentNames: string[] = [];

    for (let i = 0; i < data.length; i++) {
        if (data[i].present) {
            totalPresent++;
        } else {
            totalAbsent++;
            absentNames.push(data[i].name);
        }
    }

    console.log("=== Laporan Kehadiran ===");
    console.log("Total Hadir:", totalPresent);
    console.log("Total Tidak Hadir:", totalAbsent);
    console.log("Nama yang Tidak Hadir:", absentNames.join(", "));
}

printAttendanceReport(attendances);