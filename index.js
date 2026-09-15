//main

const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('static'));
app.use('/bootstrap', express.static('node_modules/bootstrap/dist'));
app.use(express.urlencoded({extended:true}));

const PORT = 3000;

const indexRouter = require('./routes/routeindex');
app.use('/', indexRouter);

app.listen(PORT, () => {
	console.log('Running')
})