var hasValue = true;
var count = 10;
var float = 3.14;
var single = 'hello';
var double = "hello";
var back = "hello";
var person = {
    name: {
        first: "kitazawa",
        last: "yuuho",
    },
    age: 21,
};
console.log(person.age);
var fruits = ["apple", "banana", "grape"];
var book = ["ビジネス", 1500, false];
book[1] = 700;
//19 enum
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.GRANDE
};
coffee.size = CoffeeSize.TALL;
//20 any
var anythong = true;
//21 union
var unionType = 10;
unionType = "string";
var unionTypes = ["union", 100];
//22 leteral
var apple = "apple";
var apple2 = "apple";
var coffeeSizeLeteral = "Short";
var coffee2 = {
    hot: true,
    size: "Short",
};
coffee2.size = "Tall";
var cloth = {
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
var tmp;
var tmpNull;
//27 関数型を使って特定の関数を代入する
var anotherAdd = add;
var anotherAdd2 = function (num1, num2) {
    return num1 + num2;
};
/*const doubleNumber: (number: number) => number = function(number: number) => number{
    return number * 2;
};*/
//const doubleNumber = (number: number): number => number * 2;
var doubleNumber = function (num) { return num * 2; };
//28 callback関数
function doubleAndHundle(num, cb) {
    var doubleNumber = cb(num * 2);
    console.log(doubleNumber);
}
doubleAndHundle(21, function (doubleNum) {
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
var array = [15, 3, 20, 8, 5];
function checkArray(array, cb) {
    var returnArray = [];
    array.forEach(function (element) {
        if (cb(element)) {
            returnArray.push(element);
        }
    });
    return returnArray;
}
var arraymod2 = checkArray(array, function (element) {
    if (element % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
});
var arraymod3 = checkArray(array, function (element) {
    if (element % 3 == 0) {
        return true;
    }
    else {
        return false;
    }
});
console.log(arraymod2);
console.log(arraymod3);
