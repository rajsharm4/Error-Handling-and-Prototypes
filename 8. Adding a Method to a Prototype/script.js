function Student(name) {
     this.name = name;
}
 
Student.prototype.printdetails = function () {
      return `Hello, the student is ${this.name}.`;
    }
 


let student = new Student("Rishabh");
console.log(student.printdetails());