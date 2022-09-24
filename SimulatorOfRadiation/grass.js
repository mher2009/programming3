let LivingCreature = require("./livingCreature")
module.exports = class Grass extends LivingCreature {
    constructor(x, y, mutated) {
        super(x, y)
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.mutated = mutated;
        this.directions = [];
    }

    getNewCoordinates() {
        if (this.mutated) {
            this.directions = [
                [this.x - 1, this.y - 1],
                [this.x - 1, this.y + 1],
                [this.x - 2, this.y - 2],
                [this.x - 2, this.y + 1],
                [this.x + 1, this.y - 1],
                [this.x + 1, this.y + 1],
                [this.x + 2, this.y - 2],
                [this.x + 2, this.y + 2]
            ]
        }
        else {

            this.directions = [
                [this.x - 1, this.y - 1],
                [this.x, this.y - 1],
                [this.x + 1, this.y - 1],
                [this.x - 1, this.y],
                [this.x + 1, this.y],
                [this.x - 1, this.y + 1],
                [this.x, this.y + 1],
                [this.x + 1, this.y + 1]
            ];
        }
    }


    mul() {
        var gen = false
        var rand = random(4)
        if (rand == 4) {
            gen = this.mutated
        }

        var tact = 20;
        if (this.mutated == true) {
            tact = 1
        }
        this.multiply++
        var emptyCell = this.chooseCell(0);
        var newCell = random(emptyCell);
        if (newCell && this.multiply >= tact) {

            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = 1;

            var gr = new Grass(newX, newY, gen);

            grassArr.push(gr);

            this.multiply = 0;
        }
    }

}
