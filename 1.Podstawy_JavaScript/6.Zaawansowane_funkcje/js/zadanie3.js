/*## Ćwiczenie 3
Napisz funkcję, która przyjmuje jako parametry dowolną ilość liczb i wyświetla większą z nich.
Skorzystaj ze zmiennej ```arguments```.

Przykład:
```
input -> 5, 29, 6, 4, 34, 56, 2, 3
output -> 56
```
*/
// var table = [2,4,77,5,99,33,12,20]
function whichIsTheHighest() {
    // return Math.max.apply(null, table);
    return Math.max.apply(null, arguments);
};
// whichIsTheBiggest(table);
// 99
whichIsTheHighest(2, 5, 7, 9, 33, 55, 88);
// 88

// inne sposoby
var table = [41, 3, 6, 1, 114, 54, 64];

function whichIsTheHighest() {
    var arguments = table;

    arguments.sort(function(a, b) {
        return a - b; // sortujemy rosnąco, czyli najwieksza liczba bedzie ostatnia
        // return b-a; // sortujemy malejąco, czyli najwieksza liczba bedzie pierwsza
    });
    return arguments[arguments.length - 1]; //zwraca ostatni element tablicy, w tym wypadku ten najwiekszy
    // return arguments.pop();  // można równiez i tak, usuwa i zwraca najwiekszy element w tablicy
    // return arguments[0]; // albo i tak, wyswietla pierwszy argument tablicy, czyli największy; wtedy gdy return b-a;
}
whichIsTheHighest(table);
// 114
