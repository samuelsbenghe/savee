class EraserTool extends Tool {
    constructor() {
        super("Eraser");
    }

    onMouseDragged(pg) {
        pg.erase();
        pg.stroke(hexToRGB(activeColor));
        pg.strokeWeight(brushSize);
        pg.line(pmouseX, pmouseY, mouseX, mouseY);
        pg.noErase();
    }
}
