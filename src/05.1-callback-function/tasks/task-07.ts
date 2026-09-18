/**
 * An LMS stores student performance data below.
 * The school wants to analyze students using different criteria.
 * A student is considered academically successful if:
 * - Score ≥ 75
 * - Attendance ≥ 90%
 * 
 * 
 * The teacher wants to generate:
 *  - Pass/fail status.
 *  - Academic performance category.
 *  - Attendance status.
 *  - Final recommendation.
 * 
 * Recommendation Rules:
 * ----------------------------------------------------------------|
 * | Condition                      | Recommendation               |
 * | ------------------------------ | ---------------------------- |
 * | Score ≥ 90 AND attendance ≥ 90 | Excellent                    |
 * | Score ≥ 75 AND attendance ≥ 90 | Good                         |
 * | Score ≥ 75 BUT attendance < 90 | Improve Attendance           |
 * | Score < 75                     | Improve Academic Performance |
 * ----------------------------------------------------------------|
 * 
 * Challenge:
 * - processStudents() should know nothing about these rules.
 * - It should only process the students and execute the callback.
 */
type Student = {
    name: string
    score: number
    attendance: number
}

const students: Student[] = [
    { name: "Alya", score: 92, attendance: 96 },
    { name: "Budi", score: 68, attendance: 88 },
    { name: "Citra", score: 84, attendance: 91 },
    { name: "Dimas", score: 73, attendance: 95 },
    { name: "Eka", score: 95, attendance: 82 },
    { name: "Fajar", score: 79, attendance: 97 }
];

type PASS_STATUS = "Pass" | "Fail"
type PERFORMANCE_CATEGORY = "Excellent" | "Good" | "Average" | "Poor"
type ATTENDANCE_STATUS = "Good Attendance" | "Poor Attendance"
type RECOMMENDATION = "Excellent" | "Good" | "Improve Attendance" | "Improve Academic Performance"

type StudentWithPassStatus = Student & { status: PASS_STATUS }
type StudentWithPerformance = Student & { category: PERFORMANCE_CATEGORY }
type StudentWithAttendance = Student & { attendanceStatus: ATTENDANCE_STATUS }
type StudentWithRecommendation = Student & { recommendation: RECOMMENDATION }


function getPassFailStatus(selectedStudent: Student): StudentWithPassStatus {
    let status: PASS_STATUS;
    if (selectedStudent.score >= 75 && selectedStudent.attendance >= 90) {
        status = "Pass";
    } else {
        status = "Fail";
    }
    return { ...selectedStudent, status };
}

function getPerformanceCategory(selectedStudent: Student): StudentWithPerformance {
    let category: PERFORMANCE_CATEGORY;
    if (selectedStudent.score >= 90) {
        category = "Excellent";
    } else if (selectedStudent.score >= 80) {
        category = "Good";
    } else if (selectedStudent.score >= 75) {
        category = "Average";
    } else {
        category = "Poor";
    }
    return { ...selectedStudent, category };
}

function getAttendanceStatus(selectedStudent: Student): StudentWithAttendance {
    let attendanceStatus: ATTENDANCE_STATUS;
    if (selectedStudent.attendance >= 90) {
        attendanceStatus = "Good Attendance";
    } else {
        attendanceStatus = "Poor Attendance";
    }
    return { ...selectedStudent, attendanceStatus };
}

function getFinalRecommendation(selectedStudent: Student): StudentWithRecommendation {
    let recommendation: RECOMMENDATION;
    if (selectedStudent.score >= 90 && selectedStudent.attendance >= 90) {
        recommendation = "Excellent";
    } else if (selectedStudent.score >= 75 && selectedStudent.attendance >= 90) {
        recommendation = "Good";
    } else if (selectedStudent.score >= 75 && selectedStudent.attendance < 90) {
        recommendation = "Improve Attendance";
    } else {
        recommendation = "Improve Academic Performance";
    }
    return { ...selectedStudent, recommendation };
}


function processStudents<T>(
    arr: Student[],
    callback: (student: Student) => T
): T[] {
    const result: T[] = [];
    for (let index = 0; index < arr.length; index++) {
        result.push(callback(arr[index]));
    }
    return result;
}

const studentsWithPassStatus = processStudents(students, getPassFailStatus);
const studentsWithPerformance = processStudents(students, getPerformanceCategory);
const studentsWithAttendance = processStudents(students, getAttendanceStatus);
const studentsWithRecommendation = processStudents(students, getFinalRecommendation);

console.log("====== PASS/FAIL STATUS ======");
console.log({ students: studentsWithPassStatus });
console.log("====== PERFORMANCE CATEGORY ======");
console.log({ students: studentsWithPerformance });
console.log("====== ATTENDANCE STATUS ======");
console.log({ students: studentsWithAttendance });
console.log("====== FINAL RECOMMENDATION ======");
console.log({ students: studentsWithRecommendation });