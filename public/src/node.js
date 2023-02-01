export class Node {
    constructor(x, y) {
        this.startingPoint = false;
        this.endPoint = false;
        this.x = x;
        this.y = y;
        this.weight = 0;
        this.wall = false;
    }

    setStartingPoint(value) {
        this.startingPoint = value;
    }

    setEndPoint(value) {
        this.endPoint = value;
    }

    static generateNode(x, y) {
        let node = document.createElement("div")
        node.className = "node"
        node.innerHTML = "x:" + x + "y:" + y 
        return node
    }
}