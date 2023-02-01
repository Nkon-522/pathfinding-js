import { repeatString } from "./helpers.js";
import { Node } from "./node.js";

export class Board {
    constructor() {
        this.BOARD = document.getElementById("board");
        this.ROWS = document.getElementById("rows");
        this.COLUMNS = document.getElementById("columns");

        this.rowsNumber = parseInt(this.ROWS.value);
        this.columnsNumber = parseInt(this.COLUMNS.value);

        //this.board[this.rowsNumber][this.columnsNumber]; 
        
        this.assignEventListeners();
        this.configureBoard();
    }

    configureBoard(){
        this.rowsNumber = parseInt(this.ROWS.value);
        this.columnsNumber = parseInt(this.COLUMNS.value);

        this.BOARD.innerHTML = ""
        this.BOARD.style.gridTemplateColumns = repeatString(this.columnsNumber,"auto");

        for (let i = 0; i < this.rowsNumber; i++) {
            for (let j = 0; j < this.columnsNumber; j++) {
                this.BOARD.appendChild(Node.generateNode(i, j));
            } 
        } 
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
        this.board[row][column].setStartingPoint(value);
    }

    assignEndPoint(row, column, value) {
        this.board[row][column].setEndPoint(value);
    }
}