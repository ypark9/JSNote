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

function capitalize(str) {
    var retStrArr = [];
    let strArr = str.split(' ');
    for(var item of strArr){
        retStrArr.push((item[0].toUpperCase() + item.slice(1)));
    }

    return retStrArr.join(' ');
}

class Queue {
    constructor() {
      this.data = [];
    }
  
    add(record) {
      this.data.unshift(record);
    }
  
    remove() {
      return this.data.pop();
    }
  
    weave(sourceOne, sourceTwo) {
      const wQ = new Queue();
      var bigger = sourceOne.data.length >= sourceTwo.data.length ? sourceOne.data.length : sourceTwo.data.length;
      console.log(bigger);
      
      if (sourceOne.length === 0)
        return sourceTwo;
      if (sourceTwo.length === 0)
        return sourceOne;
      for (let i = 0; i < bigger; i++) {
        if (sourceOne.data[i] !== undefined)
          wQ.add(sourceOne[i]);
        if (sourceTwo[i] !== undefined)
          wQ.add(sourceTwo[i]);
      }
      console.log(wQ);
      return wQ;
      }
  
      peek() {
        return this.data[this.data.length- 1];
      }
  }

const q1 = new Queue();
q1.add(1);
q1.add(2);
const q2 = new Queue();
q2.add('hi');
q2.add('there');
console.log(q1);
console.log(q2);


console.log(q1.weave(q1, q2));

console.log(capitalize('capitalize : i am yoonsoo park. lets do this.\n'));

