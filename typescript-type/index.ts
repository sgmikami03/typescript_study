let hasValue: boolean = true;
let count: number = 10;
let float: number = 3.14;
let single: string = 'hello';
let double: string = "hello";
let back: string = `hello`;

const person: {
    name: {
        first: string;
        last: string;
    };
    age: number;
} = {
    name: {
        first: "kitazawa",
        last: "yuuho",
    },
    age: 21,
}
console.log(person.age);

const fruits: string[] = ["apple", "banana", "grape"]

const book: [string, number, boolean] = ["ビジネス", 1500, false];
book[1] = 700;

//19 enum
enum CoffeeSize {
    SHORT= "SHORT",
    TALL= "TALL",
    GRANDE= "GRANDE",
    VENTI= "VENTI"
}

const coffee= {
    hot: true,
    size: CoffeeSize.GRANDE
}
coffee.size = CoffeeSize.TALL

//20 any
let anythong: any = true;

//21 union
let unionType: number | string = 10;
unionType = "string";

let unionTypes: (number | string)[] = ["union", 100];

//22 leteral
const apple: 'apple' = "apple"
const apple2 = "apple"

let coffeeSizeLeteral: "Short"| "Tall" | "Grande" | "Venti" = "Short";
const coffee2: {
    hot:boolean;
    size: "Short"| "Tall" | "Grande" | "Venti";
}= {
    hot: true,
    size: "Short",
}

coffee2.size = "Tall"

//23 type エイリアス
type ClothSize = "small" | "medium" | "large"
const cloth: {
    color: string;
    size: ClothSize;
} = {
    color: "red",
    size: "small"
}

//24 関数の型
function add(num1: number, num2: number):number {
    return num1 + num2
}
add(3, 2);

//25 戻り値にvoidを使う voidとは何も返さない
function sayHello():void {
    console.log("hello");
}
console.log(sayHello());

//26 ull undefinded
let tmp: undefined;
let tmpNull: null;

//27 関数型を使って特定の関数を代入する
const anotherAdd: (n1: number, n2: number) => number = add;
const anotherAdd2: (n1: number, n2: number) => number = function (num1, num2) {
    return num1 + num2;
};
/*const doubleNumber: (number: number) => number = function(number: number) => number{
    return number * 2;
};*/
//const doubleNumber = (number: number): number => number * 2;
const doubleNumber: (num: number)=> number = num => num * 2;

//28 callback関数
function doubleAndHundle(num: number, cb: (num: number) => number):void {
    const doubleNumber = cb(num * 2);
    console.log(doubleNumber);
}
doubleAndHundle(21, doubleNum => {
    return doubleNum
});

//わからないから書いてみる
/* 普通に書いた時
const array = [15, 3, 20, 8, 5]
function checkArray(array: number[]):number[] {
    const returnArray:number[] = []
    array.forEach(element => {
        if(element % 2 == 0){
            returnArray.push(element)
        }
    });
    return returnArray;
}
console.log(checkArray(array));*/

/* callbackで書いた時 */
const array = [15, 3, 20, 8, 5]
function checkArray(array: number[], cb: (element: number) => boolean):number[] {
    const returnArray:number[] = []
    array.forEach(element => {
        if(cb(element)){
            returnArray.push(element)
        }
    });
    return returnArray;
}

const arraymod2 = checkArray(array, function(element: number): boolean{
    if(element % 2 == 0) {
        return true;
    }else {
        return false;
    }
});

const arraymod3 = checkArray(array, function(element: number): boolean{
    if(element % 3 == 0) {
        return true;
    }else {
        return false;
    }
});

console.log(arraymod2);
console.log(arraymod3);

//29 unknown
let unknownInput: unknown;
unknownInput = "hello";
let text: string;

if(typeof unknownInput === "string") {
    text = unknownInput
}

//20 never
function error(message:string): never {
    throw new Error(message);
}
console.log(error("this is un error"));
