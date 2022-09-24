var io = io()
let matrix = matrixGenerator(40,30,10,80,20);
var side = 25;



var grassArr = []
var grassEaterArr = []
var radiationArr = []


function setup() {
    frameRate(15)
    createCanvas(matrix[0].length * side, matrix.length * side);

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {    
                var gr = new Grass(x, y, false)

                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                var grEat = new GrassEater(x, y, false)

                grassEaterArr.push(grEat)
            } else if (matrix[y][x] == 3) {
                var rad = new Radiation(x, y)

                radiationArr.push(rad)
            }
        }
    }
}
function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green")
                for (let i in grassArr) {
                    if (grassArr[i].x == x && grassArr[i].y == y) {
                        if (grassArr[i].mutated) {
                            fill("lime")
                            break;
                        }
                    }
                }
            } else if (matrix[y][x] == 2) {
                fill("yellow")
                for (let i in grassEaterArr) {
                    if (grassEaterArr[i].x == x && grassEaterArr[i].y == y) {
                        if (grassEaterArr[i].mutated) {
                            fill("orange")
                            break;
                        }
                    }
                }
            } else if (matrix[y][x] == 3) {
                fill("red")
            } else if (matrix[y][x] == 4) {
                fill("blue")
            }else if(matrix[y][x] == 5){
                fill ("purple")
            }
            else {
                fill(77,44,44)
            }
            rect(x * side, y * side, side, side)

        }
    }

    for (let i in grassArr) {
        grassArr[i].mul()
    }

    for (let j in grassEaterArr) {
        grassEaterArr[j].mul()
        grassEaterArr[j].eat()
    }

    for (let j in radiationArr) {
        radiationArr[j].infect()
        radiationArr[j].hit()
    }
}
