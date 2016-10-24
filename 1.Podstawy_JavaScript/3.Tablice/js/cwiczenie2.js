/**
 * Created by Jacek on 2016-01-11.
 */


function createArray(number) {
    var newArray = []; // usenelam liczbe 10, musi byc pusta tablica

    for (var counter = 1; counter <= number; counter++) {
        newArray.push(counter);
    }

    return newArray; // usunelam [2], bo takto zwracal zawsze tablice [2]
}

console.log("tablica z liczbami do 6 = " + createArray(6));
// tablica z liczbami do 6 = 1,2,3,4,5,6
console.log("tablica z liczbami do 1 = " + createArray(1));
// tablica z liczbami do 1 = 1
console.log("Test dla liczby ujemnej (powinna być pusta tablica) " + createArray(-6));
// undefined
console.log("Test dla zera (powinna być pusta tablica) " + createArray(0));
// undefined
