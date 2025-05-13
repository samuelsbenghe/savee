function toolSetup() {
    toolManager = new ToolManager();

    // create a singleton instance of each tool
    const brushInstance = new BrushTool();
    const mirrorInstance = new MirrorTool();
    const sprayInstance = new SprayTool();
    const eraserInstance = new EraserTool();
    const fillInstance = new FillTool();
    const textInstance = new TextTool();
    const rectangleInstance = new RectangleTool();
    const ellipseInstance = new EllipseTool();
    const starInstance = new StarTool();

    // register each tool with toolManager
    toolManager.registerTool("brush", brushInstance);
    toolManager.registerTool("mirror", mirrorInstance);
    toolManager.registerTool("spray", sprayInstance);
    toolManager.registerTool("eraser", eraserInstance);
    toolManager.registerTool("fill", fillInstance);
    toolManager.registerTool("text", textInstance);
    toolManager.registerTool("rectangle", rectangleInstance);
    toolManager.registerTool("ellipse", ellipseInstance);
    toolManager.registerTool("star", starInstance);
    toolManager.setTool("brush");
}
