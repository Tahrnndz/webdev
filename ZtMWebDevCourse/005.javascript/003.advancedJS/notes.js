// ternary operator
    condition ? expression1 : expression2;

    function isUserValid(bool) {
        return bool;
    }

    var answer =isUserValid(true) ? You May Enter : Access Denied


// switch Statement:

    function moveCommand(direction) {
        var whatHappens;
        switch (direction) {
            case "forward" : 
                whatHappens = "You encounter a monster";
                break;
        }
    }

    ES5 & ES6: 

    let + const: 

//destructuring 

    const obj = {
        player: 'bobby',
        experience: 100,
        wizardLevel: false
    }

    const player = obj.player;
    const experience = obj.experience;
    let wizardLevel = obj.wizardLevel;

    //OR:
    const {player, experience} = obj;
    let {wizardLevel} = obj;

    const name = 'john snow';

    const obj = {
        [name]: 'hello',
        ['ray' + 'smith']: 'hii'
    }
//template strings
    const name = "sally"
    const age = 34
    const pet = 'horse'
    const greetingBest = `Helloe ${name} you seem to be`

//arrow functions
    function add(a, b) {
        return a + b;
    }
    const add = (a, b) => a + b;
    //or 
    const add = (a, b) => {
        return a + b;
    }

//advanced functions
function first() {
    var greet = 'Hi';
    function second () {
        alert(greet);
    }
    return second;
}
//Arrow transformation
const first = () => {
    const greet = 'Hi';
    const second = () => alert(greet);
    return second;
}

const newFunc = first()
newFunc();

//Closures
    //A function ran & executed.  Its never going to run again
    // but its going to remember that there are references
    // to those variables so that child scope always has access to the parent scope.
    // the parent scope does not have access to child variables
//Currying:
    const multiply = (a, b) => a * b;

    const curriedMultiply = (a) = (b) => a * b;
    curreidmultiply(30)
    // process of converting a funtion that take multiple args into one at atime
    //extensible
    const multiplyBy5 = curriedMultiply(5);

//Compose: Act of putting 2 fns 
    const compose =(f, g) => (a) => f(g(a));

    const sum (num) => num +1;

    compose(sum, sum)(5);

//avoiding side effects & fnl purity:
    

//Advanced Arrays

const array [1,2,3,4,5]

//for each
const double = [];
const newArray = array.forEach((num) => {
    double.push(num * 2);
})

// Map, Filter, Reduce:  !! Very Important to Learn

//Map
    const mapArray = array.map((num) => {
        return num * 2
    })
// Use map over foreach, map expects to return an element whereas foreach doesn't
// Map always has a return element

// filter

    const filterArray = array.filter(num => {
        return num > 5
    })
    // Need to add a return with any comparision expression

// Reduce: can do both map and filter

const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num

}, 0);

// Reference Type
    var object1 = { value: 10};
    var object2 = object1
    var object3 = {value: 10}
    // Objects are reference types in JavaScript
    // Reference types are non primitive types & created 
    // by the programmer, not by JavaScript. 
    // Similar to pointers in C

// Context
    // Does != scope
    // Tells where we are within object
    // "this" -> special word in JS
    // "this" is the window object this === window => True
    // what is to the left of the "."

    const object4 = {
        a: function() {
            console.log(this)
        }
    }  // object for is the object in this case now, 
        // not window frame
// Instantiation
    class Player {
        constructor(name, type) {
            this.name = name;
            this.type = type;
        }
        introduce() {
            console.log(`Hi i am $(this.name), I'm a $(this.type)`)
        }
    }

    class Wizard extends Player{
        constructor(name, type) {
            super(name, type)
        }
        play() {
            console.log(`WEEEEEE I'm a $(this.type)`);
        }
    }

    const wizard1 = new Wizard('Shelly', 'Healer');
    const wizard2 = new Wizard('Shawn', 'Dark Magic');

    // Classical Inheritance:
    // For Reference We use instantiaion now

    // var Player = function(name, type) {
    //     this.name = name;
    //     this.type = type;
    // }

    // Player.prototype.introduce = function() {
    //     console.log(`Hi i am $(this.name), I'm a $(this.type)`)
    // }

    // var wizard1 = new Player("Shelly", "healer");
    // var wizard2 = new Player("Shawn", "dark magic");

    // wizard1.play = function () {
    //     console.log(`WEEEEEE I'm a $(this.type)`);
    // }
    // wizard2.play = function () {
    //     console.log(`WEEEEEE I'm a $(this.type)`);
    // }


