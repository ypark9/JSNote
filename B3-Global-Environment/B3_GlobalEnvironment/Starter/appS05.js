// All the code is wrapped in the IIFE
 (dothings = function () {
    var firstName = "Yoon";
    function init () {
        doStuff (firstName);
        // code to start the application
    }
    function doStuff () {
        // Do stuff here
        console.log("d0 stuff is here.");
        
    }
    function doMoreStuff () {
        // Do more stuff here
    }
    // Start the application
    init ();
}) ();

function palindrom(str){
    let revStr = (str.split('')).reverse().join('');
    var isPalin = false;

    if(revStr === str)
    isPalin = true;
    
    return isPalin;
}

function reverseInt(n) {
    var isNeg = false;
    if(parseInt(n) < 0){
        isNeg = true;
    }
    let num = parseInt(n.toString().split('').reverse().join(''));
    return isNeg? -1 * num : num;
}

function fib(n) {
    if(n === 0)
        return 0;
    if(n === 1 || n === 2)
        return 1;
    else
        return fib(n-2) + fib(n -1);
}

function anagrams(stringA, stringB) {
    return stringA.split('').reverse().join('') === stringB;
}

console.log(anagrams('abba', 'baab'));

console.log(fib(3));
console.log(reverseInt(-500));
console.log("palin " + palindrom('agggddgga'));

dothings();