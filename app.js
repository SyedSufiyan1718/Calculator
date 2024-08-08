var inputValue = document.getElementById('char');
var notAllows = ["+", "/", "*",];
var operators = ["+", "/", "*", "-"];
var characters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var lastEqualAction = false;


function button(num) {

    if (inputValue.value.length === 10) {
        inputValue.style.fontSize = "30px";
    } else if (inputValue.value.length >= 15) {
        return;
    }

    if ((inputValue.value === "" || inputValue.value === "-") && (notAllows.includes(num))) {
        return;
    }

    var lastIndex = inputValue.value.slice(-1);

    if (operators.includes(lastIndex) && operators.includes(num)) {
        inputValue.value = inputValue.value.slice(0, -1)
    }

    if (inputValue.value.includes(".") && num.includes(".")) {
        return;
    }

    if (inputValue.value === "" && num === ".") {
        inputValue.value = "0";
    }

    if (lastEqualAction === true) {
        if (operators.includes(num)) {
            inputValue.value += num;
            inputValue.value = inputValue.value.slice(0, -1);
            lastEqualAction = false;
        }
        if (characters.includes(num)) {
            inputValue.value = "";
            lastEqualAction = false
        }
    }
    inputValue.value += num;

}

function lastIndexDelete() {
    inputValue.value = inputValue.value.slice(0, -1);
}

function restart() {
    inputValue.value = "";
}

function answer() {
    var beforeEqual = inputValue.value + "=";
    document.getElementById('historyParagraph1').innerHTML = beforeEqual;

    inputValue.value = eval(inputValue.value);

    var afterEqual = inputValue.value;
    document.getElementById('historyParagraph2').innerHTML = afterEqual;

    lastEqualAction = true;
    if (inputValue.value === "undefined") {
        inputValue.value = "";
    }
}

function historyBtn() {
    document.getElementById('container').style.display = "none";
    document.getElementById('memoryDiv').style.display = "block";
}

function ligthMode() {
    var mode = document.getElementById('themeCss');
    mode.href = "white-style.css";
}
function darkMode() {
    var mode = document.getElementById('themeCss');
    mode.href = "black-style.css";
}

function back() {
    document.getElementById('memoryDiv').style.display = "none";
    document.getElementById('container').style.display = "flex";
}