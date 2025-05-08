// Layer Management
function layerSetup() {
    // Create 5 transparent layers
    for (let i = 0; i < 5; i++) {
        let pg = createGraphics(width, height);
        pg.clear(); // make transparent
        layers.push(pg);
    }
    for (let i = 0; i < 5; i++) {
        document
            .getElementById(`layer${i + 1}`)
            .addEventListener("click", () => {
                // Remove selected class from all layer buttons
                for (let j = 0; j < 5; j++) {
                    document
                        .getElementById(`layer${j + 1}`)
                        .classList.remove("layer-selected");
                }
                // Add selected class to active layer button
                document
                    .getElementById(`layer${i + 1}`)
                    .classList.add("layer-selected");
                activeLayerIndex = i;
                console.log(`Switched to layer ${i + 1}`);
            });
    }
    // Set initial active layer
    document.getElementById("layer1").classList.add("layer-selected");
}

function optionsSetup() {
    // Store element references
    brushSlider = document.getElementById("brush-size-slider");
    brushLabel = document.getElementById("brush-size-label");

    // Set brush size state and label to brushSlider value
    brushSlider.addEventListener("input", function () {
        brushSize = parseInt(this.value);
        brushLabel.textContent = `${brushSize}px`;
        console.log(`Brush size set to ${brushSize}px`);
    });

    // Setup color palette buttons
    document.querySelectorAll(".color-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            // Remove active class from all color buttons
            document
                .querySelectorAll(".color-btn")
                .forEach((b) => b.classList.remove("active"));
            // Add active class to clicked button
            btn.classList.add("active");
            // Update current color based on clicked button
            activeColor = btn.getAttribute("data-color");
            console.log(`Color set to ${activeColor}`);
        });
    });

    // Set default color to white
    activeColor = "#ffffff";
    document
        .querySelector(".color-btn[data-color='#ffffff']")
        .classList.add("active");
}

// Call in setup() in sketch.js
function uiSetup() {
    // Download Button
    select("#exportBtn").mousePressed(() => {
        var uuid = self.crypto.randomUUID();
        saveCanvas(canvas, "savee_" + uuid, "png");
        console.info("Canvas saved as PNG with UUID: " + uuid);
    });

    // Tool Buttons
    brushToolElement = document.getElementById("brushToolBtn");
    eraserToolElement = document.getElementById("eraserToolBtn");
    fillToolElement = document.getElementById("fillToolBtn");
    textToolElement = document.getElementById("textToolBtn");
    rectangleToolElement = document.getElementById("rectangleToolBtn");
    ellipseToolElement = document.getElementById("ellipseToolBtn");
    starToolElement = document.getElementById("starToolBtn");

    // Add event listeners to tool buttons
    brushToolElement.addEventListener("click", () => {
        removeActiveClass();
        brushToolElement.classList.add("tool-selected");
        toolManager.setTool("brush");
    });

    eraserToolElement.addEventListener("click", () => {
        removeActiveClass();
        eraserToolElement.classList.add("tool-selected");
        toolManager.setTool("eraser");
    });

    fillToolElement.addEventListener("click", () => {
        removeActiveClass();
        fillToolElement.classList.add("tool-selected");
        toolManager.setTool("fill");
    });

    textToolElement.addEventListener("click", () => {
        removeActiveClass();
        textToolElement.classList.add("tool-selected");
        toolManager.setTool("text");
    });

    rectangleToolElement.addEventListener("click", () => {
        removeActiveClass();
        rectangleToolElement.classList.add("tool-selected");
        toolManager.setTool("rectangle");
    });

    ellipseToolElement.addEventListener("click", () => {
        removeActiveClass();
        ellipseToolElement.classList.add("tool-selected");
        toolManager.setTool("ellipse");
    });

    starToolElement.addEventListener("click", () => {
        removeActiveClass();
        starToolElement.classList.add("tool-selected");
        toolManager.setTool("star");
    });

    layerSetup(); // Call layer setup function
    optionsSetup(); // Call options setup function
}

function removeActiveClass() {
    // Remove active class from all tool buttons
    brushToolElement.classList.remove("tool-selected");
    eraserToolElement.classList.remove("tool-selected");
    fillToolElement.classList.remove("tool-selected");
    textToolElement.classList.remove("tool-selected");
    rectangleToolElement.classList.remove("tool-selected");
    ellipseToolElement.classList.remove("tool-selected");
    starToolElement.classList.remove("tool-selected");
}
