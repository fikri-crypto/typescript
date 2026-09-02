/**
 * A university stores enrollment information at following array
 * The university needs a report containing:
 * - Total students
 * - Active students
 * - Inactive students
 * - Software Engineering students
 * - Networking students
 * - Multimedia students
 * 
 * Complete following functions!
 */
type Students ={
  name:string ,
  major:string,
  active:boolean
 };


const students:Students[] = [
  {
    name: "Alya",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Budi",
    major: "Networking",
    active: false
  },
  {
    name: "Citra",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Dimas",
    major: "Multimedia",
    active: true
  },
  {
    name: "Eka",
    major: "Networking",
    active: false
  }
];

function countActiveStudents(activeStudent:Students[] ): number  {
  let count = 0;
  for (let index = 0; index < activeStudent.length; index++) {
    if (activeStudent[index].active) {
      count++
      
    }
    
   
  }
  
 return count;
}

function countInactiveStudents(inactiveStudent:Students[]): number {
  let count = 0;
  for (let index = 0; index < inactiveStudent.length; index++) {
    if (!inactiveStudent[index].active) {
      count++
      
    }
    
  }
return count;
}

function countStudentsByMajor(studentByMajor: Students[], major: string): number {
 let count = 0;
for (let index = 0; index < studentByMajor.length; index++) {
     if (studentByMajor[index].major === major) {
         count++;
        }
    }
 return count;
} 

function printEnrollmentReport(st: Students[]): void {
    console.log("=== Laporan Pendaftaran Mahasiswa ===");
    console.log("Total Mahasiswa:", st.length);
    console.log("Mahasiswa Aktif:", countActiveStudents(st));
    console.log("Mahasiswa Tidak Aktif:", countInactiveStudents(st));
    console.log("Software Engineering:", countStudentsByMajor(st, "Software Engineering"));
    console.log("Networking:", countStudentsByMajor(st, "Networking"));
    console.log("Multimedia:", countStudentsByMajor(st, "Multimedia"));
}

printEnrollmentReport(students);