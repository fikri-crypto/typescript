/**
 * An LMS stores assignment submission information on array below.
 * Business Rules
 * - Students who do not submit automatically receive a score of 0.
 * - A passing score is 75.
 * - Submitted assignments with a score below 75 require revision.
 * 
 * Student Tasks using a loop for:
 * - Count students who submitted their assignment.
 * - Count students who did not submit.
 * - Count students who passed.
 * - Count students who must revise their assignment.
 * - Display the names of students who did not submit.
 * - Display the names of students who must revise.
 * - Calculate the class average score.
 */

import { log } from "node:console";

type Submission = {
    student: string
    submitted: boolean
    score: number
}

const submissions = [
    { student: "Alya", submitted: true, score: 92 },
    { student: "Budi", submitted: false, score: 0 },
    { student: "Citra", submitted: true, score: 78 },
    { student: "Dimas", submitted: true, score: 65 },
    { student: "Eka", submitted: false, score: 0 },
    { student: "Fajar", submitted: true, score: 84 },
    { student: "Gita", submitted: true, score: 90 },
    { student: "Hana", submitted: true, score: 73 }
];


let countSubmittedStudent:number = 0
let countUnSubmittedStudent = 0
let passedStudent: number = 0
let countFailedStudent = 0
let totalscore = 0
let countOfStudent = submissions. length
let unsubmittedName: string[] = []
let revision: string[] = []


/**Scanning array */
for (let index = 0; index < countOfStudent; index++) {
    /**check the student submitted */
    if(submissions[index].submitted){
        countSubmittedStudent++
    }else{
        countUnSubmittedStudent++
        unsubmittedName.push(
            submissions[index].student)
    }

    /**check passing score */
    if(submissions[index].score >= 75){
        passedStudent++
    }else{
        countFailedStudent++
        revision.push(submissions[index].student
        )
    }

    totalscore += submissions[index].score
}

console.log(`submitted student: ${countSubmittedStudent}`);
console.log(`unsubmitted student: ${countUnSubmittedStudent}`);
console.log(`passed student: ${passedStudent}`);
console.log(`failed student: ${countFailedStudent}`);
console.log(`Avarage Score: ${totalscore / countOfStudent}`);
console.log(`Student who need revisi`);
console.log(revision);
console.log(`Student who not submit`);
console.log(unsubmittedName);
