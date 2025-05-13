class EraserTool extends Tool {
    constructor() {
        super("Eraser");
    }

    onMouseDragged(pg) {
        // turn on erasing mode in p5.js
        pg.erase();
        pg.stroke(hexToRGB(activeColor));
        pg.strokeWeight(brushSize);
        // erase pixels where line intersects
        pg.line(pmouseX, pmouseY, mouseX, mouseY);
        // turn off erasing mode in p5.js
        pg.noErase();
    }
}
