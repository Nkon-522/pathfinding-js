const BOARD = document.getElementById("board")

const ROWS = document.getElementById("rows")

const COLUMNS = document.getElementById("columns")

// Creates a HTML node
function generateNode(x, y) {
    let node = document.createElement("div")
    node.className = "node"
    node.innerHTML = "x:" + x + "y:" + y 
    return node
}

// Returns string n times
function repeatString(n, str) {
    let res = ""
    for (let i = 0; i < n; i++) {
        res += str + " "
    } 
    return res
}

// Adjust the board size based on the ROWS and COLUMNS input
function adjustBoardSize() {
    let numberRows = ROWS.value
    let numberColumns = COLUMNS.value
    
    BOARD.innerHTML = "";
    BOARD.style.gridTemplateColumns = repeatString(numberColumns,"auto");

    for (let i = 0; i < numberRows; i++) {
        for (let j = 0; j < numberColumns; j++) {
            BOARD.appendChild(generateNode(i, j));
        } 
    } 
}

ROWS.oninput = () => {
    adjustBoardSize();
}

COLUMNS.oninput = () => {
    adjustBoardSize();
}

adjustBoardSize()