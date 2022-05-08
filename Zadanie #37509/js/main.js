function multiply(num1, num2) {
    let result = num1 * num2;
    if (result < 0) {
        console.log('Wynik jest nieprawidłowy');
    }
    else if (result >= 0) {
        console.log('Wynik mnożenia wynosi ' + result);
    }
    return result;
}
let wynik_m = multiply(2, 4);

function add(num1, num2) {
    let result = num1 + num2;
    if (result < 0) {
        console.log('Wynik jest nieprawidłowy');
    }
    else if (result >= 0) {
        console.log('Wynik dodawania wynosi ' + result);
    }
    return result;
}
let wynik_a = add(1, 4);

function minus(num1, num2) {
    let result = num1 - num2;
    if (result < 0) {
        console.log('Wynik jest nieprawidłowy');
    }
    else if (result >= 0) {
        console.log('Wynik odejmowania wynosi ' + result);
    }
    return result;
}
let wynik_mi = minus(4, 2);