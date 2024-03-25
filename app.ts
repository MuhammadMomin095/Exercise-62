interface Student {
    name: string;
    age: number;
    courses: string[];
}

let student: Student = {
    name: "Momin",
    age: 22,
    courses: ["Math", "Science", "History"]
};

console.log(student);