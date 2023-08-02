function copy<T extends {name: string}, U extends keyof T>(value:T, key: U): T{
    value[key]
    return value;
}

console.log(copy({name: "quill", age: 38}, "age"));

class LightDatabase<T extends string | number | boolean>{
    private data: T[] = [];
    add(item: T) {
        this.data.push(item);
    }
    remove(item: T) {
        this.data.splice(this.data.indexOf(item), 1)
    }
    get() {
        return this.data;
    }
}
const stringLightDatabase = new LightDatabase<string>();
stringLightDatabase.add("banana");
stringLightDatabase.add("apple");
stringLightDatabase.add("grape");
stringLightDatabase.remove("grape");
console.log(stringLightDatabase.get());

interface TempDatabase<T> {
    id: number;
    data: T[];
}
const tempDatabase: TempDatabase<number> = {
    id: 3,
    data: [32],
}

interface Todo {
    title: string;
    text: string;
}
type Todoable = Partial<Todo>
type ReadTodo = Readonly<Todo>

const fetchData = new Promise<string>(resolve => {
    setTimeout(() => {
        resolve("hello");
    }, 3000);
})

fetchData.then(data => {
    data.toUpperCase
})
const vegetables: Array<string> = ["tinati", "broccoli", "asparagus"];

interface ResponseData<T extends {message: string} = any> {
    data: T;
    status: number;
}
let tmp2: ResponseData;

interface Vegetables {
    tomato: string;
    pumpukin: string;
}

type MappedTypes = {
    readonly [P in keyof Vegetables]?: string
}

type ConditionalTypes = "tomato" extends string ? number : boolean;
type ConditionalTypesInfer = { tomato: "tomato" } extends { tomato: infer R } ? R : boolean;
type DistributiveContidionalTypes<T> = T extends "tomato" ? number : boolean;
let temp4: DistributiveContidionalTypes<"tomato" | "pumpkkin">