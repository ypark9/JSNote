// 58. prototype
// function has -Name -Code 
// and -Prototype but (prototype of OBJECT, not function start from empty)
function Person58(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

Person58.prototype.getFullname = function() {
    return this.firstname + ' ' + this.lastname;
}

var Yoon58 = new Person58('Yoon', 'Park');
console.log(Yoon58);
console.log(Yoon58.getFullname());

//60. Function constructors
var a = new Number(3);
console.log(a);
// a == Number { 3 } it is not just "number" but an Object.
console.log( String("Yoon").length);

//60. Build-in Function Constructors
String.prototype.isLengthGreaterThan = function(limit){
    return this.length > limit;
}
console.log("Yoonsoo".isLengthGreaterThan(3));

//Number.prototype.isPositive --> 
//this is not working. since number is changed to object.


