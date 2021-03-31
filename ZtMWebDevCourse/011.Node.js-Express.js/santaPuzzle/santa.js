import fs from 'fs';

fs.readFile('./input.txt',(err,data) => {
    console.time('timer');
    let arr = [];
    if (err) {
        console.log(err);
    }
    // console.log(data.toString());
    arr = data.toString().split('');
    // console.log(arr);
    // santa starts at floor zero
    let counter = 0;

    // loop through all the items of the array
    //An opening parenthesis, (, means he should go up one floor, 
    //and a closing parenthesis, ), means he should go down one floor.

    for (let [index, item] of arr.entries()) {
        if (item === '(') {
            counter++;
        } else {
            counter--;
        }
        if (counter === -1) {
            console.log('basement: ',index + 1)
        }
    }
    console.log(counter);
    console.timeEnd('timer');
})

// Andrei's solution
function question1() {
    fs.readFile('./input.txt', (err, data) => {
        console.time('santa-time');
        const directions = data.toString();
        const directionsArray = directions.split('');
        const answer = directionsArray.reduce ((acc, currentValue) => {
            if (currentValue === '(') {
                return acc += 1;
            } else if(currentValue === '(') {
                return acc -= 1;
            }
        }, 0)
        console.timeEnd('santa-time');
        console.log('floor: ', answer);
    })
}

function question2() {
    fs.readFile('./input.txt', (err, data) => {
        const directions = data.toString();
        const directionsArray = directions.split('');
        let acc = 0;
        let counter = 0;
        const answer = directionsArray.some((currentItem) => {
            if (currentItem === '(') {
                acc += 1;
            } else if(currentItem === '(') {
                acc -= 1;
            }
            counter++; 
            return acc < 0; 
        })
        
        console.log('basement entered at: ', counter);
    })
}