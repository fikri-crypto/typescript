/**
 * A teacher has a list of students and their exam scores below.
 * The teacher wants to analyze the exam results.
 * Tasks:
 * 1. Get an array containing only the student names.
 * expected array: ["Andi", "Budi", "Citra", "Deni", "Eka"]
 * 2. Get students who passed. Passing score is >= 70. 
 * expected array: [
 * { name: "Andi", score: 85 },
 * { name: "Citra", score: 91 },
 * { name: "Deni", score: 74 }
 * ]
 * 
 * 3. Find the student named "Citra".
 * 4. Calculate the average score.
 */

import { stdout } from "node:process";

const students = [
  { name: "Andi", score: 85 },
  { name: "Budi", score: 62 },
  { name: "Citra", score: 91 },
  { name: "Deni", score: 74 },
  { name: "Eka", score: 55 },
];

const studentName = students.map(
  students => students.name
);
console.log(studentName);

const passedStudent = students.map(
  students => students.score >= 70
);

console.log(passedStudent);

const findCrita = students.find(
  students => students.name === "citra" 
); 
console.log(findCrita);

const avarage = students.reduce(
  (total,student) => total + student.score, 0
); 

const avarageScore = avarage / students.length;

console.log("Avarage " , avarageScore)









