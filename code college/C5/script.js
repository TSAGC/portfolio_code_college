let svar1;
let svar2;
let svar3;

function change() {
    svar1 = prompt("Enter a new value for list item 1");
    svar2 = prompt("Enter a new value for list item 2");
    svar3 = prompt("Enter a new value for list item 3");
    updateList();
}

function updateList() {
    document.getElementById("item1").innerHTML = svar1;
    document.getElementById("item2").innerHTML = svar2;
    document.getElementById("item3").innerHTML = svar3;
}