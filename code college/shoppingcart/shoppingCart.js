var nums = [1, 2, 3, 4];
var items = ["Coke", "Kit Kat", "Bar One", "Fanta"];
var prices = [7.5, 9.5, 8.5, 7.5];
var quantities = [0, 0, 0, 0];
var totals = [0.0, 0.0, 0.0, 0.0];
var totalOrderAmt = 0;
let grandTotal = 0;

function add_selection(x) {
    console.log(x);
    quantities[x] = quantities[x] + 1;
    // totals[x] = prices[x] * quantities[x];
    totalOrderAmt += prices[x];
    totals[x] = quantities[x] * prices[x];

    display_all();
}

function remove_selection(x) {
    console.log(x);
    if (quantities[x] > 0) {
        quantities[x] = quantities[x] - 1;
        // totals[x] = prices[x] * quantities[x];
        totalOrderAmt += prices[x];
        totals[x] = quantities[x] * prices[x];
        display_all();
    } else {
        alert(`cannot accept negative values`);
    }
}

function calculate_total() {
    for (let index = 0; index < quantities.length; index++) {
        totals[index] = quantities[index] * prices[index];
        // totalOrderAmt += totals[index];
        console.log("==============================================================================================");
        console.log(`quantitys = ${quantities[index]}`);
        console.log(`prices = ${prices[index]}`)
        console.log(totals[index]);
        console.log("==============================================================================================");
        grandTotal += totals[index];
    }
    console.log(grandTotal);

    let totalprint = document.getElementById("total");
    totalprint.innerHTML = `total : ${grandTotal}`;
}



function display_all() {



    var myTable = "<table><th style='width: 100px; color: red; text-align: right;'>Num</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Item</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Price</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Quantity</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Total</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Add</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Add</th>";

    for (i = 0; i < items.length; i++) {
        myTable += "<tr><td style='width: 100px; text-align: right;'>" + nums[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + items[i] + "</td><";
        myTable += "<td style='width: 100px; text-align: right;'>" + prices[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + quantities[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + totals[i] + "</td>";
        myTable += "<td><button onclick='add_selection(" + i + ")'>Add</button></td>";
        myTable += "<td><button onclick='remove_selection(" + i + ")'>remove</button></td>";
    }

    myTable += "</table>";
    // myTable += "<br/><br/><p>Total: " + totalOrderAmt + "</p>";



    // document.write(myTable);
    document.getElementById("demo").innerHTML = myTable;


}

window.onload = function () {
    display_all();
}

function check_out() {
    let totalAmount = grandTotal;

    let receiptContent = `Receipt
----------------------------
Total: $${totalAmount.toFixed(2)}
Date: ${new Date().toLocaleDateString()}`;

    let blob = new Blob([receiptContent], { type: 'text/plain' });

    let downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = 'receipt.txt';
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);

    downloadLink.click();

    URL.revokeObjectURL(blob);
    document.body.removeChild(downloadLink);
}