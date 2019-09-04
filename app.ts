let myName = "test";
myName = "My Name";

let age: number;
age = 23;

//array
let hobbies : any [] = ["Cooking", "Sports"];
hobbies = [100];

//tuples
let address: [string, number] = ["Gagarin", 99];
console.log(typeof address)

//enums
enum Color {
  Gray = "gray",
  Green = "green",
  Blue = "blue"
}
let myColor: Color = Color.Blue;
console.log(myColor)

//any
let car: any = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);

//functions
function returnMyName() : string {
  return myName;
}
console.log(returnMyName());

const returnMyAge = (): number => {
  return age;
}
console.log(returnMyAge());

const multiply = (value1: number, value2: number): number => {
  return value1* value2;
}
console.log(multiply(10, 5))

//function types
let myMultiply: (val1: number, val2: number) => number;
// myMultiply = returnMyName;
// console.log(myMultiply());
myMultiply = multiply;
console.log(myMultiply(12, 23));

//objects
let userData: { name: string, age: number } = {
  name: "Max",
  age: 27
};

//complex object
let complex: { data: number[], output: (all: boolean) => number[] } = {
  data: [100, 220, 22],
  output: function (all: boolean): number[] {
    return this.data;
  }
}
console.log("complex", complex);

//type alias
type Complex = { data: number[], output: (all: boolean) => number[] };

let complex2: Complex = {
  data: [11, 22, 33],
  output: function(all: boolean): number[] {
    return this.data
  }
}
console.log("complex2", complex2.output(true));

//union types
let myReallyAge: number | string = 27;
myReallyAge = "27";
console.log("myReallyAge", typeof myReallyAge);

//check types
let finalValue = "A string";
if(typeof finalValue === "string"){
  console.log("Final value is a string");
}

//never
function neverReturns(): never {
  throw new Error('An Error!');
};

//Nullable types
let canBeNull: number | null  = 12;
canBeNull = null;
let canAlsoBeNull;
console.log(canBeNull, canAlsoBeNull);

//exercise

type bankAcc = { money: number, deposit: (arg: number) => void }
let bankAccount : bankAcc = {
  money: 2000,
  deposit(value) {
    this.money += value;
  }
}

let myself: { name: string, bankAccount: bankAcc, hobbies: string [] } = {
  name: "Max",
  bankAccount: bankAccount,
  hobbies: ["Sports", "Cooking"]
}

myself.bankAccount.deposit(3000);
console.log(myself)