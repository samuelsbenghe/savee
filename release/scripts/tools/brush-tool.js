class BrushTool extends Tool {
    constructor() {
        super("Brush");
    }

    onMouseDragged(pg) {
        pg.stroke(activeColor);
        pg.strokeWeight(brushSize);
        pg.line(pmouseX, pmouseY, mouseX, mouseY);
    }
}
