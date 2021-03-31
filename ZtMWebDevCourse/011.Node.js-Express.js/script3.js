import fs from 'fs';

// Read File: 
// fs.readFile('./hello.txt', (err, data) => {
//     if (err) {
//         console.log('error');
//     }
//     console.log('async', data.toString());
// })

// const file = fs.readFileSync('./hello.txt');

// console.log('sync', file.toString());

// Append
// fs.appendFile('./hello.txt', ' \nThis is so cool!', err => {
//     if (err) {
//         console.log(err);
//     }
// });

// Write
// fs.writeFile('bye.txt', 'Sad to see you go', err => {
//     if (err) {
//         console.log(err);
//     }
// })

// Delete
fs.unlink('./bye.txt', err => {
    if (err) {
        console.log(err);
    }
});