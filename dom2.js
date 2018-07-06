// External Javascript File

/*
Write a JavaScript function to add rows to a table (use html shown in above section).
• Add event listener for click to button which executes addRow function when clicked
• Code a function addRow, which adds new row with 2 cells. (hint: use insertRow and
insertCell methods)
*/

function addRow() {
    // -- element holds Table element by its ID
    var element = document.getElementById("dynamicTable");

    // -- insertRow method will create and insert a new row to table of it's index
    var row = element.insertRow(0);
    // -- insertCell create TDs / Colomns in the Row
    var col1 = row.insertCell(0);
    var col2 = row.insertCell(1);

    // -- createTextNode method create a text stored into node variable 
    var node1 = document.createTextNode(`Cell 1`);
    col1.appendChild(node1);
    var node2 = document.createTextNode(`Cell 2`);
    col2.appendChild(node2);
    
    // -- sets some style property to table
    table.style.textAlign = "center";
    table.style.cellpadding ="5px";
}

// -- a function call and create Listener  for Click event
var rowAdd = document.getElementById("AddRow");
rowAdd.addEventListener('click', addRow);
