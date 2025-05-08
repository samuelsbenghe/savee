class ToolManager {
    constructor() {
        this.tools = new Map();
        this.activeTool = null;
    }

    registerTool(name, toolInstance) {
        this.tools.set(name, toolInstance);
    }

    setTool(name) {
        if (this.tools.has(name)) {
            this.activeTool = this.tools.get(name);
            console.log(`Tool changed to: ${name}`);
        } else {
            console.warn(`Tool "${name}" not found.`);
        }
    }

    getActiveTool() {
        return this.activeTool;
    }
}
