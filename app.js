const main = document.querySelector(".global");
const screen = document.querySelector(".ecran");
const keys = main.querySelector(".pave");
const calculator = {
    on: false,
    operator: {
        sign: null,
        hasSecondNum: false
    },
    displayedNum: "",
    secondNum: ""
};

keys.addEventListener("click", (e) => {

    if (e.target.matches('button')) {

        var key = e.target;
        var action = (key.dataset.action != undefined) ? key.dataset.action : false;
        var keyContent = key.textContent;
        var displayedNum = screen.textContent;

        //if the on button is hitted
        if (action === "on") {
            Display(0);
            calculator.on = true;
        }
        //if the off button is hitted
        if (action === "off") {
            Display("");
            calculator.on = false;
        }
        //if the calculator is on and we have not hit a operator digit then we concate digits
        if (action === false && calculator.on && !calculator.operator.hasSecondNum) {
            var num = (displayedNum == 0) ? keyContent : displayedNum + keyContent;
            Display(num);
        }
        //if the calculator is on and the operator we've hitted is waiting for a second number
        if (action === false && calculator.on && calculator.operator.hasSecondNum) {
            var secnum = (displayedNum == 0) ? keyContent : displayedNum + keyContent;
            Display(secnum);
            calculator.secondNum = (secnum === undefined || secnum === "") ? 0 : secnum;
        }
        //if the add button is hitted
        if (action === "add" && calculator.on) {
            calculator.displayedNum = displayedNum;
            displayedNum = 0;
            calculator.operator.sign = "+";
            calculator.operator.hasSecondNum = true;

            if (calculator.displayedNum != undefined && calculator.secondNum != undefined && calculator.secondNum !== "") {
                var sum = parseInt(calculator.displayedNum) + parseInt(calculator.secondNum);
                Display(sum);
            }

            console.log(displayedNum);
            console.log(calculator);
        }
        //if the equal button is hitted
        if (action === "calculate" && calculator.on) {
            console.log(action);
            console.log(status);
            console.log(calculator);
        }
    }
}, false);

function Display(argument) {
    screen.textContent = argument;
}