"use strict";
let hasValue = true;
let count = 10;
let float = 3.14;
let single = 'hello';
let double = "hello";
let back = `hello`;
const person = {
    name: {
        first: "kitazawa",
        last: "yuuho",
    },
    age: 21,
};
console.log(person.age);
const fruits = ["apple", "banana", "grape"];
const book = ["ビジネス", 1500, false];
book[1] = 700;
//19 enum
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.GRANDE
};
coffee.size = CoffeeSize.TALL;
//20 any
let anythong = true;
//21 union
let unionType = 10;
unionType = "string";
let unionTypes = ["union", 100];
//22 leteral
const apple = "apple";
const apple2 = "apple";
let coffeeSizeLeteral = "Short";
const coffee2 = {
    hot: true,
    size: "Short",
};
coffee2.size = "Tall";
const cloth = {
    color: "red",
    size: "small"
};
//24 関数の型
function add(num1, num2) {
    return num1 + num2;
}
add(3, 2);
//25 戻り値にvoidを使う voidとは何も返さない
function sayHello() {
    console.log("hello");
}
console.log(sayHello());
//26 ull undefinded
let tmp;
let tmpNull;
//27 関数型を使って特定の関数を代入する
const anotherAdd = add;
const anotherAdd2 = function (num1, num2) {
    return num1 + num2;
};
/*const doubleNumber: (number: number) => number = function(number: number) => number{
    return number * 2;
};*/
//const doubleNumber = (number: number): number => number * 2;
const doubleNumber = num => num * 2;
//28 callback関数
function doubleAndHundle(num, cb) {
    const doubleNumber = cb(num * 2);
    console.log(doubleNumber);
}
doubleAndHundle(21, doubleNum => {
    return doubleNum;
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
const array = [15, 3, 20, 8, 5];
function checkArray(array, cb) {
    const returnArray = [];
    array.forEach(element => {
        if (cb(element)) {
            returnArray.push(element);
        }
    });
    return returnArray;
}
const arraymod2 = checkArray(array, function (element) {
    if (element % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
});
const arraymod3 = checkArray(array, function (element) {
    if (element % 3 == 0) {
        return true;
    }
    else {
        return false;
    }
});
console.log(arraymod2);
console.log(arraymod3);
//29 unknown
let unknownInput;
unknownInput = "hello";
let text;
if (typeof unknownInput === "string") {
    text = unknownInput;
}
//20 never
function error(message) {
    throw new Error(message);
}
console.log(error("this is un error"));
