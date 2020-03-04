if (color in colors) {
	console.log(colors);
	smth();
}


function foo() {

}

var boo = foo;
boo();
foo();


var foo = function() {}
foo();
-------

foo();
boo();

var boo = function() {};
function foo() {};


--------
var userName = userName || "Default", 
	email = email, 
	userId, 
	doSmth;
..
email = ...;
doSmth = function() {};
--------
function foo(userName, useEmail = "noEmail") {
	var userName = userName || "Default";
	console.log('User name:' + userName + ', user Email:' + useEmail);
}
foo("Alex", "example@mail.com");
foo("Alex");
foo(null, "example@mail.com");
---------
&& ||

var flag = false;
function foo() {
	...
};

if (flag) {
	foo();
}

flag && foo();
------
var obj = {
	...
	method: function() {}
};

obj.method();

var obj = {
	...
};
if(obj.method) {
	obj.method();
}
obj.method && obj.method();
-------
var f = function() {
	...
};

foo(f);
foo(function() {})
function foo(ff) {

 ff();
}


var f = function(v, i, a) {};
array.map(function(v, i, a) {});
array.map(f);

array = {
	...
	map: function(func) {
		...//value, index, array
		func(value, index, array);
	}
}
---------

Scope = GlobalEnviroment + LocalEnviroment

var a;
let b;
const c;

function foo() {
	var a;
	function boo() {
		var b;
	}
	boo();
}

foo();

-------
var func;

function foo() {
	var a = 5;
	console.log(a);
	function boo() {
		console.log(a + 5);
	}
	func = boo;
}

foo();
func();



var func;

function foo() {
	var a = 0;
	function boo() {
		return ++a;
	}
	func = boo;
}

foo();
func();//1
func();//2
func();//3
func = null;
foo();
func();//1



function foo() {
	return 0;
}

console.log(foo());

function foo() {
	var a = 0;
	var boo = function() {
		console.log(++a);
	}
	return boo;
}

var f = foo();
f();


function foo() {
	var a = 0;
	return function() {
		console.log(++a);
	};
}

var f = foo();
f();



function foo() {
	var a = 0;
	return (function() {
		return ++a;
	})();
}

foo();
------------------------
function foo(a) {
	if (a == 0) {
		foo(1);
	} 
	....
	...
	.....
	console.log(a);
}

foo(0);
-------------------
5! = 1 * 2 * 3 * 4 * 5 = 4! * 5
6! = 1 * 2 * 3 * 4 * 5 * 6 = 5! * 6
7! = 6! * 7


n! = (n-1)! * n
1! = 1

var n = 5;
var result = 1;
for (var i = 1; i < n; i++) {
	result *= i;
}

var array = [1,2,3,4,5];
array.reduce(function(r,v) {
	return r*v;
}, 1);

array.filter().map().reduce();


function fact(n) {
	if (n == 1) return 1;
	return fact(n-1) * n;
}


n = (n-1) + (n-2)
1 = 1
2 = 1
---------
var arr = [1,2,3,4,5,6];
var sum = 0;
for(var i=0; i<array.length; i++) {
	sum += array[i];
}

console.log(array.reduce(function(reducer, value) {
	return reducer + value;
}, 0));

array.reduce(function(reducer, value) {
	if (value % 2 == 0) {
		return reducer + value;
	}
	return reducer;
}, 0);
---------
var obj = {
	a: 10,
	b: 20,
	show: function(result) {
		console.log(result);
	},
	sum: function() {
		var self = this;
		var obj2 = {
			foo: function() {
				console.log(self.a);
			}
		};
		obj2.foo();
		this.show(this.a + this.b);
	}
};

var a = 20;
var obj = {
	a: 10,
	foo: function() {
		console.log(this.a);
		obj2.foo();
	}
}
obj.foo();

var obj2 = {
	a: 10,
	foo: () => {
		console.log(this);
		console.log(this.a);
	}
}
obj2.foo();
-----------------------
class Animal {
	constructor(name) {
		this.name = name;
	}

	say() {
		console.log("My name is " + this.name);
	}
}

var cat = new Animal("Cat");
var dog = new Animal("Dog");

dog.say = function() {
	console.log(this.name);
}

class Bird extends Animal {
	constructor(name) {
		super(name);
	}

	flight() {
		console.log("I canfly");
	}
}

var bird = new Bird("Bird");
----------------------
[1,2,3]
[1,2,[3,4]]


[ 5, 7, 
	[ 4, [2], 8, [1,3], 2 ], 
	[ 9, [] ], 
	1, 8
]




var a = [1,2,[3,[6],4]];


function summa(array) {
	var sum = 0;

	for(var i = 0; i < array.length; i++) {
		if (typeof array[i] ... ) {
			...
		} else {
			sum += array[i];
		}
	}
	return  ...;
}

console.log(summa(a));


array.toString().split(',').reduce((r, i) => (r+ +i), 0);