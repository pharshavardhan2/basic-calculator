const screen = document.querySelector(".output-screen");
let result = "";

const digitList = document.querySelectorAll(".btn.digit");

for (let digit of digitList) {
    digit.addEventListener("click", function(event) {
        if (screen.innerText === "0") {
            screen.innerText = event.target.value; 
        } else {
            screen.innerText += event.target.value;
        }
        result += event.target.value;
    });
}

const clear = document.querySelector(".clear");
clear.addEventListener("click", function() {
    screen.innerText = 0;
    result = "";
});

const back = document.querySelector(".back");
back.addEventListener("click", function() {
    if (screen.innerText !== "0") {
        screen.innerText = screen.innerText.slice(0, screen.innerText.length - 1);
        if (result.slice(-1) <= "9" && result.slice(-1) >= "0") {
            result = result.slice(0, result.length-1)
        }
    }
});

const operandList= document.querySelectorAll(".operand");
for (let operand of operandList) {
    operand.addEventListener("click", function(event) {
        result += event.target.value;
        screen.innerText = "0";
    });
}

const equal = document.querySelector(".equal");
equal.addEventListener("click", function(event) {
    result = eval(result).toString();
    screen.innerText = result;
});