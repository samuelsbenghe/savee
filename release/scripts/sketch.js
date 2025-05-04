let currentTool = "brush"; //current selected tool
let fillTriggered = false;
let prevX = null;
let prevY = null;
let brushSize = 20; //deafult size
let currentColor = "#ffffff"; //default white

document.addEventListener('DOMContentLoaded', function() {
    const toolButtons = document.querySelectorAll('.tool-btn');
    
    toolButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove selected class from all buttons
            toolButtons.forEach(btn => {
                btn.classList.remove('tool-selected');
                btn.classList.add('hover:bg-gray-800');
                btn.classList.remove('bg-gray-800');
            });
            
            // Add selected class to clicked button
            this.classList.add('tool-selected');
            this.classList.remove('hover:bg-gray-800');
        });
    });
    
    // Initialize with brush selected
    document.getElementById('brush').click();
});

function setup() {

    document.getElementById("fill-tool").addEventListener("click", () => {
        currentTool = "fill";
    });
    
    // Create canvas
    let canvasContainer = document.getElementById("canvas");
    let canvas = createCanvas(800, 600);
    canvas.parent(canvasContainer);

    // Set background color
    background(50);

    //slider DOM interaction
    const brushSlider = document.getElementById("brush-size-slider");
    const brushLabel = document.getElementById("brush-size-label");

    brushSlider.addEventListener("input", function () {
        brushSize = parseInt(this.value);
        brushLabel.textContent = `${brushSize}px`;
    });
}

// Function to update the current color (called from the color palette)
window.updateBrushColor = function(color) {
    currentColor = color;
};

function draw() { 
    // This function runs continuously
    // We'll leave it mostly empty for now as this is just the UI layout

    // If mouse is pressed, draw a circle at mouse position
    if (
        mouseIsPressed &&
        mouseX > 0 &&
        mouseX < width &&
        mouseY > 0 &&
        mouseY < height
    ) {
        if (currentTool === "brush") {
            noStroke();
            fill(currentColor);

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
        } else if (currentTool === "fill") {
            background(currentColor); // fills with white
            fillTriggered = true;
        }
    } else {
        prevX = null;
        prevY = null;
        fillTriggered = false;
    }
}