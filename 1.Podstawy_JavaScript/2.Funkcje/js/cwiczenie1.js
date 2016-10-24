/* ## Ćwiczenie 1
Napisz funkcję miksującą o nazwie ```miksowanie```, która jako argument będzie przyjmowała napis.
Zadaniem funkcji jest zwrócenie tego napisu, ale poprzedzonego słowem ```zmiksowana ```. Funkcja ma zwracać nowo powstały napis (poprzez ```return```).
Następnie wypisz w konsoli to co zwróciła ta funkcja.

Przykład:
```
input -> "marchewka"
output -> "zmiksowana marchewka"

*/

var argument = "marchewka"

function miksowanie(argument) {

    return "zmiksowana" + " " + argument
}
console.log(miksowanie(argument));
