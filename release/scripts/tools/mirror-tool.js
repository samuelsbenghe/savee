class MirrorTool extends Tool {
    constructor() {
        super("Mirror");
    }

    onMouseDragged(pg) {
        pg.stroke(activeColor);
        pg.strokeWeight(brushSize);
        // draw line at current position
        pg.line(pmouseX, pmouseY, mouseX, mouseY);
        // draw mirrored line
        pg.line(CANVAS_WIDTH - pmouseX, pmouseY, CANVAS_WIDTH - mouseX, mouseY);
    }
}
