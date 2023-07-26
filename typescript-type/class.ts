abstract class Person {
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
        this.explainJob();
    }

    abstract explainJob(): void;
}

class Teacher extends Person {
    private static instance: Teacher;

    explainJob() {
        console.log("hello im teacher!!");
    }

    get subject() {
        return this._subject;
    }

    set subject(vaule) {
        if(!vaule) {
            throw new Error("there is no subject.")
        }
        this._subject = vaule;
    }

    private constructor(name: string, age: number, private _subject: string) {
        super(name, age);
    }

    static getInstance() {
        if(Teacher.instance) return Teacher.instance;
        Teacher.instance = new Teacher("taro", 38 ,"math");
        return Teacher.instance;
    }
}

const teacher = Teacher.getInstance();
const teacher2 = Teacher.getInstance();

console.log(teacher);
console.log(teacher2);
