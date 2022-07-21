const http = require('http');
const express = require('express');
const connection = require("./config")
const route = require('./route/mystore');
const port = 8000 ;



const app =express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const server = http.createServer(app);

server.listen(port);


app.use('/product',route);


