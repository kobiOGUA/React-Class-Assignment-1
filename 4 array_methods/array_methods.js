// An array is a structure that can store multiple elements of the same data type.

let courses = ["Java", "React", "C++", "C", "HTML"];
console.log(`The courses for this semester are: `)
for (let course of courses){
    console.log(course);
}

// Array methods are functions that let you easily manipulate arrays

// push() adds an item to the end

courses.push("Python");
console.log(`The courses for this semester are: `)
for (let course of courses){
    console.log(course);
}

// pop() removes the last item from the end

courses.pop()
console.log(`The courses for this semester are: `)
for (let course of courses){
    console.log(course);
}

// shift() removes the first item

courses.shift()
console.log(`The courses for this semester are: `)
for (let course of courses){
    console.log(course);
}

// unshift() adds an item to the beginning

courses.unshift("Java")
console.log(`The courses for this semester are: `)
for (let course of courses){
    console.log(course);
}

// There are more but these are just the basics