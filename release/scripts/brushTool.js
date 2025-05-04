// brushTool.js
let prevX = null;
let prevY = null;
let brushSize = 20;

function brushTool() {
    if (mouseIsPressed && mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
        noStroke();
        fill(255);

        if (prevX !== null && prevY !== null) {
            let steps = int(dist(mouseX, mouseY, prevX, prevY));
            for (let i = 0; i <= steps; i++) {
                let x = lerp(prevX, mouseX, i / steps);
                let y = lerp(prevY, mouseY, i / steps);
                ellipse(x, y, brushSize, brushSize);
            }
        } else {
            ellipse(mouseX, mouseY, brushSize, brushSize);
        }

        prevX = mouseX;
        prevY = mouseY;
    } else {
        prevX = null;
        prevY = null;
    }
}
