var keys = document.querySelectorAll('#calc span');
var operators = ['+', '-', 'x', '÷'];
var decimalAdded = false;

for (var i = 0; i < keys.length; i++) {
    keys[i].onclick = function(e) {
        var input = document.querySelector('.display');
        var inputVal = input.innerHTML;
        var btnVal = this.innerHTML;
                                                                                                                              /*display {border-radius: 12px;transition: .1s all ease-in-out;height: 60px;ine-height: 60px;text-align: right;padding-right: 20px;width: 100%;font-size: 32px;letter-spacing: 4px;}.calculator {box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);display: grid;grid-template-columns: 1fr 1fr 1fr 1fr;grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;grid-template-areas: "toggle toggle toggle toggle" "display display display display" "c signed percent divide" "seven eight nine times" "four five six minus" "one two three plus" "zero zero decimal equals"*/

        if (btnVal == 'C') {
            input.innerHTML = '';
            decimalAdded = false;
        } else if (btnVal == '=') {
            var equation = inputVal;
            var lastChar = equation[equation.length - 1];

            equation = equation.replace(/x/g, '*').replace(/÷/g, '/');

            if (operators.indexOf(lastChar) > -1 || lastChar == '.')
                equation = equation.replace(/.$/, '');

            if (equation)
                input.innerHTML = eval(equation);

            decimalAdded = false;
        } else if (operators.indexOf(btnVal) > -1) {
            var lastChar = inputVal[inputVal.length - 1];

            if (inputVal != '' && operators.indexOf(lastChar) == -1)
                input.innerHTML += btnVal;

            else if (inputVal == '' && btnVal == '-')
                input.innerHTML += btnVal;


            if (operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
                input.innerHTML = inputVal.replace(/.$/, btnVal);
            }

            decimalAdded = false;
        } else if (btnVal == '.') {
            if (!decimalAdded) {
                input.innerHTML += btnVal;
                decimalAdded = true;
            }
        } else {
            input.innerHTML += btnVal;
        }

        // prevent page jumps
        e.preventDefault();
    }
}

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}
                                                                                                                              /*display {border-radius: 12px;transition: .1s all ease-in-out;height: 60px;ine-height: 60px;text-align: right;padding-right: 20px;width: 100%;font-size: 32px;letter-spacing: 4px;}.calculator {box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);display: grid;grid-template-columns: 1fr 1fr 1fr 1fr;grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;grid-template-areas: "toggle toggle toggle toggle" "display display display display" "c signed percent divide" "seven eight nine times" "four five six minus" "one two three plus" "zero zero decimal equals"*/

toggleSwitch.addEventListener('change', switchTheme, false);

     