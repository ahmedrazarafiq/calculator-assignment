document.addEventListener("DOMContentLoaded", function() {
    var addButton = document.getElementById("add");
    var subtractButton = document.getElementById("subtract");
    var multiplyButton = document.getElementById("multiply");
    var divideButton = document.getElementById("divide");
    var clearButton = document.getElementById("clear");
    var resultDisplay = document.getElementById("result");

    addButton.addEventListener("click", function() {
        calculate("+");
    });

    subtractButton.addEventListener("click", function() {
        calculate("-");
    });

    multiplyButton.addEventListener("click", function() {
        calculate("*");
    });

    divideButton.addEventListener("click", function() {
        calculate("/");
    });

    clearButton.addEventListener("click", function() {
        clearInputs();
    });

    function calculate(operation) {
        var num1 = parseFloat(document.getElementById("num1").value);
        var num2 = parseFloat(document.getElementById("num2").value);

        if (isNaN(num1) || isNaN(num2)) {
            resultDisplay.innerText = "Please enter valid numbers";
            return;
        }

        switch (operation) {
            case '+':
                resultDisplay.innerText = num1 + num2;
                break;
            case '-':
                resultDisplay.innerText = num1 - num2;
                break;
            case '*':
                resultDisplay.innerText = num1 * num2;
                break;
            case '/':
                if (num2 === 0) {
                    resultDisplay.innerText = "Cannot divide by zero";
                } else {
                    resultDisplay.innerText = num1 / num2;
                }
                break;
            default:
                resultDisplay.innerText = "Invalid operation";
        }
    }

    function clearInputs() {
        document.getElementById("num1").value = "";
        document.getElementById("num2").value = "";
        resultDisplay.innerText = "";
    }
});
