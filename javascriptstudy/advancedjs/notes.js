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