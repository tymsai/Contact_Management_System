var selectedRow = null
/* ---- Driver ---- */
function user_data() {
    if (validate()) {
        console.log("if valid is true");
        var formData = readFormData();
        if (selectedRow == null)
        insertNewRecord(formData);
        else
        updateRecord(formData);
        resetForm();
    }
}

/* ---- Deletion ---- */
function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("contactlist").deleteRow(row.rowIndex);
        resetForm();
    }
}

/* ----- Updation & Edit---- */
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("username").value = selectedRow.cells[0].innerHTML;
    document.getElementById("number").value = selectedRow.cells[1].innerHTML;
    document.getElementById("address").value = selectedRow.cells[2].innerHTML;
    document.getElementById("email").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.username;
    selectedRow.cells[1].innerHTML = formData.number;
    selectedRow.cells[2].innerHTML = formData.address;
    selectedRow.cells[3].innerHTML = formData.email;
}

/* ---- Inserts a new record ---- */
function insertNewRecord(new_entry) {
    console.log("inserting a record");
    var table = document.getElementById("contactlist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = new_entry.username;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = new_entry.number;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = new_entry.address;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = new_entry.email;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a class="edits" onClick="onEdit(this)"><img class="pen" src="./edit.png"></a>
                       <a class="edits" onClick="onDelete(this)"><img class="pen" src="./delete.png">
                       </a>`;
}

/* ---- Gets the input from user ---- */
function readFormData() {
    console.log("reading input data");
    var formData = {};
    formData["username"] = document.getElementById("username").value;
    formData["number"] = document.getElementById("number").value;
    formData["address"] = document.getElementById("address").value;
    formData["email"] = document.getElementById("email").value;
    return formData;
}

/* ---- Validation ---- */
function validate() {
    isValid = true;
    if(document.getElementById("username").value == "") {
        isValid = false;
        console.log("invalid");
        alert("Enter the name of Contact");
    }
    else {
        isValid = true;
        console.log("valid");
    }
    return isValid;
}

function resetForm() {
    document.getElementById("username").value = "";
    document.getElementById("number").value = "";
    document.getElementById("address").value = "";
    document.getElementById("email").value = "";
    selectedRow = null;
}
