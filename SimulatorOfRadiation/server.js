var express = require('express')
var app = express()
var server = require('http').Server(app)
var io = require('sockiet')(server)

var fs = require('fs')

app.use(express.static("."))

app.get('/', function(req, res){
    res.redirect('index.html')
})

server.listen(3000, () => {
    console.log("server run")
})
