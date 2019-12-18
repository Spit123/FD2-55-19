var form = document.getElement()


<input type="" class="validate" />

<tr>
	<td>Label</td>
	<td><input /></td>
	<td><div class="error"></div></td>
</tr>


input.onBlur = function() {
	let td = this.parentNode; //input
	let tdError = td.nextSibling;//1


	let tr = td.parentNode;
	tr.getElementsByClassName('error')[0]
}


mouseDown = function(e) {
	selectedElement = e.target;
}

mouseMove = function() {
	if (selectedElement) {

	}
}

mouseUp = function(e) {
	selectedElement = null;
}


function someFn() {}
element.addEventListener("click", someFn);
element.removeEventListener("click", someFn);



var a = 1;
function foo() {
	console.log(a);// undefined
	var a = 2;
	console.log(a);// 2
}

foo();
console.log(a);// 1


var a = [1];
function foo(a) {
	console.log(a);//[1]
	a.push(2);
	console.log(a.length);//2
}

foo(a);
console.log(a.length);//2



function foo() {
	var a = 0;
	return function() {
		return ++a;
	};
}

var boo = foo();
boo();


String
split()
toLowwerCase(), toUpperCase()
substr()
slice()
splice()
trim()
search()
length


Array
forEach
every
some
reduce
filter
map
push()
shift()
pop()
unshift()



var obj = {
	a: 10,
	b: 20,
	foo: function(x, y) {
		console.log(this.a + x);
	}
}

var obj2 = {
	a: 20
};

obj.foo(10);

obj2.foo = obj.foo;//


//call, apply, bind
obj.foo.call(obj2, 10, 20);
obj.foo.apply(obj2, [10, 20]);

var boo = obj.foo.bind(obj2);
boo(10,20);




function NewClass() {
	var a = 10;
	this.newMethod = function() {
		console.log(a);
	}
}

var obj = new NewClass();
obj.newMethod();


function NewClass() {
	var a = 10;
	this.getA = function() {
		return a;
	}
}

NewClass.prototype.newMethod = function() {
	console.log(this.getA());
}