// ch 3 Functions
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