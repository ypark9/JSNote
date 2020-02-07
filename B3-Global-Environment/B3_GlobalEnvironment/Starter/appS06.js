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


//62. Dont use var .. in for loop for Array
//Since arry is also an Object in JS.
var arr62 = ['Yoon', 'Lacy', 'Piper'];
for(var prop in arr62)
{
    console.log(prop + ' :' + arr62[prop]);
    
}


//63. Object inheritance. 
var Person63 =  {
    firstname : 'default',
    lastname : 'default',
    getFullname : function(){
      return this.firstname + ' '+ this.lastname;   
    }
}
var john = Object.create(Person63);
john.firstname = "John";
john.lastname = 'Doe'
console.log(john.getFullname());

//Polyfill - code that adds a feature which the engine may lack.
if(!Object.create){
    Object.create = function (o){
        if(arguments.length > 1 ){
            throw new Error('Object Create implementation '+ 
            'only accepts one parameter.');
        }
    function F(){};
    F.prototype = o;
    return new F();
    }
}

