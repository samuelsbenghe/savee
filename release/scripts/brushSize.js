let brushSize = 20; //default size

document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById("brush-size-slider");
    const label = document.getElementById("brush-size-label");

    if (slider) {
        brushSize = parseInt(slider.value, 10);

        //Update brushSize on input change
        slider.addEventListener("input", (e) => {
            brushSize = parseInt(e.target.value, 10);
            label.textContent = `${brushSize}px`;
        });
    }
});

//export for access in other files
window.getBrushSize = () => brushSize;
