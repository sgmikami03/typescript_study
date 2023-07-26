var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.isAadult = function (age) {
        if (age > 17)
            return true;
        return false;
    };
    Person.prototype.inclementAge = function () {
        this.age++;
    };
    Person.prototype.greeting = function () {
        console.log("hello my name is ".concat(this.name, " im ").concat(this.age, " years ord"));
        this.explainJob();
    };
    Person.specis = "homo sapiens";
    return Person;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, age, _subject) {
        var _this = _super.call(this, name, age) || this;
        _this._subject = _subject;
        return _this;
    }
    Teacher.prototype.explainJob = function () {
        console.log("hello im teacher!!");
    };
    Object.defineProperty(Teacher.prototype, "subject", {
        get: function () {
            return this._subject;
        },
        set: function (vaule) {
            if (!vaule) {
                throw new Error("there is no subject.");
            }
            this._subject = vaule;
        },
        enumerable: false,
        configurable: true
    });
    Teacher.getInstance = function () {
        if (Teacher.instance)
            return Teacher.instance;
        Teacher.instance = new Teacher("taro", 38, "math");
        return Teacher.instance;
    };
    return Teacher;
}(Person));
var teacher = Teacher.getInstance();
var teacher2 = Teacher.getInstance();
console.log(teacher);
console.log(teacher2);
