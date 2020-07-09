const express = require('express')
const path = require('path')
const webpack = require('webpack')
const open = require('open')
const config = require('../webpack.config.dev')

var port = 3000;
var app = express();
const compiler = webpack(config);

app.get('/', (req, res)=>{
     res.sendFile(path.join(__dirname, '../src/index.html'))
});

app.listen(port, (err)=>{
    if(err){
        console.log(err);
    }
    else{
        open('http://localhost:' + port)
    }
});