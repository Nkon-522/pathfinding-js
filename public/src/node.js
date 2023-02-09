export class Node {
    constructor(x, y) {
        this.startingPoint = false;
        this.endPoint = false;
        this.x = x;
        this.y = y;
        this.weight = 0;
        this.wall = false;
        this.id = x+"-"+y;
        this.html;
    }

    getId() {
        return this.id;
    }

    setHtml(htmlContent){
        this.html = htmlContent;
    }

    getHtml(){
        return this.html;
    }

    setStartingPoint(value) {
        this.startingPoint = value;
        if (this.startingPoint) {
            document.getElementById(this.id).className = "node start"
        } else {
            document.getElementById(this.id).className = "node"
        }
    }

    setEndPoint(value) {
        this.endPoint = value;
        if (this.endPoint) {
            document.getElementById(this.id).className = "node end"
        } else {
            document.getElementById(this.id).className = "node"
        }
    }

    static generateNode(x, y) {
        let node = new Node(x, y);
        let htmlContent = document.createElement("div");
        htmlContent.className = "node";
        htmlContent.id = node.id;
        htmlContent.innerHTML = "x:" + x + "y:" + y;
        node.setHtml(htmlContent);
        return node
    }
}