// Passed By Ref & Passed by Value: 
    // Primitive Types are immutable => pass by value
    // Objects are passed by reference
    // Pass by value copies the value and makes them different
    // But pass by reference only copies the refernce to the memory address

    // You can actually copy the values of arrays and objects using these methods
    let obj = {a: 'a', b: 'b'};
    let clone = Object.assign({}, obj);

    // or use spread operator
    let clone2 = {...obj};

    //for array:
    let list = [0,1,2,3,4];
    let newList = [].concat(list);

    //if we have nested objects, we have to take a more thorough path
    //Each object gets passed by reference:  since there are two objects, you pass by reference
    // and only clone the first layer; need to deep clone

    let superClone = JSON.parse(JSON.stringify(obj));
    // be careful of deep clones, you could have perf implications

// Type Coercion:
    1 == '1' // True
    // Do all languages have type coercion? Yes they do
    // Type coerciion happens when you use the double equals
    // Three equals doesn't use type coercion
    // Recommended to not use double equals because it is not predictibale
    // https://dorey.github.io/JavaScript-Equality-Table/
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
    // Object.is (-0 & +0) => good for edge cases like NaN

// ES7: 2016
    // includes methods
        'Hello'.includes('0'); // Returns ture
        const pets = ['cats', 'dogs', 'bat']
        pets.includes('dog'); // Returns True
    // exponential operator:
        const square = (x) => x**2;
        square(2) // returns 4
        const cube = (x) => x**3;
        cube(4) // returns 64

// ES8 2017
    //.padStart
        'Turtle'.padStart(10); // adds spaces for a total of 10 spaces
        'Turtle'.padEnd(10);
    // Ending Comma is ok
        const fun = (a,b,c,d,) => {
            console.log(a);
        }
        
        fun(1,2,3,4,)
    // Object iteration, can use map, filter and reduce on objects now!
        let obj = {
            username0: 'santa',
            username1: 'rudolph',
            username2: 'grinch'
        }
        //used to be able to use
        Object.keys(obj).forEach((key, index) => {
            console.log(key, obj[key]);
        })

        Object.values(obj).forEach(value => {
            console.log(value);
        })

        Object.entries(obj).forEach(value => {
            console.log(value);
        })

        Object.entries(obj).map(value=> {
            return value[1] + value[0].replace('username', '');
        })

// ES10 2019
    // .flat()
        const array = [1,2,3,4,5];
        array.flat() // returned a new same array;

        const array = [1,[2,3],[4,5]];
        array.flat() // flattens array to remove nesting

        const array = [1,2,[3,4,[5]]];
        array.flat() // flattens array to first level of nexting
        
        const array = [1,2,[3,4,[5]]];
        array.flat(2) // can pass how many layers to flatten

        const entries = ['bob', 'sally', , , , 'cindy']
        entries.flat()// can clean up data
    // .flatMap() allows us to use flat function with map function
        const jurrasicParkChaos = jurrasicPark.flatMap(creature => creature + 'trex')
    
    // .trim methods
        userEmail = '         eddy@gmail.com'
        userEmail2= 'jon@gmail.com          '
        userEmail.trimStart() // or
        userEmail2.trimEnd()
    
    // from entries: 
        userProfiles = [['commanderTom', 23], ['derekZ', 40], ['hansel', 18]]
        const obj = Object.fromEntries(userProfiles)
        // can change back 
        Object.entries(obj)

    // try catch block
    try {
        true + 'hi' + bob
    } catch (error) {
        console.log('you messed up' + error);
    }

