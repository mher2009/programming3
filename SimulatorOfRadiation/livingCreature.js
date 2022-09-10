class LivingCreature {
    constructor(x,y){   
            this.x = x;
            this.y = y;
            this.multiply = 0;
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
    }
    
