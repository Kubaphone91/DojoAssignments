let myNum: number = 5;

let myString: string = "Hello Universe";

let myArr: number[] = [1, 2, 3, 4];
let myArr1: Array<number> = [1, 2, 3, 4];

let myObj: {} = { name: 'Bill'};

let anythingVariable: any = "Hey";
let anythingVariable1: any = 25;

let arrayOne: boolean[] = [true, false, true, true];
let arrayOne1: Array<boolean> = [true, false, true, true];

let arrayTwo: any[] = [1, 'abc', true, 2];
let arrayTwo1: Array<any> = [1, 'abc', true, 2];

let myObj1: {} = { 
    x:5, 
    y:10 
};

class MyNode {
    val: number;
    _priv: number;

    constructor(val: number){
        this.val = val;
    }
    doSomething(){
        this._priv = 10;
    }
}
let myNodeInstance = new MyNode(1);
myNodeInstance.doSomething();
console.log(myNodeInstance.val);
console.log(myNodeInstance._priv);

function myFunction(val: string): void{
    console.log(val);
    return;
}
myFunction("Hello World");

function sendingErrors(message: string): never{
    throw new Error(message);
}
sendingErrors('Error message');