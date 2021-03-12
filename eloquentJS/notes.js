// ch 3 Functions

const JOURNAL = require("./journal");

    // Recursion: 
        function findSolution(target) {
            function find (current, history) {
                if (current == target) {
                    return history;
                } else if (current > target) {
                    return null;
                } else {
                    return find(current + 5, `(${history} + 5)`) || find(current *3, `(${history} * 3)`);
                }
            }
            return find(1, "1");
        }
        // Walk Through: to find solution to 13
            find(1, "1")
                find(6, "1 + 5)")
                    find(11, "((1 + 5) + 5)")
                        find(16, "(((1 + 5) + 5) + 5)")
                            // too big
                        find(33, "(((1 + 5) + 5) * 3)")
                            //too big
                    find(18, "((1 + 5) * 3)")
                        // too big
                find(3, "(1 * 3)")
                    find(8, "((1 * 3) + 5)")
                        find(13, "(((1 * 3) + 5) + 5)")
                            // Found!

    // Growing Functions
    // Want a function that produces results like below:
        // 007 Cows
        // 011 Chickens
        // First Attempt Below
        function printFarmInventory(cows, chickens) {
            let cowString = String(cows);
            while (cowString.length < 3) {
                cowString = "0" + cowString;
            }
            console.log(`${cowString} Cows`);
            let chickenString = String(chickens);
            while (chickenString.length < 3) {
                chickenString = "0" + chickenString;
            }
            console.log(`${chickenString} Chickens`);
        }
        printFarmInventory(7, 11);
        
        // Second Attempt with extra animals
            function printZeroPaddedWithLabel(number, label) {
                let numberString = String(number);
                while (numberString.length < 3) {
                    numberString = "0" + numberString;
                }
                console.log(`${numberString} ${label}`);
            }
            function printFarmInventory(cows, chickens, pigs) {
                printZeroPaddedWithLabel(cows, "Cows");
                printZeroPaddedWithLabel(chickens, "Chickens");
                printZeroPaddedWithLabel(pigs, "Pigs");
            }
            printFarmInventory(7, 11, 3);
        
        // Third attempt deconstructing the function
            function zeroPad(number, width) {
                let string = String(number);
                while (string.length < width) {
                    string = "0" + string;
                }
                return string;
            }

            function printFarmInventory(cows, chickens, pigs) {
                console.log(`${zeroPad(cows)} Cows`);
                console.log(`${zeroPad(chickens)} Chickens`);
                console.log(`${zeroPad(pigs)} Pigs`);
            }

