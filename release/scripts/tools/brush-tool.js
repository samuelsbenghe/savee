class BrushTool extends Tool {
    constructor() {
        super("Brush");
    }

    onMouseDragged(pg) {
        pg.stroke(activeColor);
        pg.strokeWeight(brushSize);
        // draw line at current position
        pg.line(pmouseX, pmouseY, mouseX, mouseY);
    }
}
