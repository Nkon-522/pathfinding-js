import { repeatString } from "./helpers.js";
import { Node } from "./node.js";

export class Board {
    constructor() {
        this.BOARD = document.getElementById("board");
        this.ROWS = document.getElementById("rows");
        this.COLUMNS = document.getElementById("columns");

        this.rowsNumber = parseInt(this.ROWS.value);
        this.columnsNumber = parseInt(this.COLUMNS.value);

        this.board = []; 
        
        this.startingPointX = 0;
        this.startingPointY = 0;

        this.endPointX = this.rowsNumber-1;
        this.endPointY = this.columnsNumber-1;

        this.assignEventListeners();
        this.configureBoard();
    }

    configureBoard(){
        this.board = [];
        
        this.rowsNumber = parseInt(this.ROWS.value);
        this.columnsNumber = parseInt(this.COLUMNS.value);

        this.BOARD.innerHTML = "";
        this.BOARD.style.gridTemplateColumns = repeatString(this.columnsNumber,"auto");

        for (let i = 0; i < this.rowsNumber; i++) {
            let row = [];
            for (let j = 0; j < this.columnsNumber; j++) {
                let node = Node.generateNode(i,j);
                row.push(node);
                this.BOARD.appendChild(node.getHtml());
            } 
            this.board.push(row);
        }
        this.assignStartingPoint(0, 0, true);
        this.assignEndPoint(this.rowsNumber-1, this.columnsNumber-1, true);
    }

    assignEventListeners(){
        this.ROWS.oninput = () => {
            this.configureBoard();
        }
        this.COLUMNS.oninput = () => {
            this.configureBoard();
        } 
    }

    assignStartingPoint(row, column, value) {
        this.board[this.startingPointX][this.startingPointY].setStartingPoint(!value);
        this.startingPointX = row;
        this.startingPointY = column;
        this.board[this.startingPointX][this.startingPointY].setStartingPoint(value);
    }

    assignEndPoint(row, column, value) {
        if (this.endPointX < row && this.endPointY < column) {
            this.board[this.endPointX][this.endPointY].setEndPoint(!value);
        }
        this.endPointX = row;
        this.endPointY = column;
        this.board[this.endPointX][this.endPointY].setEndPoint(value);
    }
}