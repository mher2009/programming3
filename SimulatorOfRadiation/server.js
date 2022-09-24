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

function matrixGenerator(matrixSize, grassCount, grEatCount, radCount, healingCount) {
    let matrix = [];

    for (let i = 0; i < matrixSize; i++) {
        matrix[i] = []

        for (let j = 0; j < matrixSize; j++) {
            matrix[i][j] = 0;
        }
    }

    for (let i = 0; i < grassCount; i++) {

        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            matrix[y][x] = 1;
        }else{
            i--;
        }

    }

    for (let i = 0; i < grEatCount; i++) {

        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            matrix[y][x] = 2;
        }else{
            i--;
        }

    }

    for (let i = 0; i < radCount; i++) {

        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            matrix[y][x] = 3;
        }else{
            i--;
        }

    }



    for(let i = 0; i < healingCount; i++){
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        if(matrix[y][x] == 0){
            matrix[y][x] = 5;
        }else{
            i--;
        }
    }

    let x = Math.floor(Math.random() * matrixSize)
    let y = Math.floor(Math.random() * matrixSize)

    matrix[y][x] = 4;


    return matrix;


}