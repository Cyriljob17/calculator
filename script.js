let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
/*
DEFINE display AS the element with ID 'display'

FUNCTION appendToDisplay(value):
    APPEND value to the current value of display

FUNCTION clearDisplay():
    SET the value of display to an empty string

FUNCTION calculate():
    TRY:
        SET the value of display to the result of evaluating the current value of display
    CATCH error:
        SET the value of display to 'Error' */