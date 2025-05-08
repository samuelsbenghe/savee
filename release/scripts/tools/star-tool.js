class StarTool extends Tool {
    constructor() {
        super("Star Tool");
        this.startX = null;
        this.startY = null;
        this.isDrawing = false;
    }

    onDraw(pg) {
        if (mouseIsPressed) {
            if (this.startX === null) {
                this.startX = mouseX;
                this.startY = mouseY;
                this.isDrawing = true;
                pg.loadPixels(); // Save canvas state
            } else {
                pg.updatePixels(); // Restore state
                const cx = (this.startX + mouseX) / 2;
                const cy = (this.startY + mouseY) / 2;
                const radius =
                    dist(this.startX, this.startY, mouseX, mouseY) / 2;

                pg.push();
                pg.noStroke();
                pg.fill(hexToRGB(activeColor));
                this.drawStar(pg, cx, cy, radius * 0.5, radius, 5);
                pg.pop();
            }
        } else if (this.isDrawing) {
            const cx = (this.startX + mouseX) / 2;
            const cy = (this.startY + mouseY) / 2;
            const radius = dist(this.startX, this.startY, mouseX, mouseY) / 2;

            pg.noStroke();
            pg.fill(hexToRGB(activeColor));
            this.drawStar(pg, cx, cy, radius * 0.5, radius, 5);

            this.startX = null;
            this.startY = null;
            this.isDrawing = false;
        }
    }

    drawStar(pg, x, y, innerRadius, outerRadius, points) {
        let angle = TWO_PI / points;
        let halfAngle = angle / 2.0;
        let startAngle = -PI / 2; // rotate so the star points up

        pg.beginShape();
        for (let a = 0; a < TWO_PI; a += angle) {
            let outerX = x + cos(startAngle + a) * outerRadius;
            let outerY = y + sin(startAngle + a) * outerRadius;
            pg.vertex(outerX, outerY);

            let innerX = x + cos(startAngle + a + halfAngle) * innerRadius;
            let innerY = y + sin(startAngle + a + halfAngle) * innerRadius;
            pg.vertex(innerX, innerY);
        }
        pg.endShape(CLOSE);
    }
}
