/**
 * An online learning platform stores course completion information.
 * The academy director wants a dashboard containing:
 * Completion Statistics:
 * - Total enrollments
 * - Completed enrollments
 * - Incomplete enrollments
 * - Completion percentage
 * 
 * Academic Statistics:
 * - Highest score
 * - Lowest score
 * - Average score
 * - Students with passing scores (≥ 75)
 * 
 * Course Statistics:
 * - Number of students enrolled in each course
 * - Average score for each course
 * 
 * Learning Statistics:
 * - Total learning hours
 * - Average learning duration
 * 
 * Student Tasks:
 * You must design your own program architecture.
 * Requirements
 * Your solution must contain:
 * - At least 10 non-void functions
 * - At least 2 void functions
 * - No duplicated calculations
 * - Each function must have one responsibility
 * - Every printed value must come from another function
 * - Use meaningful function names and parameters
 * Reuse existing functions whenever possible
 */
type Enrollments = {
    student:string,
    course:string,
    completed:boolean,
    score: number,
    duration:number
};

const enrollments = [
    {
        student: "Alya",
        course: "TypeScript",
        completed: true,
        score: 91,
        duration: 38
    },
    {
        student: "Budi",
        course: "TypeScript",
        completed: false,
        score: 45,
        duration: 12
    },
    {
        student: "Citra",
        course: "Database",
        completed: true,
        score: 87,
        duration: 42
    },
    {
        student: "Dimas",
        course: "Backend",
        completed: true,
        score: 96,
        duration: 40
    },
    {
        student: "Eka",
        course: "Database",
        completed: false,
        score: 60,
        duration: 18
    },
    {
        student: "Fajar",
        course: "Backend",
        completed: true,
        score: 82,
        duration: 35
    },
    {
        student: "Gita",
        course: "TypeScript",
        completed: true,
        score: 88,
        duration: 36
    },
    {
        student: "Hana",
        course: "Backend",
        completed: false,
        score: 70,
        duration: 20
    }
];  
function totalEnrollment(totalEnr:Enrollments[]): number {
    let total = 0;
    for (let index = 0; index < totalEnr.length; index++) {
        total++
        
        
    }
    return total;
}
function completeEnrollment(completedd:Enrollments[]): number {
    let total = 0;
    for (let index = 0; index < completedd.length; index++) {
        if (completedd[index].completed) {
            total++
            
        }
        
        
    }
    return total;
}
function incompleteEnrollment(incompletedd:Enrollments[]): number {
    let total = 0;
    for (let index = 0; index < incompletedd.length; index++) {
        if (!incompletedd[index].completed) {
            total++
            
        }
        
        
    }
    return total;
}

function completepercentage(percentage:Enrollments[]): number {
    const completed = completeEnrollment(percentage)
    const total = totalEnrollment(percentage)
    return completed / total * 100;
}

function highestScore(high:Enrollments[]): number {
   let highest = high[0].score
   for (let index = 0; index < high.length; index++) {
    if (high[index].score > highest) {
        highest = high[index].score;
        
    }
   
    
   }
   return highest;
}
function lowestScore(low:Enrollments[]): number {
   let lowest = low[0].score
   for (let index = 0; index < low.length; index++) {
    if (low[index].score < lowest) {
        lowest = low[index].score;
        
    }
   
    
   }
   return lowest;
}
function averageScore(avg: Enrollments[]): number {
    let total = 0;
    for (let index = 0; index < avg.length; index++) {
        total += avg[index].score;
    }
    return total / avg.length;
}

function passingStudents(pass: Enrollments[]): number {
    let count = 0;
    const passingScore = 75;
    for (let index = 0; index < pass.length; index++) {
        if (pass[index].score >= passingScore) {
            count++;
        }
    }
    return count;
}

function countStudentsByCourse(st: Enrollments[], course: string): number {
    let count = 0;
    for (let index = 0; index < st.length; index++) {
        if (st[index].course === course) {
            count++;
        }
    }
    return count;
}

function averageScoreByCourse(st: Enrollments[], course: string): number {
    let total = 0;
    let count = 0;
    for (let index = 0; index < st.length; index++) {
        if (st[index].course === course) {
            total += st[index].score;
            count++;
        }
    }
    return total / count;
}


function totalLearningHours(st: Enrollments[]): number {
    let total = 0;
    for (let index = 0; index < st.length; index++) {
        total += st[index].duration;
    }
    return total;
}

function averageLearningDuration(st: Enrollments[]): number {
    const total = totalLearningHours(st);   
    return total / st.length;
}

function printCompletionAndAcademicReport(st: Enrollments[]): void {
    console.log("=== Completion Statistics ===");
    console.log("Total Enrollments:", totalEnrollment(st));
    console.log("Completed:", completeEnrollment(st));
    console.log("Incomplete:", incompleteEnrollment(st));
    console.log("Completion Percentage:", completepercentage(st));

    console.log("=== Academic Statistics ===");
    console.log("Highest Score:", highestScore(st));
    console.log("Lowest Score:", lowestScore(st));
    console.log("Average Score:", averageScore(st));
    console.log("Passing Students:", passingStudents(st));
}

function printCourseAndLearningReport(st: Enrollments[]): void {
    console.log("=== Course Statistics ===");
    console.log("TypeScript - Students:", countStudentsByCourse(st, "TypeScript"), "| Avg Score:", averageScoreByCourse(st, "TypeScript"));
    console.log("Database - Students:", countStudentsByCourse(st, "Database"), "| Avg Score:", averageScoreByCourse(st, "Database"));
    console.log("Backend - Students:", countStudentsByCourse(st, "Backend"), "| Avg Score:", averageScoreByCourse(st, "Backend"));

    console.log("=== Learning Statistics ===");
    console.log("Total Learning Hours:", totalLearningHours(st));
    console.log("Average Learning Duration:", averageLearningDuration(st));
}

printCompletionAndAcademicReport(enrollments);
printCourseAndLearningReport(enrollments);