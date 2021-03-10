// CH 2 Exercises: 
    // Looping A Triangle
    /*
    #
    ##
    ###
    ####
    #####
    ######
    #######
    */
    // Answer: 
        let block = "#";
        for (let i = 0; i < 7; i++) {
            console.log(block);
            block += "#";
        }
    // FizzBuzz:
    // Print all #'s from 1 to 100 with two exceptions:
        // Nums divisible by 3, print "Fizz" instead of the number
        // Numbs divisible by 5 & not three print "Buzz" instead of the number
        // numbs divisible by both print "FizzBuzz"

    // Answer:
    for (let i = 1; i < 101; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        } else if (i % 3 == 0) {
            console.log("Fizz");
        } else if (i % 5 == 0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }

    // Checker Board: 
    /*
    # # # #
     # # # 
    # # # #
     # # # 
    # # # #
     # # # 
    # # # #
     # # #   
    */
    // Answer:
    let dark = "#", light = "O";
    let boardSize = 8;
    let row = ""
    let board = ""

    // Create each row; i for rows
    for (let i = 0; i < boardSize; i++) {
        // j for column within row:
        for (let j = 0; j < boardSize; j++) {
            if (i % 2 == 0) {
                // dark first:
                (j % 2 == 0) ? row += dark : row += light;
            } else {
                (j % 2 == 0) ? row += light : row += dark;
            }
        }
        board += row + "\n";
        // reset row for new round
        row = ""
    }
    console.log( board);


    // book solution:
    let size = 8;
    let board = "";

    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            if ((x + y) % 2 == 0) {
            board += " ";
            } else {
            board += "#";
            }
        }
    board += "\n";
    }
    console.log(board);

// Chapter 3 Functions
    // Exercise 1: 
        // Write a function min that takes two arguments and returns their minimum

    const min = (a, b) => {
        if (a === b) {
            return a
        } else if (a > b) {
            return b
        } else {
            return a
        }
    }

    // Exercise 2: Recursion
        // Define a recursive function isEven corresponding to this description:
        // Zero is Even
        // One is odd
        // For any other number N, its evenness is the same as N - 2.

        const isEven2 = n => {
            if (n === 0) {
                return True
            } else if (n === 1) {
                return False
            } else if (n > 0) {
                return isEven(-n)
            } else {
                return isEven(n - 2)
            }
        }

    // Exercise 3: Bean Counting:
        // Write a function countBs that takes a string as its only argument & returns
        // a number that indicates how many uppercase "B" characters there are in the string

    const countBs = a => {
        count = 0;
        for (let i = 0; i < a.length; i++) {
            
            if (a[i] === "B") {
                count++;
            }
        }
        return count
    }

    const countChar = (a, b) => {
        count = 0;
        for (let i = 0; i < a.length; i++) {
            if (a[i] == b) {
                count++;
            }
        }
        return count
    }

    const countBs = a => {
        return countChar(a, "B")
    }

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4

// Chapter 4 Data Structures
    // Exercise 1: The sum of a range
        // Write a range function that takes two args start & end, and returns
        // an arraycontainig all the numbers from start up to & including end;
            const range = (start, end) => {
                list = [];
                count = start;
                for (let i = 0; i <= (end - start); i++) {
                    list.push(count);
                    count++;
                }
                return list 
            }
        // Next write a sum function that takes an array of numbers & returns the 
        // sum of these numbers; 

            const sum = numbers => {
                let total = 0
                for (let number of numbers) {
                    total += number;
                }
                return total;
            }

        // As a bonus, modify range to take an optional third argument for step value
            const range1 = (start, end, step=1) => {
                list = [];
                if (step === 0) {
                    step = 1;
                } else if (step > 0) {
                    for (let i = start; i <= end; i += step){
                        list.push(i);
                    }
                } else {
                    for (let i = start; i >= end; i+= step) {
                        list.push(i);
                    }
                }
                return list
            }
    // Exercise 2: Reversing an array:
            // write 2 functions reverseArray & reverseArrayInPlace
            // the first: reverseArray takes an array as an arg & produces a new array
            // the second: does the same as above, but modifies the given array
            // neither may use the standard reverse method

            const reverseArray = list => {
                let newList = [];
                for (let item of list) {
                    newList.unshift(item);
                }
                return newList
            }
            
            // Book SOlution:
            function reverseArrayInPlace(array) {
                for (var i = 0; i < Math.floor(array.length / 2); i++) {
                    var old = array[i];
                    array[i] = array[array.length - 1 - i];
                    array[array.length - 1 - i] = old;
                }
                return array;
            }

            // try to understand book solution: 
            const reverseArrayInPlace1 = array => {
                for (let i = 0; i < array.length; i++){
                    let tmp = array[i];
                    array[i] = array[array.length - 1 - i];
                    array[array.length -1 -i] = tmp;
                }
                return array
            }

            console.log(reverseArray(["A", "B", "C"]));
            // → ["C", "B", "A"];
            var arrayValue = [1, 2, 3, 4, 5];
            reverseArrayInPlace(arrayValue);
            console.log(arrayValue);
            // → [5, 4, 3, 2, 1]
    // Exercise 3: A List:
            // Write a function 1.*arrayToList that builds up a list structure like the
            // example; Also write a function 2.*listToArray that does the opposite
            // Add a helper function 3.*prepend which takes an element & a list
            // & creates a new list that adds the element to the front of the 
            // input list & 4.*nth which takes a list & a number & returns the element
            // at the given position in the list( )
            let list = {
                value: 1,
                rest: {
                    value: 2,
                    rest: {
                        value: 3,
                        rest: null
                    }
                }
            };
            let array = [1,2,3];
            let arrayToList = array => {
                list = {};
                
            }