function calculateFunction(){
    
    var price,tax,party;

    price = document.getElementById("price").value;
    tax = document.getElementById("tax").value;
    party = document.getElementById("party").value;

    let result = calculate(price,tax,party);
    $("#resultMessage").html("The total price per person is: $"+result);
    
}

function clearFunction(){

    let resultMessage = document.getElementById("resultMessage");
    resultMessage.innerHTML="Result";
    $("#price").val("");
    $("#tax").val("");
    $("#party").val("");
}

function calculate(price, tax, party) {
    let resultMessage = document.getElementById("resultMessage");
    if (price == "" && tax == "" && party == "") throw "Please enter values. It shouldn't be blank!";
    if (isNaN(price) || isNaN(tax) || isNaN(party)) throw "Value should be a number!";
    if (party <= 0 || tax <= 0 || price <= 0) throw "Value shouldn't be 0 or negative value!"
    party = parseInt(party);
    tax = parseInt(tax);
    price = parseInt(price);
    tax = tax * 0.01;
    let total = (price - (price * tax)) / party;
    return total;
}