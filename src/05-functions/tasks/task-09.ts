/**
 * A hospital stores patient information in the following array.
 * The hospital director requests a daily report containing:
 * - Total patients
 * - Total admitted patients
 * - Total discharged patients
 * - Number of patients in each department
 * - Highest hospital bill
 * - Lowest hospital bill
 * - Average hospital bill
 * - Total hospital revenue
 * - Names of admitted patients
 * 
 * Student Tasks
 * Design a program using multiple reusable functions.
 * 
 * Requirements
 * - Create at least 8 non-void functions.
 * - Create 1 void function to print the report.
 * - Each function should perform only one responsibility.
 * - printHospitalReport() must only display results.
 * - No duplicated calculations.
 */
type Patient = {
    id: string,
    name: string,
    age: number,
    department: string,
    admitted: boolean,
    bill: number
};


const patients = [
    {
        id: "PT001",
        name: "Alya",
        age: 17,
        department: "Pediatrics",
        admitted: true,
        bill: 850000
    },
    {
        id: "PT002",
        name: "Budi",
        age: 45,
        department: "Cardiology",
        admitted: false,
        bill: 1200000
    },
    {
        id: "PT003",
        name: "Citra",
        age: 68,
        department: "Cardiology",
        admitted: true,
        bill: 2500000
    },
    {
        id: "PT004",
        name: "Dimas",
        age: 33,
        department: "Orthopedics",
        admitted: true,
        bill: 640000
    },
    {
        id: "PT005",
        name: "Eka",
        age: 14,
        department: "Pediatrics",
        admitted: false,
        bill: 350000
    }
];



function countTotalPatients(st: Patient[]): number {
    let count = 0;
    for (let i = 0; i < st.length; i++) {
        count++;
    }
    return count;
}


function countAdmittedPatients(st: Patient[]): number {
    let count = 0;
    for (let i = 0; i < st.length; i++) {
        if (st[i].admitted) {
            count++;
        }
    }
    return count;
}


function countDischargedPatients(st: Patient[]): number {
    let count = 0;
    for (let i = 0; i < st.length; i++) {
        if (!st[i].admitted) {
            count++;
        }
    }
    return count;
}


function countPatientsByDepartment(st: Patient[], department: string): number {
    let count = 0;
    for (let i = 0; i < st.length; i++) {
        if (st[i].department === department) {
            count++;
        }
    }
    return count;
}


function findHighestBill(st: Patient[]): number {
    let highest = st[0].bill;
    for (let i = 1; i < st.length; i++) {
        if (st[i].bill > highest) {
            highest = st[i].bill;
        }
    }
    return highest;
}


function findLowestBill(st: Patient[]): number {
    let lowest = st[0].bill;
    for (let i = 1; i < st.length; i++) {
        if (st[i].bill < lowest) {
            lowest = st[i].bill;
        }
    }
    return lowest;
}


function calculateAverageBill(st: Patient[]): number {
    let total = 0;
    for (let i = 0; i < st.length; i++) {
        total += st[i].bill;
    }
    return total / st.length;
}


function calculateTotalRevenue(st: Patient[]): number {
    let total = 0;
    for (let i = 0; i < st.length; i++) {
        total += st[i].bill;
    }
    return total;
}


function getAdmittedPatientNames(st: Patient[]): string[] {
    const names: string[] = [];
    for (let i = 0; i < st.length; i++) {
        if (st[i].admitted) {
            names.push(st[i].name);
        }
    }
    return names;
}


function printHospitalReport(st: Patient[]): void {
    console.log("=== Laporan Harian Rumah Sakit ===");
    console.log("Total Pasien:", countTotalPatients(st));
    console.log("Pasien Dirawat Inap:", countAdmittedPatients(st));
    console.log("Pasien Sudah Pulang:", countDischargedPatients(st));
    console.log("Pasien Pediatrics:", countPatientsByDepartment(st, "Pediatrics"));
    console.log("Pasien Cardiology:", countPatientsByDepartment(st, "Cardiology"));
    console.log("Pasien Orthopedics:", countPatientsByDepartment(st, "Orthopedics"));
    console.log("Tagihan Tertinggi:", findHighestBill(st));
    console.log("Tagihan Terendah:", findLowestBill(st));
    console.log("Rata-rata Tagihan:", calculateAverageBill(st));
    console.log("Total Pendapatan:", calculateTotalRevenue(st));
    console.log("Nama Pasien Dirawat Inap:", getAdmittedPatientNames(st).join(", "));
}

printHospitalReport(patients);  