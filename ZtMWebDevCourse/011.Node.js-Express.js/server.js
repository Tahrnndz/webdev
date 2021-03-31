import express from 'express';
// import bodyParser from 'body-parser';

const app = express();
app.use(express.static('./public'));
// app.use(express.urlencoded({extended: false}));
// app.use(express.json());

// app.get('/',(req, res) => {
//     // console.log(req.query);
//     // req.body;
//     //console.log(req.header)
//     // console.log(req.params);
//     res.status(404).send('Not Found');
// });

app.listen(3000);