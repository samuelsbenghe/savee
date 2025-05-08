function toolSetup() {
    toolManager = new ToolManager();

    const brushInstance = new BrushTool();
    const eraserInstance = new EraserTool();
    const fillInstance = new FillTool();
    const textInstance = new TextTool();
    const rectangleInstance = new RectangleTool();
    const ellipseInstance = new EllipseTool();
    const starInstance = new StarTool();

    toolManager.registerTool("brush", brushInstance);
    toolManager.registerTool("eraser", eraserInstance);
    toolManager.registerTool("fill", fillInstance);
    toolManager.registerTool("text", textInstance);
    toolManager.registerTool("rectangle", rectangleInstance);
    toolManager.registerTool("ellipse", ellipseInstance);
    toolManager.registerTool("star", starInstance);
    toolManager.setTool("brush");
}
