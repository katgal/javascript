/**
 * Created by Jacek on 2016-01-11.
 */
/* ## Ćwiczenie 1
 W pliku app.js masz tablicę o nazwie ```task1Array```. Nastęnie:
   1. Wypisz element znajdujący się w położeniu 3,2
   2. Wypisz długość tablicy znajdującej się w drugim rzędzie,
   3. Wypisz element znajdujący się w pozucji 4,2
   */
var task1Array = [
    [2, 3],
    ["ala", "ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];

task1Array[3][2];
// 7
task1Array[1].length;
// 2
task1Array[4][2];
// 67

/*## Ćwiczenie 2
W pliku app.js masz tablicę o nazwie ```task2Array```. Nastęnie:
  1. W pętli wypisz zawartość pierwszego wymiaru naszej tablicy,
  2. W pętli wypisz długość tablic składających się na 2gi wymiar,
  3. W pętli wypisz wszyskie elementy tablicy 2 wymiarowej (musisz użyć do tego zagnieżdżonej pętli for).
*/

var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

function array1row(task2Array) {
    for (var i = 0; i < task2Array[0].length; i++) {
        console.log(task2Array[0][i]);
    }
}
array1row(task2Array);
/* 1
   2
   3
   4
*/

function array2D(task2Array) {
    for (var i = 0; i < task2Array.length; i++) {
        console.log(task2Array[i].length);
    }
}
array2D(task2Array);
/*4
  4
  4
  */

function everyElement2D(task2Array) {
    for (var i = 0; i < task2Array.length; i++) {
        // każda tablica w nowym rzędzie
        var write = " ";
        for (var j = 0; j < task2Array[i].length; j++) {
            // argumenty będą się układać obok siebie
            write = write + " " + task2Array[i][j];
            // console.log(task2Array[i][j]);
        }
        console.log(write);
    }
}
everyElement2D(task2Array);
/*wariant 1.             wariant z rzędami:
  1                      1 2 3 4
  2                      5 6 7 8
  3                      9 10 11 12
  4
  5
  6
  7
  8
  9
  10
  11
  12
*/

/*## Ćwiczenie 3
Napisz funkcje ```print2DArray```, która będzie przyjmować tablicę dwuwymiarową. Nastepnie funkcja ta ma wypisać w konsoli zawartość tej tablicy.
## Ćwiczenie 4
Stwórz ręcznie 2 wymiarową tablicę i przetestuj ją na rozwiązaniu z zadania 3.
*/
var myArray2D = [
    [2, 5],
    [7, 9, "lolipop"],
    [1, "Diplodok", 98]
];

function print2DArray(noNameArray) {
    for (var i = 0; i < noNameArray.length; i++) {
        // każda tablica w nowym rzędzie
        var write = " ";
        for (var j = 0; j < noNameArray[i].length; j++) {
            // argumenty będą się układać obok siebie
            write = write + " " + noNameArray[i][j];
            // console.log(noNameArray[i][j]);
        }
        console.log(write);
    }
}
print2DArray(myArray2D);
/*2 5
  7 9 lolipop
  1 Diplodok 98
*/

/*## Ćwiczenie 5
Napisz funckje ```create2DArray```, która przyjmuje 2 liczby całkowite ```rows``` i ```columns```. Zadaniem funkcji jest stworzenie i zwrócenie 2 wymiarowej tablicy o podanej ilości rzędów i kolumn. Każda komórka ma być wypełniona kolejną liczbą całkowitą. Nastepnie użyj rozwiązania z ćwiczenia 3 do wypisania tej tablicy w konsoli.
Hint: Musisz użyć petli zagnieżdżonych.
*/
//part.1
function create2DArray(rows, cols) {
    //nowa pusta tablica z rzędami:

        var new2DArray = new Array(rows);
        for (var i = 0; i < rows; i++) {
            //rzędowi-elementowi tablicy nadaję tablicę z elementami cols:
            new2DArray[i] = new Array(cols);
            for (var j = 0; j < cols; j++) {
                //elementy tablicy wypełniam wartością rosnącej iterowanej zmiennej
                new2DArray[i][j] = j;
            }

        }
        return new2DArray;

}
//UWAGA w konsoli muzę wynik funkcji przypisać do zmiennej, żeby go chwycić, np:
var arrT = create2DArray(4, 3); // wynik undefined i to jest ok znaczy że działa
//wywołuję teraz:

arrT; // to wtedy zwróci konsola tę tablicę...


//ćw. 05.
//part.2. ?????? napisanie tablicy funkcją z ćw. 4.

var print2DArray2 = function() {
    for (var k = 0; k < new2DArray.length; k++) {
        var inRows = "";
        for (var l = 0; l < new2DArray[k].length; l++) {
            inRows += " " + new2DArray[k][l];
        }
        console.log(inRows);
    }
}

print2DArray(create2DArray(4, 5)); //wywołanie funkcji w taki sposób daje niezły wynik
/*
function create2DArray(rows, columns) {
    var array = [];
    var value = 0;
    for (var i = 0; i < rows; i++) {
        array.push([]);
        array[i].push(new Array(columns));
        for (var j = 0; j < columns; j++) {
            array[i][j] = value;
            value = value + 1;
        }
    }
    return array;
}
function print2DArray(arr){
    for(var i = 0; i < arr.length; i++) {
        for(var j = 0; j < arr[0].length; j++) {
            console.log(arr[i][j]);
        }
    }
}
console.log(print2DArray(create2DArray(5,6)));
*/
