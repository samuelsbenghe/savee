function setup() {
    // Create canvas
    let canvasContainer = document.getElementById("canvas");
    let canvas = createCanvas(800, 600);
    canvas.parent(canvasContainer);

    // Set background color
    background(50);
}

function draw() {
    // This function runs continuously
    // We'll leave it mostly empty for now as this is just the UI layout

    // If mouse is pressed, draw a circle at mouse position
    // This is just for demonstration
    if (
        mouseIsPressed &&
        mouseX > 0 &&
        mouseX < width &&
        mouseY > 0 &&
        mouseY < height
    ) {
        noStroke();
        fill(255);
        ellipse(mouseX, mouseY, 20, 20);
    }
}
