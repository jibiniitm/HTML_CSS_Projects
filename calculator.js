function oper_add() {
    a = parseInt(document.getElementById("first").value);
    b = parseInt(document.getElementById ("second").value);
    c = a + b;
    document.getElementById("fadd").innerHTML = "SUM = " + c;
}
    
function oper_sub() { 
    a = parseInt(document.getElementById("first").value);
    b = parseInt(document.getElementById ("second").value);
    c = a - b;
    document.getElementById("fsub").innerHTML = "SUBSTRACTION = " + c;
}

function oper_mul() { 
    a = parseInt(document.getElementById("first").value);
    b = parseInt(document.getElementById ("second").value);
    c = a * b;
    document.getElementById("fmul").innerHTML = "MULTIPLICATION = " + c;
}

function oper_div() { 
    a = parseInt(document.getElementById("first").value);
    b = parseInt(document.getElementById ("second").value);
    c = a / b;
    document.getElementById("fdiv").innerHTML = "DIVISION = " + c;
}