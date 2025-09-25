/*
    A class is a template for creating objects. 
    Classes provide a structured way to create objects that have shared properties and methods.
*/

class Students {
    constructor(name, department){
        this.name = name;
        this.department = department;
    }

    showDetails(){
        console.log(`Student name: ${this.name}`);
        console.log(`Department: ${this.department}`);
    }
}

const student1 = new Students("Kobi", "Software Engineering");
const student2 = new Students("Chukwuemeka", "Fisheries");
const student3 = new Students("Adetokumbo", "Law");

student1.showDetails();
student2.showDetails();
student3.showDetails();