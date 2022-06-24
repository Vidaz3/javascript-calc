//Asking the user for operation input
let op = window.prompt("What operation would you like to perform: +, -, *, /");

//Assigning the different operators to variables
op1 = "+"
op2 = "-"
op3 = "*"
op4 = "/"

//User number input
var input1 = window.prompt("Enter the first number");
var input2 = window.prompt("Enter the second number");

//Making sure decimals are operable
num1 = parseFloat(input1)
num2 = parseFloat(input2)

//Execution of operation
if(op == op1) {
    document.write(num1 + num2); 
} else if(op == op2) {
    document.write(num1 - num2);
} else if(op == op3) {
    document.write(num1 * num2);
} else if(op == op4) {
    document.write(num1 / num2);
}else {document.write("Invalid operation")}


