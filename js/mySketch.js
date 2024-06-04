//This is our main javascript file constituting our p5.js sketch.
//It must be loaded from index.html
//It assumes that the file "myPalettes.js" has also been loaded
const targets = []
let currentPalette;

function setup() {
    createCanvas(windowWidth, windowHeight);
    currentPalette = randomPalette();
    // noStroke();
    createTargets();
    
}

function draw() {
    background("white");
    noStroke()
    drawTargets();

}

const createTargets = () => {
	while (targets.length < 10) {

		const target = {
			x: random(0, width),
			y: random(0, height),
			diameter: random(10, 50),
			colour: random(currentPalette),
			isAlive: true,
		}
		targets.push(target)
	}
}

const drawTargets = () => {
	for (let target of targets) {
		if (target.isAlive) {
			fill(target.colour)
			circle(target.x, target.y, target.diameter)
		}
	}
}


function mouseClicked() {
    

}

function keyPressed() {
    if (key === "s") {
        save("my-p5-screenshot");
    }
}

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
}