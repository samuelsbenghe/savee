function setup() {
    // Create canvas
    let canvasContainer = document.getElementById("canvas");
    let canvas = createCanvas(800, 600);
    canvas.parent(canvasContainer);

    // UI Setup
    uiSetup();

    // Tool Setup
    toolSetup();

    // Set background color
    background(50);
}

function draw() {
    background(50);

    const tool = toolManager.getActiveTool();
    if (tool?.onDraw) {
        const pg = layers[activeLayerIndex];
        tool.onDraw(pg);
    }

    // Draw all layers in order
    for (let pg of layers) {
        image(pg, 0, 0);
    }
}

function mouseDragged() {
    const tool = toolManager.getActiveTool();
    if (tool?.onMouseDragged) {
        const pg = layers[activeLayerIndex];
        tool.onMouseDragged(pg);
    }
}

function mousePressed() {
    const tool = toolManager.getActiveTool();
    if (tool?.onMousePressed) {
        const pg = layers[activeLayerIndex];
        tool.onMousePressed(pg);
    }
}

function mouseReleased() {
    const tool = toolManager.getActiveTool();
    if (tool?.onMouseReleased) {
        const pg = layers[activeLayerIndex];
        tool.onMouseReleased(pg);
    }
}
