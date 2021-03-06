# NodeJS

Banuprakash C

Full Stack Architect,

Co-founder Lucida Technologies Pvt Ltd.,

Corporate Trainer,

Email: banuprakashc@yahoo.co.in

https://www.linkedin.com/in/banu-prakash-50416019/

https://github.com/BanuPrakash/node_rakuten

Softwares Required:
1) NodeJS Latest LTS Version: 16.13.0
https://nodejs.org/en/download/

2) Visual Studio Code:
https://code.visualstudio.com/download

3) Docker Desktop
https://www.docker.com/products/docker-desktop

4) Chrome Browser

----------------------------------------


Day 1


JavaScript ==> Scripting language, loosely typed

var a = 10; // number

a++;

a = "Test"; // string

a.toUpperCase();

-------------

file.js ==> JavaScript engine ==> bind to C++ code

JavaScript engine:
1) V8 ==> NodeJS and Chrome Browser ==> Google
2) SpiderMonkey ==> Firefox / Acrobat Professional
3) NashHorn ==> Java ==> Oracle
4) Chakra / Continum ==> MS


first.js

var g = 100;

function doTask() {
	var a = 10;
	if( g > a ) {
		var b = 20;
		c = 30;
	}
	console.log(g, a, b, c);
}

doTask();
console.log(g, a, b, c);


===================

function add(x, y) {
	return
		x + y;
}

var result = add(4,5); // ?

AST ==> semi-colon insertions

function add(x, y) {
	return; 
		x + y; // not-reachable
}

=========================================

ECMA2015 ==> ES 6 version

Features:

1) Block level scope [ let and const]

const PI = 3.14159;

let g = 100;

function doTask() {
	let a = 10;
	if( g > a ) {
		let b = 20; // block level scope
		c = 30;
	}
	console.log(g, a, b, c); // b is not accessable
}

doTask();
console.log(g, a, b, c);


2) Arrow function

let add = (x,y) => x + y;

function add(x, y) {
	return x + y;
}


3) Destructruing and spread operators [ ... ]

3.1) Arrays

var colors = ["red", "green", "blue", "orange"];

var r = colors[0];
var g = colors[1];

...

ES 6 way

var [r, g , ...others] = colors;

r is "red"

others ==> [ "blue", "orange" ]


3.2) Object

Creating objects:
1) constructor pattern

function Product(name, price) {
	this.name = name;
	this.price = price;
} 

Product.prototype.getName = function() {
	return this.name;
}



Product.prototype.setPrice = function(amt) {
	this.price = amt;
}


let p1 = new Product("iPhone", 130000.00);
let p2 = new Product("Sony", 120000.00);



p1.getName(); // 

p1.setPrice(89000);


2) JSON object ==> JavaScript Object Notation ==> Singleton

var p = {
	"id": 1,
	"name": "iPhone",
	"price" : 65000.00
};


3.2) Destructring object

var p = {
	"id": 1,
	"name": "iPhone",
	"price" : 65000.00
}



old way:

console.log(p.name, p.price);

ES 6 way:

var {name, price} = p;

console.log(name, price);

=============================

4) Clone


var p = {
	"id": 1,
	"name": "iPhone",
	"price" : 65000.00
};

var ref = p; // reference

ref.price =9999;

p.price; // 9999

Clone:

var cpy = {...p}; // clone


---

var data = [6,2,211];

var cpy = [...data]; // clone

===================

5) Promise API

Synchronous and Asynchronous functions

Synchronous functions:

let result = doTask();
console.log(result); // this line of code waits until doTask() returns a value


Asynchronous functions:


doTask().then( result => {
	console.log(result);
},
rej => {
	console.log("Rejected ", rej)
});

console.log("End!!!");


===

function doTask() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve("All Done!!!");
        }, 2000);
    });
}

doTask().then( res => {
    console.log("Success ", res);
},
rej => {
  console.log("Error :" , rej);
});


console.log("End!!!")

=========

NodeJS

node.js is a platform built on V8 engine for easily building fast, scalable network applications, platform for browserify of client side application

Node.js is event-driven, non-blocking I/O model

2009 --> Ray Daul

================

Node.JS internals

Event Loop psuedocode:

myFile.js

pendingTimers = [];

pendingOSTask = [];

pendingOperations = []; // callbacks like close of stream

function shouldContinue() {
	return pendingTimers.length || pendingOSTask.length || pendingOSTask.length;
}


while(shouldContinue()) {
	1) look at pending timers, setTimeout, setInterval

	2) Node looks for pendingOSTask ==> callbacks

	3) Pause exection

	4) handle close events
}

===================


console.log("Hello!!!");

function doTask() {
	setInterval(function timed() {
		console.log("timed!!!")
	}, 100);
}

$(".btn").click(function clicked() {
 console.log("You clicked!!!");
});

doTask();

console.log("Bye!!!");


===============

Node modules: fs, http, repl, crypto, path, ...

=====

Plain Vanilla module system
IIFE
var ShopModule = (
	var data;

	function doTask() {

	}

	return {
		doTask: doTask
	}
)();


var PersonModule = (
	var data;
	function doTask() {

	}

	function doAnotherTask() {

	}

	return {
		doTask: doTask,
		doAnotherTask: doAnotherTask
	}
)();

 PersonModule.doTask();
 PersonModule.data; // not visible

 ShoModule.doTask();


=========

ES 6 Module System


Person.js

export class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	getName() {
		return this.name;
	}
}


other.js

import {Person} from './Person';

let p = new Person()


===========

CommonJS module System ==> used by default in Node.js


lib.js
function add() {}
function sub() {}
module.exports = {
	add,sub
}

other.js

let lib = require('./lib');

console.log(lib.add());

================




NodeJS memory

1) Whenever an object is created it is placed in New Generation [ S1 / S2]

GC ==> Garbage Collectors ==> release memory
GC is of 2 types [ Minor GC ==> Scavenger] and [ Major GC ==> Full GC ==> MarkSweepCompact]

if an object survives 2 cycls of minor GC will be moved to Old Generation

Full GC checks only Old Generation

Reason why pointers are not allowed in Java, C#, JavaScript


node --min_semi_space_size=1024 --max_semi_space_size=2048 a.js
node --intial_old_space_size=1024 --max_old_space_size=2048  a.js

=================================================

