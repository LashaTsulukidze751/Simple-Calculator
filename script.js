const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");
const equal = document.getElementById("equal");
const answerLabel = document.getElementById("answerLabel1");
const answerlabel2 = document.getElementById("ansewrLabel2")
const clearAll = document.getElementById("clearAll");

let x = 0;
let y = 0;
let operation = "";

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        answerLabel.innerHTML += number.textContent;
    });
});

operations.forEach((op) => {
    op.addEventListener("click", () => {
        x = Number(answerLabel.textContent);
        operation = op.textContent;
        answerlabel2.innerHTML = answerLabel.innerHTML;
        answerLabel.innerHTML = "";
    });
});

equal.addEventListener("click", () => {
    y = Number(answerLabel.textContent);
    let result = 0;
answerlabel2.innerHTML="";
    switch (operation) {
        case "+":
            result = x + y;
            break;
        case "-":
            result = x - y;
            break;
        case "X":
            result = (x) * (y);
            break;
        case "/":
            if (y !== 0) {
                result = x / y;
            } else {
                result = "Division by zero";
            }
            break;
    }
    answerLabel.innerHTML = result;
});

clearAll.addEventListener("click",()=>{
    answerLabel.innerHTML = "";
    answerlabel2.innerHTML = ""
    
})
clear.addEventListener("click",()=>{
    answerLabel.innerText = answerLabel.innerText.slice(0, -1)  ;
    
    
})