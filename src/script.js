document.querySelector('#input').ariaReadOnly = true // so user cant change it input value
let input = document.getElementById('input')
const btns = document.querySelectorAll('button')
input.innerHTML = input.value
let screenValue = []
let calculatedValue = []
for (btn of btns) {
    btn.addEventListener('click', (e) => {
        let buttonText = e.target.innerHTML
        if (isNaN(buttonText) === false) {           // for gettiing numbers
            screenValue += buttonText
            calculatedValue += buttonText
            input.value = screenValue
        }
        else if (buttonText == "Reset") {           // reset button
            input.value = 0
            screenValue = []
            calculatedValue = []
        }
        else if (buttonText == "x") {               // multiply btn
            screenValue += buttonText
            input.value = screenValue
            buttonText = "*"
            calculatedValue += buttonText
            console.log(calculatedValue);
        }
        else if (buttonText == "/") {               // divide button
            screenValue += buttonText
            input.value = screenValue
            calculatedValue += buttonText
            console.log(calculatedValue);
        }
        else if (buttonText == "+") {               // add button
            screenValue += buttonText
            input.value = screenValue
            calculatedValue += buttonText
            console.log(calculatedValue);
        }
        else if (buttonText == "-") {              // minus Button
            screenValue += buttonText
            input.value = screenValue
            calculatedValue += buttonText
            console.log(calculatedValue);
        }
        else if (buttonText == ".") {              // dot Button
            screenValue += buttonText
            input.value = screenValue
            calculatedValue += buttonText
            console.log(calculatedValue);
        }
        else if (buttonText == "Del") {            // for delete button
            screenValue = screenValue.toString().substring(0, screenValue.length - 1)
            calculatedValue = calculatedValue.toString().substring(0, calculatedValue.length - 1)
            input.value = screenValue
            console.log(screenValue);
            console.log(calculatedValue);
        }
        else if (buttonText == "=") {              // for calculation and equal button
            calculatedValue = eval(calculatedValue)
            input.value = calculatedValue
            screenValue = calculatedValue
            console.log(calculatedValue)
        } else {
            // screenValue = calculatedValue
        }
    })
}
