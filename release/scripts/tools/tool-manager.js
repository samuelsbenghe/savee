class ToolManager {
    constructor() {
        this.tools = new Map();
        this.activeTool = null;
    }

    // add tool to the map
    registerTool(name, toolInstance) {
        this.tools.set(name, toolInstance);
    }

    // setter for active tool
    setTool(name) {
        if (this.tools.has(name)) {
            this.activeTool = this.tools.get(name);
            console.log(`Tool changed to: ${name}`);
        } else {
            console.warn(`Tool "${name}" not found.`);
        }
    }

    // getter for active tool
    getActiveTool() {
        return this.activeTool;
    }
}
