class person {
    constructor (Name, Age) {
        this.name = Name;
        this.age = Age;
    }

    getdetails() {
        if(this.name && this.age) {
            return `Name: ${this.name}, Age: ${this.age}`
        }
        else {
             return `Name: ${this.name}, Age: 0`
        }
    }
}

const person1 = new person("Rishabh", 18);
console.log(person1.getdetails());

const person2 = new person("Rishabh");
console.log(person2.getdetails());

