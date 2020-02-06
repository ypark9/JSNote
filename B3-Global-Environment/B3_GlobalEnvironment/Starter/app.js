//Function is Object too!

//44. IIFE
//using an immediately invoked fuction Expression (IIFE)
var greetfunc = function (name){
    console.log('Hello ' + name)
}('Yoon');
greetfunc;

(
    function(name){
        console.log('44 Inside IIFE : Hello ' + name);
    }('Yoon')
);

//Always try to put curley brace after the declartion of return
// because of auto ; insertion.
function addressReturn(){
    return {
        address : "132 Main St."
    }
}

//45. IIFE safe code
// mutate global var
var greeting45 = "Hola";
(
    function (global, name) {
        var greeting45 = 'Hello';
        global.greeting45 = greeting45;
        console.log('45 Inside IIFE : ' + global.greeting45 +" " + name);
    }(window, 'Yoon')
); 

//46. Understanding Closures.
function greet(whattosay) {
    return function(name){
        console.log('46 Closure: ' + whattosay + ' ' + name);
    }
}
var sayHi = greet('Hello');
sayHi('Yoon');

//47. Understanding Closures. (2)
function buildFunctions() {
    var arr47 = [];
    for (var i = 0; i < 3; i++){
        arr47.push(
            function() {
                console.log(i);
            }
        );
    }

    return arr47;
}
// What is the result gonna be? :)
var fs = buildFunctions();
fs[0]();
fs[1]();
fs[2]();

//How to fix this? to output 0, 1, 2
function buildFunctions1() {
    var arr47 = [];
    for (var i = 0; i < 3; i++){
        arr47.push(
            (function(j){
                return function() {
                    console.log(j);
                }
            }(i))
            
        );
    }

    return arr47;
}

var fs1 = buildFunctions1();
fs1[0]();
fs1[1]();
fs1[2]();

console.log(fs1);

//48. Functional Factory
function makeGreeting(language) {
    return function (firstname, lastname) {

        if (language === 'en') {
            console.log('49. Hello ' + firstname + ' ' + lastname);
        }
        if (language === 'es') {
            console.log('49. Hola ' + firstname + ' ' + lastname);
        }
    }
}
var greetingSpanish = makeGreeting('es');
var greetingEnglish = makeGreeting('en');

greetingEnglish('Yoonsoo', 'Park');
greetingSpanish('Yoonsoo', 'Park');


//49. Closure and Callback
// Callback: A function you give to anoterh function, to be 
// run when the other function is finished.
function sayHelloLater(){
    var greeting = 'Hello!';
    setTimeout(() => {
        console.log(greeting);
    }, 3000);
}

sayHelloLater();