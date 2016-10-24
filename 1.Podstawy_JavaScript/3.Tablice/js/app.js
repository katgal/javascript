/**
 * Created by Jacek on 2016-01-11.
 */
/* ## Ćwiczenie 1
 Stwórz tablicę z listą swoich ulubionych owoców. Następnie:
   1. Wypisz pierwszy owoc w konsoli,
   2. Wypisz ostatni owoc w konsoli (skorzystaj z atrybutu ```length```).
   3. W pętli wypisz wszystkie owoce (skorzystaj z atrybutu ```length```).
   */

myFavoriteFruits = ["apple", "plum", "strawberry"];
//  pierwszy owoc
myFavoriteFruits[0];
//  ostatni owoc
myFavoriteFruits[myFavoriteFruits.length - 1];
//  pętla
for (var i = 0; i < myFavoriteFruits.length; i++) {
    console.log(myFavoriteFruits[i]);
}


/*## Ćwiczenie 3
Napisz funkcję ```printTable(array)```, która przyjmuje tylko jeden parametr - tablice. Następnie przy pomocy pętli for przeiteruj (przejdź) po każdym elemencie i wypisz go w konsoli.
*/
var array = ["Kate", "Mike", "Jack"];

function printTable(array) {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
printTable(array);

/*## Ćwiczenie 4
Napisz dwie funkcje ```add(array)``` i ```multiply(array)```. Obie mają przyjmować tylko jeden argument - tablicę. Następnie funkcja ```add```
ma zsumować wszystkie liczby znajdujące się w tej tablicy (przy pomocy pętli for), a funkcja ```multiply``` ma pomnożyć wszystkie liczby znajdujące się w tablicy (przy pomocy pętli for).
*/
var array = [2, 3, 4, 9];

function add(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum;
}
add(array);
// 18
function multiply(array) {
    var multi = 1;
    for (var i = 0; i < array.length; i++) {
        multi = multi * array[i];
    }
    return multi;
}
multiply(array);
// 216


/* ## Ćwiczenie 5
Napisz funkcje ```getAvarage```, która ma przyjmować tylko jeden argument - tablicę. Funkcja ta ma zwracać średnią wartość liczb w tej tablicy. Dla uproszczenia można założyć, że tablica ma w sobie tylko liczby.
*/
var array = [2, 4, 6];

function getAvarage(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum / array.length;
}
getAvarage(array);
// 4


/* ## Ćwiczenie 6
Napisz funkcje ```distFromAvarage```, która ma przyjmować tylko jeden argument - tablicę. Funkcja ta ma zwracać też tablicę. Zwracana tablica powinna mieć w sobie różnicę pomiędzy liczbą z danej komórki, a średnią wartością tablicy.
Dla uproszczenia możesz użyć funkcji z poprzedniego zadania.
Np.
```
distFromAvarage([1,2,3,4,5,6,7]) => [3,2,1,0,1,2,3] (średnia z tablicy wejściowej to 4)
distFromAvarage([1,1,1,1]) => [0,0,0,0] (średnia z tablicy wejściowej to 1)
distFromAvarage([2,8,3,7]) => [3,3,2,2] (średnia z tablicy wejściowej to 5)
```
*/
var array = [2, 4, 6, 8];

function getAvarage(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum / array.length;
}

function distFromAvarage(array) {
    var newArray = [];
    for (var j = 0; j < array.length; j++) {
        var newArrayElement = array[j] - getAvarage(array);
        // dodaję nowy element do pustej tablicy
        newArray.push(newArrayElement);
    }
    // zwracam tablicę z różnicą pomiędzy liczbą z danej komórki, a średnią wartością tablicy
    return newArray;
}
distFromAvarage(array);
// [-3, -1, 1, 3]


/*## Ćwiczenie 7
Napisz funkcje ```factors```, która ma przyjmować tylko jeden argument - liczbę. Liczba musi być większa od 0. Funkcja ta ma zwracać tablicę.
Zwracana tablica powinna mieć w sobie wszystkie dzielniki podanej liczby (w kolejności malejącej). Jeżeli liczba jest mniejsza lub równa 0 to zwróć pustą tablicę.
```
factors(2) => [2,1]
factors(54) => [54, 27, 18, 9, 6, 3, 2, 1]
factors(-4) => []
```*/

function factors(number) {
    var newArray = [];
    if (number > 0) {
        for (var i = 1; i <= number; i++) {
            if (number % i === 0) {
                // nowy element daje zawsze na początku, stąd tablica jest malejąca
                newArray.unshift(i);
            }
        }
    } else {
        return newArray = [];
    }
    return newArray;
}
factors(24);
// [24, 12, 8, 6, 4, 3, 2, 1]
factors(54);
// [54, 27, 18, 9, 6, 3, 2, 1]
factors(-4);
// []


/*## Ćwiczenie 8
Napisz funkcje ```getMissingElement```, która ma przyjmować tylko jeden argument - tablicę. Tablica ma w sobie rosnące liczby całkowite.
Funkcja ta ma zwracać brakującą liczbę (czyli miejsca, w którym tablica skacze o 2 zamiast o 1). Jeżeli w tablicy nie ma brakujących liczb to funkcja ma zwracać ```null```.
```
getMissingElement([1,2,3,4,5,6,7]) => null
getMissingElement([6,7,8,10,11,12,13,14,15]) => 9
getMissingElement([-4,-3,-2,0,1,2,3,4]]) => -1
```*/
//przykładowa tablica:
var arrayEl = [1, 2, 3, 6, 7];
function getMissingElement(arrayEl) {
    //deklaruję pustą tablicę na wrzucane elementy:
    var arrayMissingEl = [];

    //sprawdzam elementy talicy...
    for (var i = 0; i < arrayEl.length - 1; i++) {

        //jaka jest między nimi różnica: subBetw
        var subBetwEl = arrayEl[i + 1] - arrayEl[i];

        //jeśli różnica jest większa niz 1 to biorę lement danej pętli
        //i powiększam go o 1 do wielkości róznicy: subBetwEl
        if (subBetwEl > 1) {
            for (var j = 1; j < subBetwEl; j++) {
                var missEl = arrayEl[i] + j;
                //każdy powstajacy element wrzucam do tablicy na koniec
                arrayMissingEl.push(missEl);
            }
        } else {
            //w przeciwnym razie wrzucam pustkę
            arrayMissingEl.push();
        }
    }
    if (arrayMissingEl.length > 0) {
        //funkcja po wykonaniu zwraca tablicę powstała z brakujących elementów
        return arrayMissingEl;
    } else {
        //jeśli brak brakujących to zwracam null
        return null;
    }
}
