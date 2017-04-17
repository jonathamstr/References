var greeting = require("./greet.js");
var translate = require("./translate");


greeting();

translate.english();
translate.spanish();

function Person(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.greet = function(){
    console.log(this.firstName + " " + this.lastName);
};

var jona = new Person("Jonathan","Aguirre");

jona.greet();

//pass by /// <reference path="" />
function changeObj(d){
    d.prop1 = function() {};
    d.prop2 = {};
}

var c = {};
c.prop1 = {};
changeObj(c);
console.log(c);