class Person {
    static specis = "homo sapiens";
    static isAadult(age: number) {
        if (age > 17) return true;
        return false;
    }
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
    get subject() {
        return this._subject;
    }

    set subject(vaule) {
        if(!vaule) {
            throw new Error("there is no subject.")
        }
        this._subject = vaule;
    }

    constructor(name: string, age: number, private _subject: string) {
        super(name, age);
    }

    greeting() {
        console.log(`hello my name is ${this.name} im ${this.age} years ord i teach ${this._subject}`);   
    }
}

const teacher = new Teacher("jiro", 20, "math");
teacher.greeting();

console.log(Teacher.specis);
console.log(Teacher.isAadult(18));
