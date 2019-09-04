"use strict";
var myName = "test";
myName = "My Name";
var age;
age = 23;
//array
var hobbies = ["Cooking", "Sports"];
hobbies = [100];
//tuples
var address = ["Gagarin", 99];
console.log(typeof address);
//enums
var Color;
(function (Color) {
    Color["Gray"] = "gray";
    Color["Green"] = "green";
    Color["Blue"] = "blue";
})(Color || (Color = {}));
var myColor = Color.Blue;
console.log(myColor);
//any
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
//functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
var returnMyAge = function () {
    return age;
};
console.log(returnMyAge());
var multiply = function (value1, value2) {
    return value1 * value2;
};
console.log(multiply(10, 5));
//function types
var myMultiply;
// myMultiply = returnMyName;
// console.log(myMultiply());
myMultiply = multiply;
console.log(myMultiply(12, 23));
//objects
var userData = {
    name: "Max",
    age: 27
};
//complex object
var complex = {
    data: [100, 220, 22],
    output: function (all) {
        return this.data;
    }
};
console.log("complex", complex);
var complex2 = {
    data: [11, 22, 33],
    output: function (all) {
        return this.data;
    }
};
console.log("complex2", complex2.output(true));
//union types
var myReallyAge = 27;
myReallyAge = "27";
console.log("myReallyAge", typeof myReallyAge);
//check types
var finalValue = "A string";
if (typeof finalValue === "string") {
    console.log("Final value is a string");
}
//never
function neverReturns() {
    throw new Error('An Error!');
}
;
//Nullable types
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
console.log(canBeNull, canAlsoBeNull);
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