// Ch 4 Data Structures;

    function phi(table) {
        return (table[3] * table[0] - table[2] * table[1])/
            Math.sqrt((table[2] + table[3]) *
                    (table[0] + table[1]) *
                    (table[1] + table[3]) *
                    (table[0] + table[2]));
    }
    console.log(phi[76,9,4,1]);

    function tableFor(event, journal) {
        let table = [0, 0, 0 , 0];
        for (let i = 0; i <journal.length; i++) {
            let entry =journal[i], index = 0;
            if (entry.events.includes(event)) index += 1;
            if (entry.squirrel) index += 2;
            table[index] += 1;
        }
        return table;
    }            

    // Array Loops:
    for (let entry of JOURNAL) {
        console.log(``
    } 

    function journalEvents(journal) {
        let events = [];
        for (let entry of journal) {
            for (let event of entry.events){
                if (!events.includes(event)){
                    events.push(event);
                }
            }
        }
        return events;
    }

    console.log(journalEvents(JOURNAL));

    for (let event of journalEvents(JOURNAL)){
        console.log(event + ":", phi(tableFor(event, JOURNAL)));
    }

    //filter out less related results:
    for (let event of journalEvents(JOURNAL)) {
        let correlation = phi(tableFor(event, JOURNAL));
        if (correlation > 0.1 || correlation < -0.1) {
            console.log(event + ":", correlation);
        }
    }
    // results show peanuts highest indicator of turning into squirrel &
    // brushing teeth keeps squirreliness away

    for (let entry of JOURNAL) {
        if (entry.events.includes("peanuts") && 
            !entry.events.includes("brushed teetch")) {
            entry.events.push("peanut teeth");
        } 
    }
    console.log(phi(tableFor("peanut teeth", JOURNAL)));

    // Further Arrayology:
    let todoList = [];
    function remember(task) {
        todoList.push(task);
    }
    function getTask() {
        return todoList.shift();
    }
    function rememberUrgently(task) {
        todoList.unshift(task);
    }

// Chapter 5 Higher Order Functions

    function repeatLog(n) {
        for (let i = 0; i < n; i++) {
            console.log(i);
        }
    }

    function repeat(n, action) {
        for (let i = 0; i < n; i++) {
            action(i);
        }
    }

    let labels = [];
    repeat(5, i => {
        labels.push(`Unit ${i + 1}`);
    });
    console.log(labels);

    // higher order functions:
    // function creates a new function:
        function greaterThan(n) {
            return m => m > n;
        }
        let greaterThan10 = greaterThan(10);
        console.log(greaterThan10(11);
    
    // function that changes other functions:
        function noisy(f) {
            return(...args) => {
                console.log("calling with", args);
                let result = f(...args);
                console.log("called with", args, ", returned", result);
                return result;
            };
        }

        noisy(Math.min)(3, 2, 1);

        // Functions that provide new types of control flow
        function unless(test, then) {
            if (!test) then();
        }
        repeat(3, n => {
            unless(n % 2 == 1, () => {
                console.log(n, "is even");
            });
        });

        // forEach that provides a for/of loop as ahigher order function:
        ["A", "B"].forEach(l => console.log(l));

        function filter(array, test) {
            let passed = [];
            for (let element of array) {
                if (test(element)) {
                    passed.push(element);
                }
            }
            return passed;
        }

        console.log(filter(SCRIPTS, script => script.living));

        // or use filter method:
        console.log(SCRIPTS.filter(s => s.direction == "ttb"));

        // Transforming with MAP method
        function map(array, transform) {
            let mapped = [];
            for (let element of array) {
                mapped.push(transform(element));
            }
            return mapped;
        }
        let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
        console.log(map(rtlScripts, s => s.name));

        // Summarizing with Reduce:
        function reduce(array, combine, start) {
            let current = start;
            console.log("Current Before Loop: ", current);
            for (let element of array) {
                console.log("Current In Loop: ", current);
                console.log("Element in Loop: ", element)
                current = combine(current, element);
                console.log("sum: ", current);
                console.log("====")
            }
            return current;
        }

        console.log(reduce([1,2,3,4], (a, b) => a + b, 0));

        // if your array has at least one element, you can omit start arg;
        console.log([1,2,3,4].reduce((a,b) => a + b));

        // use reduce twice to find the script with the most chars:
        function characterCount(script) {
            return script.ranges.reduce((count, [from, to]) => {
                return count + (to - from);
            }, 0);
        }
        console.log(SCRIPTS.reduce((a, b) => {
            return characterCount(a) < characterCount(b) ? b : a;
        }));

        // Composability:
        // Same function as above without higher order functions:

        let biggest = null;
        for (let script of SCRIPTS) {
            if (biggest == null ||
                characterCount(biggest) < characterCount(script)){
                biggest = script;
                }
        }
        console.log(biggest)

        // Higher order functions shine when you need to compose operations
        // write code that finds the average year of origin for living & dead scripts

        function average(array) {
            return array.reduce((a, b) => a + b) / array.length;
        }
        console.log(Math.round(average(
            SCRIPTS.filter(s => s.living).map(s=>s.year))));

        console.log(Math.round(average(
            SCRIPTS.filter(s => !s.living).map(s => s.year))));

        // Above written in loops. not as elegant
        let total = 0, count = 0;
        for (let script of SCRIPTS) {
            if (script.living) {
                total += script.year;
                count += 1;
            }
        }
        console.log(Math.round(total / count));

        // Recoginizing Text
        function countBy(items, groupName) {
            let counts = [];
            for (let item of items) {
                let name = groupName(item);
                let known = counts.findIndex(c => c.name == name);
                if (known == -1) {
                    counts.push({name, count:1});
                } else {
                    counts[known].count++;
                }
            }
            return counts;
        }
        console.log(countBy([1, 2, 3, 4, 5], n => n > 2));

        function textScripts(text) {
            let scripts = countBy(text, char => {
                let scripts = characterScript(char.codePointAt(0));
                return script ? script.name : "none";
            }).filter(({name}) => name != "none");

            let total = scripts.reduce((n, {count}) => n + count, 0);
            if (total == 0) return "No scripts found";

            return scripts.map(({name, count}) => {
                return `${Math.round(count * 100 / total )}`;
            }).join(", ");
        }
        console.log(textS)

// Ch 6. The Secret Life of Objects: 
    // Methods: Properties that hold function values

        let rabbit = {};
        rabbit.speak = function(line) {
            console.log(`The rabbit says '${line}'`);
        }
        rabbit.speak("I'm alive");

        function speak(line) {
            console.log(`The ${this.type} rabbit says '${line}'`);
        }
        let whiteRabbit = {type: "white", speak};
        let hungryRabbit = {type: "hungry", speak};

        whiteRabbit.speak("Oh my ears and whiskers, " + "how late it's getting!");
        hungryRabbit.speak("I could use acarrot right now.");
    // think of 'this' as an extra parameter that is passed in a different way.
    // if you want to pass it explicitly, you can use a function's call method

    speak.call(hungryRabbit, "Burp!");
    // Arrow functions can see the this in their surrounding scope, unlike when 
    // you use the function keyword
    function normalize() {
        console.log(this.coords.map(n => n /this.length));
    }
    normalize.call({coords: [0, 2, 3], length: 5});
    
    // Prototypes:
    let empty = {};
    console.log(empty.toString);
    console.log(empty.toString());
    // most obejts have a prototype; A prototype is another object that is used
    // as a fallback source of properties.  When an obj gets a request for a property
    // that it doesn't have, its prototype will be searched

    // entity behind almost all objects, Object.prototype
    console.log(Object.getPrototypeOf({})) == Object.prototype); // true
    console.log(Object.getPrototypeOf(Object.prototype)); // null
    // Functions derive from Function.prototype & 
    // Arrays derive from Array.prototype
    console.log(Object.getPrototypeOf(Math.max) == Function.prototype);// true
    console.log(Object.getPrototypeOf([]) == Array.prototype); // true

    // you can use Object.create to create an object with a specific prototype
    let protoRabit = {
        speak(line) {
            console.log(`The ${this.type} rabbit says '${line}'`);
        }
    }
    let killerRabbit = Object.create(protoRabbit);
    killerRabbit.type = "killer";
    killerRabbit.speak("SKREEE!"); // The killer rabbit says 'SKREEE!'

    // Classes:
    // JavaScript's prototype system can be interpreted as an informal take
    // on an OO concept called classes

    // A constructor function makes an object from the proper prototype 7 
    // make sure that it has the properties that instances of the class are 
    // supposed to have

    function makeRabbit(type) {
        let rabbit = Object.create(protoRabbit);
        rabbit.type =type;
        return rabbit;
    }

    function Rabbit(type) {
        this.type = type;
    }
    Rabbit.prototype.speak = function(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
    let weirdRabbit = newRabbit("weird");

    // all functions automatically get a property named prototype which holds a plain
    // empty object that derives from Object.prototype

    // Class notation:
        // JavaScript Classes are constructor functions with a prototype prop;
        // That is how they work, but now we can write them in an easier manner

        class Rabbit {
            constructor(type) {
                this.type = type;
            }
            speak(line) {
                console.log(`The ${this.type} rabbit says '${line}'`);
            }
        }
        let killerRabbit = new Rabbit("killer");
        let blackRabbit = new Rabbit("black");

        // The class keyword starts the class declaration which allows us to 
        // define a constructor & a set of methods all in one place
        
        // like function, class can be used both in statements & in expressions

        let object = new class {getWord() { return "hello"; } };
        console.log(object.getWord()); // hello 
    
    // Overriding Derived Properties:
        Rabbit.prototype.teeth = "small";
        console.log(killerRabbit.teeth); // => small
        killerRabbit.teeth = "long, sharp, & bloody";
        console.log(killerRabbit.teeth); // => long, sharp, & bloody

    // Maps: 
        // A map is a datat structure that associates values (the keys) with other
        // values

        let ages = {
            Boris: 39,
            Liang: 22,
            Julia: 62
        };

        console.log(`Julia is ${ages["Julia"]}`); // => Julia is 62
        console.log("Is Jack's age known?", "Jack" in ages);// => false
        console.log("Is toString's age known?", "toString" in ages); // => true

        let ages = new Map();
        ages.set("Boris", 39);
        ages.set("Liang", 22);
        ages.set("Julia", 62);
        console.log(`Julia is ${ages.get("Julia")}`); // => Julia is 62
        console.log("Is Jack's age known?", ages.has("Jack"));// => false
        console.log("Is toString's age known?", ages.has("toString")); // => false

    // Polymorphism:

    Rabbit.prototype.toString = function() {
        return `a ${this.type} rabbit`;
    };
    console.log(String(blackRabbit)); // => a black rabbit

    // Symbols: values created with the Symbol function, you cannot create the same
    // symbol twice

    let sym = Symbol("name");
    console.log(sym == Symbol("name")); // -> false
    Rabbit.prototype[sym] = 55;
    console.log(blackRabbit[sym]); // => 55
    
    const toStringSymbol = Symbol("toString");
    Array.prototype[toStringSymbol] = function() {
        return `${this.length} cm of blue yarn`;
    }
    console.log([1, 2].toString()); // => 1, 2
    console.log([1, 2][toStringSymbol]()); // => 2 cm of blue yarn

    // Getters, Setters, and Statics:
    let varyingSize = {
        get size() {
            return Math.floor(Math.random() * 100) ;
        }
    };

    console.log(varyingSize.size); // => 73
    console.log(varyingSize.size); // => 49

    class Temperature {
        constructor(celsius) {
            this.celsius = celsius;
        }
        get fahrenheit() {
            return this.celsius * 1.8 + 32;
        }
        set fahrenheit(value) {
            this.celsius = (value - 32) / 1.8;
        }

        static fromFahrenheit(value){
            return new Temperature((value - 32) / 1.8);
        }
    }
    
    let temp = new Temperature(22);
    console.log(temp.fahrenheit); // => 71.6
    temp.fahrenheit = 86;
    console.log(temp.celsius); // => 30