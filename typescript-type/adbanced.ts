type Engineer = {
    name: string;
    role: string;
}

type Blogger = {
    name: string;
    follower: number;
}

//type EngineerBlogger = Engineer & Blogger;
interface EngineerBlogger extends Engineer, Blogger {}
const quill: EngineerBlogger = {
    name: "quill",
    role: "front-end",
    follower: 1000,
}

type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber;

function toUpperCase(x: string): string;
function toUpperCase(x: number): number;
function toUpperCase(x: string | number): string | number {
    if (typeof x === "string") {
        x.toUpperCase();
    }
    return x;
}

interface TmpFunc {
    (x: string): number;
    (x: number): number;
}
const upperHelloFunc: TmpFunc = function (x: string | number) {return 0}


// interface FuncA {
//     (a: string): string;
// }
// interface FuncB {
//     (a: number): number;
// }
// let unionFunc: FuncA | FuncB;
// unionFunc();
// unionFunc = function(a: number | string, b?: number | string){ return 0 }

const upperHello = toUpperCase("hello");
const upperHello2 = toUpperCase(100);

type NomadWorker = Engineer | Blogger;
function discribeProfile (nomadWorker: NomadWorker){
    console.log(nomadWorker.name);
    if ('role' in nomadWorker) {
        console.log(nomadWorker.role);
    }
    if ('follower' in nomadWorker) {
        console.log(nomadWorker.follower);
    }
}

class Dog {
    kind: "dog" = "dog"
    speak() {
        console.log("bowbow");
    }
}

class Bird {
    kind: "bird" = "bird"
    speak() {
        console.log("tweet-tweet");
    }
    fly() {
        console.log("flutter");
    }
}

type Pet = Dog | Bird;
function havepet(pet: Pet) {
    pet.speak();

    switch (pet.kind) {
        case "bird":
            pet.fly();
    }

    if(pet instanceof Bird) {
        pet.fly();
    }
}

const input = document.getElementById('input') as HTMLInputElement;
input.value = "hoogehoge"

// (document.getElementById('input') as HTMLInputElement).value = "hogehoge"

interface Designer {
    name: string;
    [index: string | number]: string | number
}
const designer: Designer = {
    name: "quill",
    role: "fafa",
    aa: 100,
    100: 100
}

interface DounwoadedData {
    id: number;
    user?: {
        name?: {
            first: string;
            last: string;
        }
    }
}
const dounwoadedData:DounwoadedData = {
    id: 1,
}
console.log(dounwoadedData.user?.name?.first);

const userData = dounwoadedData.user ?? "no-user";
type id = DounwoadedData["id" | "user"];


enum Clolr {
    RED,
    BLUE
}

// let target = function (a:string, b:string) {}
// let source = function (a:string, b:string) {}
// target = source;

class AdbancedPerson {
    name: string = "peter"
    age: number = 5;
}

class AdbancedCar {
    name: string = "prius";
    age: number = 5;
}

let target = new AdbancedPerson();
let source = new AdbancedCar();
target = source

function advancedFn(...args: readonly [number, string, boolean, ...number[]]) {
}
advancedFn(0, "hoge", true, 3, 4, 5)

let milk = "milk" as const;
let drink = milk;
const array1 = [10, 20] as const;
const peter = {
    name: "peter",
    age: 38
} as const;

type PeterType = typeof peter;