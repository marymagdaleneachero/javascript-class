

const form = document.getElementById('chickForm');

//form handling
form.addEventListener('submit', function (event) {
    event.preventDefault();
    
    const name = document.getElementById('farmerName').value.trim();
    const age = Number(document.getElementById('age').value);
    const quantity = Number(document.getElementById('quantity').value);
    const type = document.getElementById('chickType').value;
    const errorMsg = document.getElementById('errorMsg');
    errorMsg.textContent = "";

    //basic validation

    if (!name || !type) {
        errorMsg.textContent = "Please fill out all the fields";
        return;
    }

    if (age < 20 || age > 30) {
        errorMsg.textContent = "Age must be between 20 and 30";
        return;
    }

    if (quantity < 100 || quantity > 500) {
        errorMsg.textContent = "quantity should be between 100 and 500";
        return;
    }


    //save to local
    saveToLocalStorage();

    addToTable(name, age, type, quantity);
    table.reset();
});

function saveToLocalStorage(){

    
}


//table handling
function addToTable(name, age, type, quantity) {
    const table = document.getElementById('tb1').getElementsByTagName('tbody')[0]

    let row = table.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    cell1.textContent = name;
    cell2.textContent = age;
    cell3.textContent = type;
    cell4.textContent = quantity;

}