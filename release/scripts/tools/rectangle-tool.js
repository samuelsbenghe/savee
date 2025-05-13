class RectangleTool extends Tool {
    constructor() {
        super("Rectangle Tool");
        this.startX = null;
        this.startY = null;
        this.isDrawing = false;
    }

    // Used code from case study as reference for making previews
    onDraw(pg) {
        if (mouseIsPressed) {
            if (this.startX == null) {
                this.startX = mouseX;
                this.startY = mouseY;
                this.isDrawing = true;
                pg.loadPixels(); // Capture current canvas state
            } else {
                pg.updatePixels(); // Restore previous canvas state
                const x = Math.min(this.startX, mouseX);
                const y = Math.min(this.startY, mouseY);
                const w = Math.abs(mouseX - this.startX);
                const h = Math.abs(mouseY - this.startY);
                pg.rect(x, y, w, h); // Preview rectangle
            }
        } else if (this.isDrawing) {
            const x = Math.min(this.startX, mouseX);
            const y = Math.min(this.startY, mouseY);
            const w = Math.abs(mouseX - this.startX);
            const h = Math.abs(mouseY - this.startY);

            pg.noStroke();
            pg.fill(hexToRGB(activeColor));
            pg.rect(x, y, w, h); // Final rectangle

            this.isDrawing = false;
            this.startX = null;
            this.startY = null;
        }
    }
}
