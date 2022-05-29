const AC = document.querySelector(".ac");
const DEL = document.querySelector(".del");
const SLASH = document.querySelector(".slash");
const MULTIPLY = document.querySelector(".multiply");
const SEVEN = document.querySelector(".seven");
const EIGHT = document.querySelector(".eight");
const NINE = document.querySelector(".nine");
const MINUS = document.querySelector(".minus");
const FOUR = document.querySelector(".four");
const FIVE = document.querySelector(".five");
const SIX = document.querySelector(".six");
const PLUS = document.querySelector(".plus");
const ONE = document.querySelector(".one");
const TWO = document.querySelector(".two");
const THREE = document.querySelector(".three");
const ZERO = document.querySelector(".zero");
const DOT = document.querySelector(".dot");
const ENTER = document.querySelector(".enter");

let time = 100;

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        calc.txt.value = "";
        AC.classList.add('active');
        setTimeout("AC.classList.remove('active')", time);
    }
    if (e.key === "Backspace") {
        calc.txt.value = calc.txt.value.substr(0, calc.txt.value.length - 1);
        DEL.classList.add('active');
        setTimeout("DEL.classList.remove('active')", time);
    }
    if (e.key === "/") {
        calc.txt.value += "/";
        SLASH.classList.add('active');
        setTimeout("SLASH.classList.remove('active')", time);
    }
    if (e.key === "*") {
        calc.txt.value += "*";
        MULTIPLY.classList.add('active');
        setTimeout("MULTIPLY.classList.remove('active')", time);
    }
    if (e.key === "7") {
        calc.txt.value += "7";
        SEVEN.classList.add('active');
        setTimeout("SEVEN.classList.remove('active')", time);
    }
    if (e.key === "8") {
        calc.txt.value += "8";
        EIGHT.classList.add('active');
        setTimeout("EIGHT.classList.remove('active')", time);
    }
    if (e.key === "9") {
        calc.txt.value += "9";
        NINE.classList.add('active');
        setTimeout("NINE.classList.remove('active')", time);
    }
    if (e.key === "-") {
        calc.txt.value += "-";
        MINUS.classList.add('active');
        setTimeout("MINUS.classList.remove('active')", time);
    }
    if (e.key === "4") {
        calc.txt.value += "4";
        FOUR.classList.add('active');
        setTimeout("FOUR.classList.remove('active')", time);
    }
    if (e.key === "5") {
        calc.txt.value += "5";
        FIVE.classList.add('active');
        setTimeout("FIVE.classList.remove('active')", time);
    }
    if (e.key === "6") {
        calc.txt.value += "6";
        SIX.classList.add('active');
        setTimeout("SIX.classList.remove('active')", time);
    }
    if (e.key === "+") {
        calc.txt.value += "+";
        PLUS.classList.add('active');
        setTimeout("PLUS.classList.remove('active')", time);
    }
    if (e.key === "1") {
        calc.txt.value += "1";
        ONE.classList.add('active');
        setTimeout("ONE.classList.remove('active')", time);
    }
    if (e.key === "2") {
        calc.txt.value += "2";
        TWO.classList.add('active');
        setTimeout("TWO.classList.remove('active')", time);
    }
    if (e.key === "3") {
        calc.txt.value += "3";
        THREE.classList.add('active');
        setTimeout("THREE.classList.remove('active')", time);
    }
    if (e.key === "0") {
        calc.txt.value += "0";
        ZERO.classList.add('active');
        setTimeout("ZERO.classList.remove('active')", time);
    }
    if (e.key === "." || e.code === "NumpadDecimal") {
        calc.txt.value += ".";
        DOT.classList.add('active');
        setTimeout("DOT.classList.remove('active')", time);
    }
    if (e.key === "Enter") {
        calc.txt.value = eval(calc.txt.value);
        if (calc.txt.value === "undefined") {
            calc.txt.value = ""
        }
        ENTER.classList.add('active');
        setTimeout("ENTER.classList.remove('active')", time);
    }
});

document.addEventListener("click", () => {
    if (calc.txt.value === "undefined") {
        calc.txt.value = ""
    }
});