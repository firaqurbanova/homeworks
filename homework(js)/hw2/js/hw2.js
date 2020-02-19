let num1 = +prompt("First number");
let num2 = +prompt("Second number");
let op;

do {
    op = prompt("Please input operator: +, -, *, /");
} while (!(op === "+" || op === "-" || op === "*" || op === "/"));

function calc(a, b, oper) {
    switch (oper) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        
    }
}
console.log(calc(num1, num2, op));
