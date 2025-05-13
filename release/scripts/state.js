// Canvas state management
let CANVAS_WIDTH = 800;
let CANVAS_HEIGHT = 600;

// Layer state management
let layers = [];
let activeLayerIndex = 0;

// Options state management
let brushSize = 20;
let brushSlider = null;
let brushLabel = null;

// Color state management
let activeColor = "#000000";

// Tool state management
let toolManager;
