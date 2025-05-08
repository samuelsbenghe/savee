class EllipseTool extends Tool {
    constructor() {
        super("Ellipse Tool");
        this.startX = null;
        this.startY = null;
        this.isDrawing = false;
    }

    onDraw(pg) {
        if (mouseIsPressed) {
            // On first press, set up drawing state and capture the current canvas pixels
            if (this.startX == null) {
                this.startX = mouseX;
                this.startY = mouseY;
                this.isDrawing = true;
                pg.loadPixels();
            } else {
                // If mouse is moving, overwrite the preview with an updated ellipse
                pg.updatePixels();
                const x = (this.startX + mouseX) / 2;
                const y = (this.startY + mouseY) / 2;
                const w = Math.abs(mouseX - this.startX);
                const h = Math.abs(mouseY - this.startY);
                pg.ellipse(x, y, w, h); // Draw the preview on top of previous pixels
            }
        } else if (this.isDrawing) {
            // On mouse release, finish drawing and reset the state
            const x = (this.startX + mouseX) / 2;
            const y = (this.startY + mouseY) / 2;
            const w = Math.abs(mouseX - this.startX);
            const h = Math.abs(mouseY - this.startY);

            pg.noStroke();
            pg.fill(hexToRGB(activeColor));
            pg.ellipse(x, y, w, h);

            // Reset drawing state
            this.isDrawing = false;
            this.startX = null;
            this.startY = null;
        }
    }
}
