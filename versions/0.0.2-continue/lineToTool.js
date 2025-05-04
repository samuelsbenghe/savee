function LineToTool() {
    this.icon = "assets/lineTo.jpg";
    this.name = "LineTo";

    // Give the default values for the start position of the tool and end position
    var startMouseX = -1;
    var startMouseY = -1;

    // Hold the state of drawing (holding the mouse button down)
    var drawing = false;

    this.draw = function () {
        // When mouse is pressed, run 2 functions based on startposition state.
        if (mouseIsPressed) {
            // On the first iteration, set the start position of the line and set drawing to true.
            if (startMouseX == -1) {
                startMouseX = mouseX;
                startMouseY = mouseY;
                drawing = true;
                loadPixels(); // Load the pixels of the canvas
            } else {
                // While mouse is pressed, after initial iteration, draw the line from the start position to the current mouse position.
                // On every iteration, revert changes and draw the line again.
                // In short, every iteration will always be "the second iteration".
                updatePixels();
                line(startMouseX, startMouseY, mouseX, mouseY);
            }
        } else if (drawing) {
            drawing = false;
            startMouseX = -1;
            startMouseY = -1;
        }
    };
}
