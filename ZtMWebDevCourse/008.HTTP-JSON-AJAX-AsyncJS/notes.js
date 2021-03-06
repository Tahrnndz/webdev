// ### HTTP/HTTPS
// * HTTP: 
//     * GET
//     * POST
//     * PUT
//     * DELETE
// * Network Tab: 
//     * Shows all HTTP header info
//     * Use example .com
// * Send data two ways:
    // * Query String params
        * <form method="GET">
        {/* * GET request adds info to the URL (query string) */}
    {/* * Body of request to send info:
        * POST Request
            * More common than GET request due to not being in URL query string
            * wont see PWD in URL at least, in Form Data
    * Issue with HTTP Requests is bc people can sniff this info and steal sensitive info */}
{/* * HTTPS: 
    * Secure version of HTTP: Communicationi is encrypted
    * Uses TLS tech to secure the communication
    * If you are sending sensitive info, make sure it is over HTTPS */}

{/* ### JSON:
* we cannot send a javascript object, but there is a standard format that we can use though
* JSON: JavaScript object notation
    * JSON is becoming the standard, more succient way, saves bandwidth
    * Has quotes around both sides unlike reg js obj */}
{/* * XML:  */}
    * Outdated & inefficient
{/* * JSON.parse() & JSON.stringify() */}
    * var obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
    * var myJSON = JSON.stringify(obj);

{/* ### AJAX
* AJAX allows you to submit to the server whenever you want without the webpage being a <form>
* Allow web pages to request small chunks of data, and display them only when needed
* ALlows you to read from the webserver and request data without refreshing the page
* THe Old Way: XML/HTTP Request was how it was created
* The New Way: jQuery: Fetch: */}
    * `fetch('/my/url').then(response => {
        console.log(response);
    })`
{/* * Less data is wasted this way, 
* Single page applications are popular now
    * Never do a full reload
* Get a promise, will let you know when i get a value */}

{/* ### Promises
* A promise is an object hat may produce a single value some time in the future
* Either a resolved value or a reason that it's not resolved (rejected)
* Fulfilled, rejected, pending (States)
* Replaces callbacks, callbacks creates pyramids of doom
* Serve same purposes as callbacks and new to ES6
* Callback code: */}
    * `movePlayer(100, 'Left', function() {
            movePlayer(400, 'Left', function () {
                movePlayer(10, 'Right', function() {
                    movePlayer(330, 'Left', function() {
                    });
                });
            });
    });`
{/* * Promises Version */}
    * `movePlayer(100, 'Left')
        .then(() => movePlayer(400, 'Left'))
        .then(() => movePlayer(10, 'Right'))
        .then(() => movePlayer(330, 'Left))

{/* * Create a promise */}
`const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('Stuff Worked');
    } else {
        reject('Error, it broke');  
    }
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "Hiiii")
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "Pookie")
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, "Is it me your looking for?")
})

Promise.all([promies, promise2, promise3, promise4])
    .then(values => {
        console.log(values);
    })

promise
    .then(results => result => result + '!')
    .then(result2 => result2 + '?')
    .catch(() => console.log('error')) 
    .then(result3 => {
        console.log(result3 + '1");
    })

// ==============================================================================
const urls = [
    "url1",
    "url2",
    "url3"
]

Promise.all(urls.map(url => {
    return fetch(url).then(resp=> resp.json())
})).then(results => {
    console.log((results[0])
    console.log((results[1]
    console.log((results[2]
}).catch(() => console.log('error'))

// * Promises are good for async communication
// * Pormises are alike event listeners, but can only fail or succeed once
// ### ES8 - Async Await: 
    // built on top of promises

    async function playerStart() {
        const first = await movePlayer(100, 'Left'); // pause
        const second =await movePlayer(400, 'Left'); // pause
        await movePlayer(10, 'Right'); // pause
        await movePlayer(330, 'Left'); // pause 
    }
    // syntatic sugar of promises syntax 
    // fetch = promise
fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(console.log)

    // looks cleaner than promises above^

async function fetchUsers() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json();
    console.log(data);
}

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

const getData1 = async function() {
    try {
        const [ users, posts, albums ] = await Promise.all(urls.map(url =>
            fetch(url).then(resp => resp.json())
            ))
            console.log(users);
            console.log(posts);
            console.log(albums);
    } catch (err) {
        console.log('oops', err);
    }
}

// ### ES9 
// object spread operator
const animals = {
    tiger: 25,
    lion: 5,
    monkey: 2
}
const { tiger, ...rest } = animals;

const array = [1,2,3,4,5];
function sum (a,b,c,d,e) {
    return a + b + c + d + e;
}
sum (...array);

function objectSpread(p1, p2, p3) {
    console.log(p1);
    console.log(p2);
    console.log(p3);
}

const {tiger, lion, ...rest } = animals;

objectSpread(tiger, lion, rest);

// async
const urls = [
    'https://swapi.co/api/people/1',
    'https://swapi.co/api/people/2',
    'https://swapi.co/api/people/3',
    'https://swapi.co/api/people/4'
]

Promise.all(urls.map(url => {
    return fetch(url).then(people => people.json())
}))
    .then(array => {
        console.log('1', array[0]);
        console.log('2', array[1]);
        console.log('3', array[2]);
        console.log('4', array[3])
    })
    .catch(err => console.log('ugh fix it!', err))
    .finally(() => console.log('extra', data));

// for await of
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
    try {
        const [ users, posts, albums ] = await Promise.all(urls.map(async function (url) {
            const response = await fetch(url);
            return response.json();
        }));
        console.log('users', users);
        console.log('posts', posts);
        console.log('albums', albums);
    } catch (err) {
        console.log('oops', err);
    }
}

const loopThroughUrls = url =>{
    for (url of urls) {
        console.log(url);
    }
}

const getData2 = async function () {
    const arrayOfPromises = urls.map(url => fetch(url));
    for await (let request of arrayOfPromises) {
        const data = await request.json();
        console.log(data);
    }
}
// ### ES2020: allSettled
// https://github.com/daumann/ECMAScript-new-features-list