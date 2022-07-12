const screen = document.querySelector(".button-result")
const buttons = document.querySelectorAll("button")
let screenValue = "";
for (item of buttons) {
    item.addEventListener('click', (event) => {
        text = event.target.innerText;
        if (text === "X") {
            text = "*";
            screenValue += text;
            screen.value = screenValue;
        }
        else if (text === "AC") {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (text === "=") {
            screen.value = eval(screenValue);
        }
        else if (text === 'Del') {
            screenValue = screenValue.substring(0, screenValue.length - 1);
            screen.value = screenValue;
        }
        else {
            screenValue += text;
            screen.value = screenValue;
        }
    })

}
