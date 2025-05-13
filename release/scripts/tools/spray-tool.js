class SprayTool extends Tool {
    constructor() {
        super("Spray Tool");
        this.isDrawing = false;
    }

    //draw
    onDraw(pg) {
        if (this.isDrawing) {
            let baseColor = hexToRGB(activeColor); //RGB from hex color

            let sprayRadius = brushSize; // use brush size for radius
            let sprayDensity = brushSize * 2; // density scales with brush size

            for (let i = 0; i < sprayDensity; i++) {
                let angle = random(TWO_PI);
                let radius = random(sprayRadius);
                let xOffset = cos(angle) * radius;
                let yOffset = sin(angle) * radius;

                //speckled effect
                let alpha = random(50, 150);

                //stroke using color with alpha
                pg.stroke(baseColor[0], baseColor[1], baseColor[2], alpha);
                pg.strokeWeight(random(0.5, 2));
                pg.point(mouseX + xOffset, mouseY + yOffset);
            }
        }
    }

    //drag
    onMouseDragged(pg) {
        this.onDraw(pg);
    }

    //when pressed
    onMousePressed(pg) {
        this.isDrawing = true;
        this.onDraw(pg);
    }

    //when released
    onMouseReleased(pg) {
        this.isDrawing = false;
    }
}
