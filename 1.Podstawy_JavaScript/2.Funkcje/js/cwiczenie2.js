/* ## Ćwiczenie 2
Napisz funkcję, która przyjmuje jako argumenty dwie liczby i zwraca (poprzez ```return```) większą z nich.

Przykład:
```
input -> 5, 29
output -> 29
*/

var a = 5;
var b = 29;

function whichIsGreater(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
console.log(whichIsGreater(a, b));
