//1
function outerFunction() {
    let outerVariable = 'outside!';
    
    function innerFunction() {
        console.log(outerVariable);
    }
    
    return innerFunction;
}

const myFunction = outerFunction();
myFunction(); 

//2

function createFunctions() {
    let functions = [];
    
    for (var i = 0; i < 3; i++) {
        functions.push(function() {
            console.log(i);
        });
    }
    
    return functions;
}

const funcs = createFunctions();
funcs[0]();
funcs[1]();
funcs[2]();


function createFunctionsFixed() {
    let functions = [];
    
    for (let i = 0; i < 3; i++) {
        functions.push(function() {
            console.log(i);
        });
    }
    
    return functions;
}

const funcsFixed = createFunctionsFixed();
funcsFixed[0]();
funcsFixed[1]();
funcsFixed[2]();

//3

function createCounter() {
    let count = 0;
    
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        }
    };
}

const counter = createCounter();
console.log(counter.increment()); 
console.log(counter.increment()); 
console.log(counter.decrement()); 

//4

function createAdder(x) {
    return function(y) {
        return x + y;
    };
}

const add5 = createAdder(5);
console.log(add5(2)); 

const add10 = createAdder(10);
console.log(add10(2)); 



