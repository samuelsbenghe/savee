// Layer state management
let layers = []; // Array to hold layers
let activeLayerIndex = 0; // Index of the active layer

// Options state management
let brushSize = 20; // Default brush size
let brushSlider = null; // Slider for brush size
let brushLabel = null; // Label for brush size

// Color state management
let activeColor = "#000000"; // Default color

// Tool state management
let toolManager; // Instance of ToolManager to manage tools
let brushToolBtn;
let eraserToolBtn;
let fillToolBtn;
let textToolBtn;
let rectangleToolBtn;
let ellipseToolBtn;
let starToolBtn;
