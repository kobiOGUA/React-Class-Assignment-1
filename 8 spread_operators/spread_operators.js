// Spread operators are used to spread out arrays, objects etc into another iterable or function call

let oldStudents = ["Kobi", "Emmanuel", "Bob"];
let newStudents = ["Frederick", "Busola", "Akingbade"];

let allStudents = [...oldStudents, ...newStudents];

console.log("The updated list of students new and old is:");
for (let student of allStudents){
    console.log(student);
}