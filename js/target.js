class Target {
    constructor(x, y, diameter){
        this.x = x;
        this.y = y;
        this.diameter = diameter;
        this.colour = random(currentPalette),
        this.isAlive = true;
    }

    display(){
        if (this.isAlive){
            fill(this.colour);
            circle(this.x, this.y, this.diameter)
        }
    }

    clicked(posX, posY){
        let rad = this.diameter / 2
        let mouseDistance = dist(posX, posY, this.x, this.y);
        let targetIsClicked = mouseDistance < rad;
        
        if (targetIsClicked){
            this.isAlive = false;
        }
    }
}