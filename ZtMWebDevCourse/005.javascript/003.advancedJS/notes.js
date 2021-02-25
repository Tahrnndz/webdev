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
// Modules 

