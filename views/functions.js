function cube(n) {
	return n*n*n;
}

var cube = function(n){
	return n*n*n;
}

alert(cube(2));

function foo1(a){
	a=100;
	console.log("Inside the fucntion a is : "+ a);
}

function foo2(myObject){
	myObject.fname="John";
}

function foo3(myobject){
	myObject = {fname:"Jane",lname:"Dizon",age:25};
}

function student(fname,lname,age){
	this.fname = fname;
	this.lname = lname;
	this.age = age;


	this.changeName = changeName;
	this.updateAge = updateAge;
}

function changeName(newFirstName, newLastName){this.fname= newFirstName;this.lname= newLastName;}
function updateAge(newAge){this.age= newAge;}