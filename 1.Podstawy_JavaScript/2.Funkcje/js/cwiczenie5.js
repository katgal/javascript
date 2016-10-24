/* ## Ćwiczenie 5
Napisz funkcję ```rentCost(days)```, która będzie pobierać liczbę dni jako argument, a następnie wyliczać koszt wynajmu pokoju według podanego wzoru:
Wynajem trwa 1 dzień - koszt pokoju 200zł/dzień
Wynajem trwa 2-3 dni - koszt pokoju 180zł/dzień
Wynajem trwa 4-7 dni - koszt pokoju 160zł/dzień
Wynajem trwa 8+ dni - koszt pokoju 150zł/dzień.

Dodatkowo za każdy pełny tydzień przysługuje 50zł zniżki. Do wyliczenia pełnych tygodni użyj poniższego kodu:
```
var numbersOfWeeks = Math.floor(days / 7); //Math.floor jest funkcją która zaokrągla liczbę w dół.
```
Przykład:
```
input -> 8
output -> 1150
```
*/

function rentCost(days) {
    if (days >= 0) {
        var numbersOfWeeks = Math.floor(days / 7);
        if (days <= 1) {
            return days * 200 + "zł";
        } else if ((days >= 2) && (days <= 3)) {
            return days * 180 + "zł";
        } else if ((days >= 4) && (days <= 6)) {
            return days * 160 + "zł";
        } else if (days <= 7) {
            return (days * 160) - (numbersOfWeeks * 50) + "zł";
        } else {
            return (days * 150) - (numbersOfWeeks * 50) + "zł";
        }
    } else {
        return 0;
    }
}
rentCost(8);
rentCost(15);
rentCost(5);
