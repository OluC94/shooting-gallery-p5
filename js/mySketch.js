//This is our main javascript file constituting our p5.js sketch.
//It must be loaded from index.html
//It assumes that the file "myPalettes.js" has also been loaded
const targets = [];
let currentPalette;

function setup() {
    createCanvas(windowWidth, windowHeight);
    currentPalette = randomPalette();
    // noStroke();
    createTargets();
}

function draw() {
    background("white");
    noStroke();
    drawTargets();
}

const createTargets = () => {
    while (targets.length < 10) {
        const x = random(20, width - 20);
        const y = random(20, height - 20);
        const diameter = random(10, 50);

        targets.push(new Target(x, y, diameter));
    }
};

const drawTargets = () => {
    for (let target of targets) {
        target.display();
    }
};

function mouseClicked() {
    for (let target of targets) {
        target.clicked(mouseX, mouseY);
    }
}

function keyPressed() {
    if (key === "s") {
        save("my-p5-screenshot");
    }
}
