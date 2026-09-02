/**
 * An LMS stores assignment submission data at following array.
 * Business Rules
 * - Passing score = 75
 * - Students who do not submit receive 0
 * - Submitted assignments below 75 require revision.
 * 
 * The principal requests a report showing:
 * - Total students
 * - Submitted assignments
 * - Missing assignments
 * - Passed students
 * - Students requiring revision
 * - Average score
 * - Highest score
 * - Lowest score
 * 
 * Student Tasks
 * 1. Design your own functions.
 * At minimum, your solution must contain:
 * - 7 non-void functions
 * - 1 void function to display the report.
 * 
 */
type Submission = {
    student: string,
    submitted: boolean,
    score: number
};

const submissions: Submission[] = [
    { student: "Alya", submitted: true, score: 90 },
    { student: "Budi", submitted: false, score: 0 },
    { student: "Citra", submitted: true, score: 84 },
    { student: "Dimas", submitted: true, score: 72 },
    { student: "Eka", submitted: false, score: 0 },
    { student: "Fajar", submitted: true, score: 96 }
];

function countTotalStudent(st: Submission[]): number {
    let count = 0;
    for (let index = 0; index < st.length; index++) {
        count++;
    }
    return count;
}

function submittedAssignments(st: Submission[]): number {
    let count = 0;
    for (let index = 0; index < st.length; index++) {
        if (st[index].submitted) {
  count++;
        }
    }
    return count;
}

function missingAssignments(st: Submission[]): number {
    let count = 0;
    for (let index = 0; index < st.length; index++) {
        if (!st[index].submitted) {
            count++;
        }
    }
    return count;
}

function passedStudents(st: Submission[]): number {
    let count = 0;
    const passingScore = 75;
    for (let index = 0; index < st.length; index++) {
        if (st[index].score >= passingScore) {
            count++;
        }
    }
    return count;
}

function revisionStudents(st: Submission[]): number {
    let count = 0;
    const passingScore = 75;
    for (let index = 0; index < st.length; index++) {
        if (st[index].score < passingScore && st[index].submitted) {
            count++;
        }
    }
    return count;
}

function averageScore(st: Submission[]): number {
    let total = 0;
    for (let i = 0; i < st.length; i++) {
        total += st[i].score;
    }
    return total / st.length;
}

function highestScore(st: Submission[]): number {
    let highest = st[0].score;
    for (let i = 1; i < st.length; i++) {
        if (st[i].score > highest) {
            highest = st[i].score;
        }
    }
    return highest;
}

function lowestScore(st: Submission[]): number {
    let lowest = st[0].score;
    for (let i = 1; i < st.length; i++) {
        if (st[i].score < lowest) {
            lowest = st[i].score;
        }
    }
    return lowest;
}

function printReport(st: Submission[]): void {
    console.log("=== Laporan Tugas LMS ===");
    console.log("Total Mahasiswa:", countTotalStudent(st));
    console.log("Tugas Terkumpul:", submittedAssignments(st));
    console.log("Tugas Tidak Terkumpul:", missingAssignments(st));
    console.log("Lulus:", passedStudents(st));
    console.log("Perlu Revisi:", revisionStudents(st));
    console.log("Rata-rata Nilai:", averageScore(st));
    console.log("Nilai Tertinggi:", highestScore(st));
    console.log("Nilai Terendah:", lowestScore(st));
}

printReport(submissions);