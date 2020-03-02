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
class Node {
  constructor(data) {
      this.data = data;
      this.children = [];
  }

  add(data) {
      this.children.push(new Node(data));
  }

  remove(data) {
      this.children = this.children.filter((node) => {
          return node.data !== data;
      });
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF() {
    let arr = [];
    arr.push(this.root);
    while (arr.length !== 0) {
      let node = arr.shift();
      console.log(node.data);

      for (let child of node.children) {
        arr.push(child);
      }
    }
  }

  traverseBF(fn) {
    let arr = [];
    arr.push(this.root);
    while (arr.length !== 0) {
      let node = arr.shift();
      for (let child of node.children) {
        arr.push(child);
      }
      fn(node);
    }
  }
}

let oTree = new Tree();
oTree.root = new Node('a');

oTree.root.children.push(new Node('b'));
oTree.root.children.push(new Node('c'));
oTree.root.children.push(new Node('d'));

oTree.root.children[0].children.push(new Node('1'));
oTree.root.children[0].children.push(new Node('2'));
oTree.root.children[0].children.push(new Node('3'));

oTree.root.children[1].children.push(new Node('!!'));
oTree.root.children[2].children.push(new Node('___'));


oTree.traverseBF(function(node){
  node.data +='1';
  console.log(node.data);
});


