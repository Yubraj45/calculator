let numbers = document.querySelectorAll(".number");

let firstNum = document.querySelector("#num1")
let a = "";
let b = "";
let isLocked = false;


let secondNumber = document.querySelector("#num2");

let operatorButtons = document.querySelectorAll(".sign")

let sign = document.querySelector("#sign");



let equal = document.querySelector(".equal");

let solution = document.querySelector("#soln");

let answer = document.querySelector("#answer");

let power = document.querySelector("#power");


numbers.forEach(btn => {
    btn.addEventListener("click", () => {
        if (!isLocked) {

            console.log(btn.innerText);
            a = a + btn.innerText;
            firstNum.innerText = a
        }
        else {
            b = b + btn.innerText;
            console.log(b);

            secondNumber.innerText = b;
        }
    })
})


operatorButtons.forEach(Element => {
    Element.addEventListener("click", () => {
        isLocked = true;
        console.log(Element.innerText);
        c = Element.innerText
        sign.innerText = c;

        if (c === "AC") {
            firstNum.innerText = "";
            secondNumber.innerText = "";
            sign.innerText = "";
            isLocked = false;
            a = "";
            b = "";
            solution.innerText = "";
        }
    })
})



//for output
let lastAnswer = "";
let result;
equal.addEventListener("click", () => {
    let num1st = parseFloat(a);
    let num2nd = parseFloat(b);


    if (c === "+") {
        result = num1st + num2nd;
    }
    else if (c === "-") {
        result = num1st - num2nd;
    }
    else if (c === "*") {
        result = num1st * num2nd;
    }
    else if (c === "/") {
        result = num1st / num2nd;
    }
    else if (c === "%") {
        result = num1st % num2nd;
    }

    lastAnswer = result;
    solution.innerText = result;
})







answer.addEventListener("click", () => {
    if (!isLocked) {
        a = lastAnswer.toString();
        firstNum.innerText = a;
    }
    else {
        b = lastAnswer.toString();
        secondNumber.innerText = b
    }
})






