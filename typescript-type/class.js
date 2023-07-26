var Person = /** @class */ (function () {
    function Person(initName, initAge) {
        this.name = initName;
        this.age = initAge;
    }
    Person.prototype.inclementAge = function () {
        this.age++;
    };
    Person.prototype.greeting = function () {
        console.log("hello my name is ".concat(this.name, " im ").concat(this.age, " years ord"));
    };
    return Person;
}());
var taro = new Person("taro", 21);
taro.inclementAge();
taro.greeting();
