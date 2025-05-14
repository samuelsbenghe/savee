class FillTool extends Tool {
    constructor() {
        super("Fill");
    }

    onMousePressed(pg) {
        const x = mouseX;
        const y = mouseY;

        const targetColor = pg.get(x, y);
        const fillColor = hexToRGBA(activeColor);

        if (!this.colorsMatch(targetColor, fillColor)) {
            this.floodFill(pg, x, y, targetColor, fillColor);
        }
    }

    // Originally recursively checked every pixel in the layer, this is much faster.
    // But this is still very slow for larger images
    floodFill(pg, x, y, targetColor, fillColor) {
        pg.loadPixels();
        const w = pg.width;
        const h = pg.height;

        const visited = new Set();
        const stack = [[x, y]];

        while (stack.length > 0) {
            const [cx, cy] = stack.pop();
            const key = `${cx},${cy}`;

            if (visited.has(key)) continue;
            visited.add(key);

            if (cx < 0 || cy < 0 || cx >= w || cy >= h) continue;
            if (!this.colorsMatch(pg.get(cx, cy), targetColor)) continue;

            pg.set(cx, cy, fillColor);

            stack.push([cx + 1, cy]);
            stack.push([cx - 1, cy]);
            stack.push([cx, cy + 1]);
            stack.push([cx, cy - 1]);
        }
        pg.updatePixels();
    }

    colorsMatch(c1, c2) {
        return (
            c1[0] === c2[0] &&
            c1[1] === c2[1] &&
            c1[2] === c2[2] &&
            c1[3] === c2[3]
        );
    }
}
