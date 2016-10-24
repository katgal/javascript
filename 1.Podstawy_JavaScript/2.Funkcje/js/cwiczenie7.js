/*## Ćwiczenie 7
Napisz funkcję ```calculateTip(amount, raiting)```, która będzie przyjmować dwa argumenty - kwotę do zapłaty i opis słowny obsługi.
Jeśli opis jest taki jak zdefiniowano poniżej, funkcja ma zwracać kwotę napiwku, w przeciwnym przypadku, jeśli opis jest nieznany funkcja powinna zwracać napis "Opis nieczytelny".

Opis może przyjmować następujące wartości:
"Bardzo dobra obsluga" => 25% napiwku,
"Dobra obsluga" => 20% napiwku,
"Średnia obsluga" =>15% napiwku,
"Zła obsluga" => 0% napiwku.

Przykład:
```
input -> 100, "Bardzo dobra obsluga"
output -> 25
```
*/

function calculateTip(amount, raiting) {
    if (raiting === "Bardzo dobra obsluga") {
        return amount * 0, 25 + " " + "zl";
    } else if (raiting === "Dobra obsluga") {
        return amount * 0, 20 + " " + "zl";
    } else if (raiting === "Średnia obsluga") {
        return amount * 0, 15 + " " + "zl";
    } else if (raiting === "Zla obsluga") {
        return amount * 0 + " " + "zl";
    } else {
        console.log("Opis nieczytelny");
    }
}

calculateTip(100, "Bardzo dobra obsluga");
// "25 zl"
calculateTip(80, "Dobra obsluga");
// "20 zl"
calculateTip(100, "Zla obsluga");
// "0 zl"
calculateTip(100, "bleh");
// Opis nieczytelny
