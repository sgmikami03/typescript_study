class Person {
    constructor(public readonly name: string, private age: number){
    }

    inclementAge(this: Person) {
        this.age++;
    }

    greeting(this: Person) {
        console.log(`hello my name is ${this.name} im ${this.age} years ord`);   
    }
}

const taro = new Person("taro", 21);
taro.inclementAge();
taro.greeting();