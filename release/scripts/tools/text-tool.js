class TextTool extends Tool {
    constructor() {
        super("Text Tool");
        this.textToDraw;
    }

    onMousePressed(pg) {
        const x = mouseX;
        const y = mouseY;

        // Only continue if click is inside the canvas bounds
        if (x < 0 || y < 0 || x >= pg.width || y >= pg.height) return;

        // Ask user for text
        const userText = prompt("Enter text:", this.textToDraw);
        if (userText === null || userText.trim() === "") return;

        pg.push();
        pg.strokeWeight(0); // No stroke for text
        pg.fill(activeColor);
        pg.textSize(brushSize);
        pg.text(userText, x, y);
        pg.pop();
    }
}
