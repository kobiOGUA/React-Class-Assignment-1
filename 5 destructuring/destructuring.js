/* Destructuring is basically a feature that alows you to unpack array, object or property values
   into separate variables in a single statement
*/

// Array Destructuring

let courses = ["Java", "React", "C++", "C", "HTML"];

/* Instead of
let course1 = courses[0];
let course2 = courses[1];
*/


// You can do
let [course1, course2, course3] = courses;
console.log(course1);
console.log(course2);
console.log(course3);

// Similarly for objects we can do the same

let student1 = {name: "Kobi", department: "Software Engineering"}
let {name, department} = student1;
console.log(`${name} is studying ${department}`);   