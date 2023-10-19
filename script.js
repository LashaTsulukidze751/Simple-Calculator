const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");
const equal = document.getElementById("equal");
const answerLabel = document.getElementById("answerLabel1"); 
const answerLabel2 = document.getElementById("ansewrLabel2"); 
const clearAll = document.getElementById("clearAll");
const clear = document.getElementById("clear"); 
const buttons = document.querySelectorAll("button");
window.addEventListener("keydown", event =>{
    console.log(event.key)
})


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
        answerLabel2.innerHTML = answerLabel.innerHTML;
        answerLabel.innerHTML = "";
    });
});

equal.addEventListener("click", () => {
    y = Number(answerLabel.textContent);
    let result = 0;
    answerLabel2.innerHTML = "";

    switch (operation) {
        case "+":
            result = x + y;
            break;
        case "-":
            result = x - y;
            break;
        case "×":
            result = x * y; // Fixed the multiplication symbol
            break;
        case "÷":
            if (y !== 0) {
                result = x / y;
            } else {
                result = "Division by zero";
            }
            break;
        default:
            result = "error!";
    }

    answerLabel.innerHTML = result;
});

clearAll.addEventListener("click", () => {
    answerLabel.innerHTML = "";
    answerLabel2.innerHTML = "";
});

clear.addEventListener("click", () => {
    answerLabel.innerText = answerLabel.innerText.slice(0, -1);
});

buttons.forEach((number)=>{
    number.addEventListener("mousedown",()=>{
        number.classList.add("clicked");
    })
    number.addEventListener("mouseout",()=>{
        number.classList.remove("clicked");
    })
    number.addEventListener("mouseup",()=>{
        number.classList.remove("clicked");
    })
})