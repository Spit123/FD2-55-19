function sum() {
	var summa = 0;
	for(var i=0; i<arguments.length; i++) {
		summa += arguments[i];
	}
	return summa;
}
---
sum(1,2,3,4,5,6,7,8,9);
var array = [1,2,3,4,5];
for(var i=0; i < array.length; i++) {
	array[i] *= 2;
}
---
var obj={name: "Alex", age: 50, friends: ["Nick", "Bob"]};

for (key in obj) {
	console.log(key);
	console.log(obj[key]);
}
---
var colors = {
	blue: "#0000ff",
	red: "#ff0000",
	green: "#00ff00"
};

console.log(colors.green);
---
var values = [55,77,55,66,77];
var used = {};
for ( var i=0; i < values.length; i++ ) {
    var value = values[i];
    if ( value in used ) {
    	used[value] += 1;
    } else {
    	used[value] = 1;
    }  
}

---
var a = ['Opel','BMW','Skoda'];
var n = a.length;
var last = a.pop();//['Opel','BMW']

for(var i = 0; i < n; i++) {
	console.log(a[i]);//i = 2 - a[i]
}

----

var a = [1,2,3];
for(var i=0; i<a.length; i++) {
	console.log(a[i]);
}

a.forEach(function(value, index, array) {
	console.log(value);
});
---
var a = [1,2,3,4];
var flag = true;
for(var i=0; i<a.length; i++) {
	if (a[i] >= 10) {
		flag = false;
		break;
	}
}
if (flag) {
	console.log("yes");
} else {
	console.log("no");
}


var flag = a.every(function(value, index, array) {
	return value < 10;
});
if (flag) {
	console.log("yes");
} else {
	console.log("no");
}
----
var a = [10, 20, 30, 40];
var b = [];
for(var i=0; i<a.length; i++) {
	if (a[i] < 25) {
		b.push(a[i]);
	}
}

var a = [10, 20, 30, 40];
var b = a.filter(function(value, index, array) {
	return value < 25;
});
---

var a = [10, 20, 30, 40];
var b = [];
for(var i=0; i<a.length; i++) {
	b.push(a[i] * 2);
}

var a = [10, 20, 30, 40];
var b = a.map(function(value, index, array) {
	return value * 2;
});


var fruits = [
	{
		name: "Apple",
		cost: 5,
		weight: 100
	},
	{
		name: "Orange",
		cost: 10,
		weight: 200
	},
	{
		name: "Lime",
		cost: 15,
		weight: 150
	}
];

var b = [];
for(var i=0; i<fruits.length; i++) {
	if(fruits[i].cost <= 10) {
		b.push(a[i].name);
	}
}

b = fruits.filter(function(value, index, array) {
	return (value.cost <= 10 && value.weight < 200);
}).map(function(value, index, array) {
	return value.name;
});