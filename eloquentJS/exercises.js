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