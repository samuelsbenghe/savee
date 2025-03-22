function setup() {
    // Create canvas
    let canvasContainer = document.getElementById("canvas-container");
    let canvas = createCanvas(800, 600);
    canvas.parent(canvasContainer);

    // Set background color
    background(50);
}

function draw() {
    rect();
}
