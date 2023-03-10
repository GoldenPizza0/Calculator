var n1 = "";
var n2 = "";
var operation = "";
var result = null;


function test(){
	alert("b");
}

function add(){
	operation = "+";
}

function sub(){
	operation = "-";
}

function mul(){
	operation = "x";
}

function div(){
	operation = "÷";
}

function c(){
	currentOperationScreen.textContent = '0'
	n1 = "";
	n2 = "";
	operation = "";
	result = null;
}

function operate(operator, a, b) {
  a = Number(a)
  b = Number(b)
  switch (operator){
	case '+':
	  return a + b
	case '-':
	  return a - b
	case 'x':
	  return a * b
	case '÷':
	  if (b === 0) return 0
	  else return a / b
	default:
	  return 0
  }
}

function screen(x){
	if (x == 'result'){
		var y = operate(operation, n1, n2);
		document.getElementById("currentOperationScreen").textContent = y.toString();
	}
	else {
		document.getElementById("currentOperationScreen").textContent = x.toString();
	}
}

function n(x){
	if (n1 != ""){
		n2 = x;
		screen(n2);
	}
	else {
		n1 = x;
		screen(n1);
	}
}