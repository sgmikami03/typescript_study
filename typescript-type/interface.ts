// type addFunc = (num1: number, num2: number) => number;

interface addFunc {
    (num1: number, num2: number): number;
}

let addFunc: addFunc;
addFunc = (n1: number, n2: number) => {
    return n1 + n2;
}

const nameable: Namable = {
    name: "quill",
    nickName: "Quiita",
}

interface Namable {
    name: string;
    nickName?: string;
}

interface Human extends Namable {
    name: string;
    age: number;
    greeting: (message: string) => void;
}

const human: Human = {
    name: "quill",
    age: 38,
    greeting(message: string){
        console.log(message);
    }
}

class Developer implements Human {
    constructor(public name: string, public age: number, public experience: string) {}
    greeting(message: string) {
        console.log("hello");
    }
}
const temDeveloper = {
    name: "quill",
    age: 38,
    experience: "keireki",
    greeting(message: string) {
        console.log("hello");
    }
}
const user: Human = temDeveloper;