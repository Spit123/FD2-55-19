var user = ["Alex", "alex@example.com", "admin", 27];



var user = {
	name: "Alex",
	age: 27,
	status: "admin"
	email: "alex@example.com",
};


function fact(n) {
	if (n == 1) {
		return 1;
	}
	return n * fact(n-1);
}

var c = 1;
for (var i = 1; i < n; i++) {
	c *= i;
}



var a = [1, 1];
for(var i = 2 ; i<n; i++) {
	a[i] = a[i-1] + a[i-2];
}

function fib(n) {
	if (n==0) {
		return 0;
	} else if (n==1 || n==2) {
		return 1;
	}
	return fib(n-1) + fib(n-2);
}


class Animal {
	constructor(name, type, flight) {
		this.name = name;
		this.type = type;
		this.flight = flight;
	}

}

var animal = new Animal("dog", "home", false);
animal.name = "dog";



class User {
	constructor() {

	}
}

var user = new User();
user.name = "John Smith";
user.age = 18;
user.role = "user";
...
...
...

var user2 = new User();
user2.name = "John Smith";
user2.age = 19;
user2.role = "user";

var user3 = new User();
user3.name = "Bob";
user3.age = 18;
user3.role = "user";


var userOptions = {
	name: "John Smith",
	age: 18,
	role: "user",
	...
};


class User {
	constructor(options) {
		this.name = options.name;
		this.age = options.age;
		this.role = options.role;
	}
}

var user = new User(userOptions);
user.age = 19;



var a = 100;
var b = 3;

function fin(sum) {
	var a = 100;
	var b = 3;
	return (sum + a) * b;
}

fin(200)->900
fin(200)->1200

var b = 10;
fin(200)->3000




class Studens {
	constructor(students) {
		this.students = students;
	}
}

var students = new Studens(["Alex", "Bob"]);
this.students = [];


class Studens {
	constructor(students) {
		let studentsArray = students;

		this.getStudents = function() {
			return studentsArray;
		};

		this.addStudent = function(newStudent) {};
		this.removeStudent = function(student) {};


		function foo() {
			...
		}

		this.doSmth = function() {
			foo();
		}
	}

	method() {
		this.getStudents();
	}
}
var students = new Studens(["Alex", "Bob"]);
students.doSmth = function() {};



class HashStorage {
	constructor() {
		this.storage = {};
	}

	add(key, value) {
		this.storage[key] = value;
	}
}

var storage = new HashStorage();
storage.add("key", "value");
storage.add("key1", "value1");
storage.add("key2", "value2");
storage.add("key3", "value3");
storage.add("storage", "value3");



var fullname = "John Smith";
var fullnameArray = fullname.split(" ");
var name = fullnameArray[0];
var surname = fullnameArray[1];

var [name, surname] = fullnameArray;

console.log(name);
console.log(surname);

person = {
	name: "",
	age: "",
	email: "",
	ad1: "Minsk,... "
}
var name = person.name;
var age = person.age;


const { name, age, ad1:address } = person;
console.log(address);//"Minsk,... "




var userOptions = {
	name: "John Smith",
	age: 18,
	role: "user",
	...
};


class User {
	constructor({ name, age, role }) {
		this.name = name;
		this.age = age;
		this.role = role;
	}
}

var user = new User(userOptions);
user.age = 19;



function foo(a,b,c,...qqq) {
	console.log(arguments);//1,2,3,4,5,6,7
	console.log(qqq);
};
foo(1,2,3,4,5,6,7);

var person = {
	name: "Alex",
	age: "29",
	email: "",
	ad1: "Minsk,... "
}
const { name, age, ...rest } = person;



var array = [1,2,3];
var array2 = [...array, 4];

var obj = {
	a: 10,
	b: 15
};

var obj2 = {
	...obj,
	b: 20
}

var obj3 = {...obj};
var array2 = [...array];





var obj1 = {
	a: 10,
	b: 20,
	c: 30
};

var obj2 = {
	a: 40,
	d: 20,
	c: 10
};

var obj3 = {
	c: 15,
	f: 10
};

var obj= {...obj1, ...obj2, ...obj3};



var a = 10;
var b = 20;
var c = 30;
var s = "Value a is " + a + " value b is " + b + " value c is " + c;

var st = `Value a is ${a},
 value b is ${b},
 value c is ${c}`;


 this.state.setState("key", 0)


 () => {
 	const [value, setValue] = useState("");

 	setValue("asd");
 }



//script.js
import AnotherStorage from "./classes/HashStorage.js";
import {foo, boo} from "./classes/HashStorage.js";

//import AnotherStorage, {foo, boo} from "./classes/HashStorage.js";

var storage = new AnotherStorage();


//classes/HashStorage.js
export function foo() {}
export function boo() {}
export default class HashStorage {
	constructor() {
		this.storage = {};
	}

	add(key, value) {
		this.storage[key] = value;
	}
}

//server.js
export GET_DATA = "https://api.serve.com/getData";
export SET_DATA = "https://api.serve.com/setData";


import {GET_DATA, SET_DATA} from "./server.js";

.get(GET_DATA)

// <div>
// 	<a></a>
// </div>
div.addEventListener("click", function(e) {
	e.stopPropagation();
	console.log("Div");
});
a.addEventListener("click", function(even) {
	event.stopPropagation();
	console.log("A");
});


input.onBlur = function(event) {}
input.addEventListener("blur", function(even) {
	event.stopPropagation();
	console.log("A");
});