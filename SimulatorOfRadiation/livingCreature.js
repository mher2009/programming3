module.exports = class LivingCreature {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.multiply = 0
    }


    chooseCell(char, char1) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == char || matrix[y][x] == char1) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
}

