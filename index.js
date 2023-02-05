var num1;
var num2;
var sum;
var total;
function calc() {
    num1 = parseFloat(document.getElementById('num1').value);
    num2 = parseFloat(document.getElementById('num2').value);
    sum = document.getElementById('operator');
    sum = sum.options[sum.selectedIndex].text;
    switch (sum) {
        case '+':
            total = num1 + num2;
            break;
        case '-':
            total = num1 - num2;
            break;
        case '*':
            total = num1 * num2;
            break;
        case '/':
            total = num1 / num2;
            break;
    }
    document.querySelector("#output").innerHTML = total;
}












/*  document.getElementById('container').style.backgroundColor = 'lightsteelblue';
    document.getElementById('lator').style.backgroundColor = 'lightskyblue'; */




































/* const btn = () => {
    const b1 = document.querySelector('#b1').value;
    const b1 = document.querySelector('#b2').value;
} */




/* let calculation;
if (selects == "plus") {
    calculation = "+";
} else if (selects == "minus") {
    calculation = "-";
} else if (selects == "into") {
    calculation = "*";
} else if (selects == "divide") {
    calculation = "/";
} */
/* var y = document.getElementById('selects').calculation;

 function called() {
    var x = document.getElementById('d1').value;
    var y = document.getElementById('selects').calculation;
    var z = document.getElementById('d2').value;
    var sum = xyz;
    document.getElementById('b3').value = sum;
}
document.getElementById('btn').onclick = called;  */
