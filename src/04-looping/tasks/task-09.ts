/**
 * A university stores the final grades of students enrolled in the Backend Development course at array below.
 * Grade Categories
 * - A : 90–100
 * - B : 80–89
 * - C : 70–79
 * - D : below 70
 * 
 * Student Task Calculate:
 * - Number of A students
 * - Number of B students
 * - Number of C students
 * - Number of D students
 * - Highest score
 * - Lowest score
 * - Average score
 */

const students = [
    { name: "Alya", score: 88 },
    { name: "Budi", score: 71 },
    { name: "Citra", score: 95 },
    { name: "Dimas", score: 63 },
    { name: "Eka", score: 84 },
    { name: "Fajar", score: 79 },
    { name: "Gita", score: 92 },
    { name: "Hana", score: 67 }
];
let gradeACount = 0;
let gradeBCount = 0;
let gradeCCount = 0;
let gradeDCount = 0;
let highestScore = students[0].score;
let lowestScore = students[0].score;
let totalStudentScore = 0;
 
for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const score = student.score;
    totalStudentScore += score;
 
    if (score > highestScore) {
        highestScore = score;
    }
    if (score < lowestScore) {
        lowestScore = score;
    }
 
    if (score >= 90) {
        gradeACount++;
    } else if (score >= 80) {
        gradeBCount++;
    } else if (score >= 70) {
        gradeCCount++;
    } else {
        gradeDCount++;
    }
}
 
const averageStudentScore = totalStudentScore / students.length;
 
console.log("\n=== Soal 4: Nilai Mata Kuliah ===");
console.log("Grade A:", gradeACount);
console.log("Grade B:", gradeBCount);
console.log("Grade C:", gradeCCount);
console.log("Grade D:", gradeDCount);
console.log("Nilai tertinggi:", highestScore);
console.log("Nilai terendah :", lowestScore);
console.log("Rata-rata nilai:", averageStudentScore);
 