// function addRow(tableID) {

//     var table = document.getElementById(tableID);

//     var rowCount = table.rows.length;
//     var row = table.insertRow(rowCount);

//     var cell1 = row.insertCell(0);
//     var element1 = document.createElement("input");
//     element1.type = "checkbox";
//     element1.name = "chkbox[]";
//     cell1.appendChild(element1);

//     var cell2 = row.insertCell(1);
//     cell2.innerHTML = rowCount + 1;

//     var cell3 = row.insertCell(2);
//     var element2 = document.createElement("input");
//     element2.type = "text";
//     element2.name = "txtbox[]";
//     cell3.appendChild(element2);
// }

// function deleteRow(tableID) {
//     try {
//         var table = document.getElementById(tableID);
//         var rowCount = table.rows.length;

//         for (var i = 0; i < rowCount; i++) {
//             var row = table.rows[i];
//             var chkbox = row.cells[0].childNodes[0];
//             if (null != chkbox && true == chkbox.checked) {
//                 table.deleteRow(i);
//                 rowCount--;
//                 i--;
//             }


//         }
//     } catch (e) {
//         alert(e);
//     }
// }

    var arrHead = new Array();	// array for header.
    arrHead = ['', 'Party Name', 'Loading Point', 'Mode','Rakes','Boxes','Quantity'];

    // first create TABLE structure with the headers. 
    function createTable() {
        var empTable = document.createElement('table');
        empTable.setAttribute('id', 'empTable'); // table id.

        var tr = empTable.insertRow(-1);
        for (var h = 0; h < arrHead.length; h++) {
            var th = document.createElement('th'); // create table headers
            th.innerHTML = arrHead[h];
            tr.appendChild(th);
        }

        var div = document.getElementById('cont');
        div.appendChild(empTable);  // add the TABLE to the container.
    }

    // now, add a new to the TABLE.
    function addRow() {
        var empTab = document.getElementById('empTable');

        var rowCnt = empTab.rows.length;   // table row count.
        var tr = empTab.insertRow(rowCnt); // the table row.
        tr = empTab.insertRow(rowCnt);

        for (var c = 0; c < arrHead.length; c++) {
            var td = document.createElement('td'); // table definition.
            td = tr.insertCell(c);

            if (c == 0) {      // the first column.
                // add a button in every new row in the first column.
                var button = document.createElement('input');

                // set input attributes.
                button.setAttribute('type', 'button');
                button.setAttribute('value', 'Remove');

                // add button's 'onclick' event.
                button.setAttribute('onclick', 'removeRow(this)');

                td.appendChild(button);
            }
            else {
                // 2nd, 3rd and 4th column, will have textbox.
                var ele = document.createElement('input');
                ele.setAttribute('type', 'text');
                ele.setAttribute('value', '');

                td.appendChild(ele);
            }
        }
    }

    // delete TABLE row function.
    function removeRow(oButton) {
        var empTab = document.getElementById('empTable');
        empTab.deleteRow(oButton.parentNode.parentNode.rowIndex); // button -> td -> tr.
    }

    // function to extract and submit table data.
    function submit() {
        var myTab = document.getElementById('empTable');
        var arrValues = new Array();

        // loop through each row of the table.
        for (row = 1; row < myTab.rows.length - 1; row++) {
        	// loop through each cell in a row.
            for (c = 0; c < myTab.rows[row].cells.length; c++) {  
                var element = myTab.rows.item(row).cells[c];
                if (element.childNodes[0].getAttribute('type') == 'text') {
                    arrValues.push("'" + element.childNodes[0].value + "'");
                }
            }
        }
        
        // The final output.
        document.getElementById('output').innerHTML = arrValues;
        //console.log (arrValues);   // you can see the array values in your browsers console window. Thanks :-) 
    }