// Advanced Loops
    const basket = ['apples', 'oranges', 'grapes'];
    const detailedBasket = {
        apples: 5,
        oranges: 10,
        grapes: 1000
    }
    //1
    for (let i = 0; i < basket.length; i++) {
        console.log(basket[i]);
    }
    //2
    basket.forEach(item => {
        console.log((item);
    })
    // iterating => able to go one by one through an item and look at items
    // can be done on iterables (arrays, strings)
    // for of new in es6
    for (item of basket) {
        console.log(item);
    }
    // for in works with objects, allows us to see object properties
    // not iterating, bc object, we are enumerating instead
    // bc props of objects are enumerable
    // can use this on arrays bc arrays are objects that have num keys
    for (item in detailedBasket) {
        console.log(item)
    }
    

// ES2020 Pt 1
    // BigInt
        //New Type
        // add letter n after number
        type of 1n
        // https://stackoverflow.com/questions/307179/what-is-javascripts-highest-integer-value-that-a-number-can-go-to-without-losin
        // limit to how much we can store in memory, bigInt solving the problem
        MAX_SAFE_INTEGER // need to have n for both numbers if using expression
    // Nullish Coalescing Operator ??
    // can be used instead of the Or operator
        let andrei_pokemon = {
            pickachu: {
                species: 'Mouse',
                height: 0.8,
                weight: 30,
                power: ''
            }
        }
        let power = andrei_pokemon?.pikachu?.power || 'no power'  //evals to no power
        // can use nullish cov
        let power = andrei_pokemon?.pikachu?.power ?? 'no power'  //evals to no power
    // Optional Chaining Operator ?.
        let will_pokemon = {
            pikachu: {
                species: 'Mouse',
                height: 0.4,
                weight: 6
            }
        }
        let andrei_pokemon = {
            raichu: {
                species: 'Mouse',
                height: 0.8,
                weight: 30
            }
        }
        let weight = will_pokemon.pikachu.weight
        console.log(weight); //get weight of 6

        let weight2 = andrei_pokemon.pikachu.weight
        console.log(weight); //have issues bc no pickachu in obj

        // used to solve this problem by: very annoying
        if (andrei_pokemon.pikachu && andrei_pokemon.pikachu.weight) {
            let weight2 = andrei_pokemon.pikachu.weight;
        } else {
            let weight2 = undefined;
            console.log(weight2);
        }

        // optional chaining solution:
        let weight3 = andrei_pokemon?.pikachu?.weight;
        console.log(weight); // get undefined and checks, if not there assigns 
        //as undefined  ? checks properties
    // Promise: allSettled
        // tbd
    // globalThis
        // tbd
// Debugging
    // 
    const flattened = [[0,1], [2,3], [4,5]].reduce(
        (accumulator,array) => {
            console.log('array', array);
            console.log('accum', accumulator);
            return accumulator.concat(array)
        }, []);
    // can use debugger instead of console.log
    const flattened = [[0,1], [2,3], [4,5]].reduce(
        (accumulator,array) => {
            debugger;
            return accumulator.concat(array)
        }, []);
    // use console and debugger to fix issues; 
// How JavaScript Works
    // Don't need to know this stuff, but good to have
    // Programs allocate memore, parse & execute scripts
    // JavaScript engine has a mem heap and call stack
    const a = 1; // allocated memory here
    // memory leak:
        // have limited amount of memory, 
        // happen when you have unused memory just laying around
        // global variables are bad.  Variables aren't being used
    // Call Stack:
        console.log('1');
        console.log('2');
        console.log('3');
        // adds each to call stack then runs then removes 
        // and moves on to next statement for basic ex
        const one = () => {
            const two = () => {
                console.log('4');
            }
            two();
        }

        // call stack for above: execute from top to bottom then
        // remove 
        console.log('4')
        two()
        one()
    // single threaded = one call stack (First in last out)
    // other languages has multi stacks (multi threaded)
    // running code on one stack is less complex
    // This is synchronous programming, can't start til the other 
    // finishes.  

    // stack overflow:
        function foo(){
            foo()
        }
        foo()
        // ^ recursion without a way out can cause stack overflow
        
    // non - blocking: asynchronous tasks
    console.log('1');
    setTimeout(() =>{
        console.log('2');
    }, 2000)
    console.log('3');
        // ^ Executes '1', '3', then '2'
    // JavaScript runtime environment 
    // have web api's callback ques and event loops
    
    // call stack ex
    console.log('3');
    console.log('1');
    // web api  // starts timer of 2 secs
    setTimeout()
    
    // callback que

    // event loop
    // setTimeout(), makes it go through the runtime envr;
    // Recap: 
        // sync makes UX poor
        // sync like calling professor
        // Async is like sending a text to professor
        // no waiting

    Element.addEventListener('click', () => {
        console.log('click')
    })
    // console.log( puts in callback queue;
    // JavaScript is single threaded language that can be
    // that can be non blocking, it can be async through call
    // back functions throug call back que and event loop

// Modules 
    // Climbing the mental models of javascript
                    // WebPack2 + ES6 => export & import now
                    // WebPack bundles JS files and determines the dependency tree
                    // Will be using this syntax now in react
                    // Webpack has a config file that sets all this up for us
                // browserify => used common js syntax to create one file bundle.js
                // better for deployment, not for development
            // IIFE =. Immediatedly Invoked Function Execution
        // script tags
    // inline script
    // https://medium.com/sungthecoder/javascript-module-module-loader-module-bundler-es6-module-confused-yet-6343510e7bde
    // https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/
    // https://github.com/getify/You-Dont-Know-JS
    // http://javascript.info/
    // http://dmitrysoshnikov.com/ecmascript/javascript-the-core-2nd-edition/
    // https://medium.freecodecamp.org/how-to-think-like-a-programmer-lessons-in-problem-solving-d1d8bf1de7d2
    // Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

    // Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]

    // Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.

    // You can see the solution files by other students here (https://github.com/zero-to-mastery/Coding_Challenge-6)