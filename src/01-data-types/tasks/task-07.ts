/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */
type programming = {
    studentId: number;
    fullName: string;
    gradeLevel: number;
    courseId: number;
    courseTitle: string;
    instructorName: string;
};
const registration: programming[] = [
    {
        studentId: 1223,
        fullName: "fikri Maulana",
        gradeLevel: 1,
        courseId: 3213,
        courseTitle: "Python",
        instructorName: "Adi"
    },
    {
        studentId: 123,
        fullName: "Maulana",
        gradeLevel: 2,
        courseId: 33,
        courseTitle: "TypeScript",
        instructorName: "Gorgon"
    },
    {
        studentId: 121333,
        fullName: "Raka",
        gradeLevel: 5,
        courseId: 33343,
        courseTitle: "Java",
        instructorName: "tres"
    },

]
console.log(registration);