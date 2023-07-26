class Person {
    constructor(public readonly name: string, protected age: number){
    }

    inclementAge(this: Person) {
        this.age++;
    }

    greeting(this: Person) {
        console.log(`hello my name is ${this.name} im ${this.age} years ord`);   
    }
}

class Teacher extends Person {
    constructor(name: string, age: number, public subject: string) {
        super(name, age);
        this.subject = subject;
    }

    greeting() {
        console.log(`hello my name is ${this.name} im ${this.age} years ord i teach ${this.subject}`);   
    }
}

const teacher = new Teacher("jiro", 20, "math");
teacher.greeting();