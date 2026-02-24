function createStudent(name, marks) {
    return {
        name,
        marks,
        passed() {
            return this.marks >= 50;
        }
    };
}

let students = [
    createStudent("Hagar", 85),
    createStudent("Ali", 92),
    createStudent("Mona", 48)
];

function info(data) {
    console.log(`Name: ${data.name}, Marks: ${data.marks}, Passed: ${data.passed() ? "Yes" : "No"}`);
}

let countPassed = 0;
students.forEach(function(data) {
    if(data.passed()) {
        countPassed++;
    }
    info(data);
});

console.log(`Total Passed: ${countPassed}`);