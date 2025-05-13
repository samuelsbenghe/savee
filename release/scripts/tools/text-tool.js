class TextTool extends Tool {
    constructor() {
        super("Text Tool");
    }

    onMousePressed(pg) {
        const x = mouseX;
        const y = mouseY;

        if (x < 0 || y < 0 || x >= pg.width || y >= pg.height) return;

        // ask user for input
        const input = prompt("What would you like to write?");
        if (input === null || input.trim() === "") return;

        pg.strokeWeight(0);
        pg.fill(activeColor);
        pg.textSize(brushSize);

        // add the text to the layer
        pg.text(input, x, y);
    }
}
