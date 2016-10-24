/**
 * Created by Jacek on 2016-01-11.

 ## Ćwiczenie 3
 Zajrzyj do pliku cwiczenie3.js - jest tam przykładowa funkcja która oblicza proste równania. Niestety nie działa ona dobrze - znajdź błąd i go napraw tak żeby funkcja działała.
 Napisz dodatkowe testy żeby sprawdzić czy wszystkie przypadki działają.
 */


function myEval(a, b, operation) {
    var result = 0;
    switch (operation) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '/':
            if (b != 0) {
                result = a / b;
            } else {
                console.log("this is pointless...");
            }
            break;
        case '*':
            if (b != 0) {
                result = a * b;
            } else {
                console.log("this is pointless...");
            }
            break;
        case '%':
            result = a % b;
            break;
        case '^':
            result = Math.pow(a, b);
            break;
        default:
            console.log("unknown operation");

    }
    return result;
}

// math.pow(podstawa, wykładnik)
// podstawa - liczba podnoszona do potęgi
// wykładnik - wykładnik potęgi, do której podnoszona jest liczba podstawa

console.log(" 2 + 4 = " + myEval(2, 4, "+"));
console.log(" 5 - 2 = " + myEval(5, 2, "-"));
console.log(" 4 ^ 8 = " + myEval(4, 8, "^"));
console.log(" 8 / 2 = " + myEval(8, 2, "/"));
console.log(" 3 * 4 = " + myEval(3, 4, "*"));
console.log(" 8 % 4 = " + myEval(8, 4, "%"));
console.log(" 8 ^ 2 = " + myEval(8, 2, "^"));
