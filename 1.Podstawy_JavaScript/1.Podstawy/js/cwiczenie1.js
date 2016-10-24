/* ## Ćwiczenie 1
Stwórz tyle zmiennych ile różnych znasz typów. Każdą odpowiednio nazwij i wstaw do nich odpowiednie dane. Następnie dodaj do siebie różne zmienne i zobacz jakiego typu jest wynik. Napisz w komentarzu przy każdej zmiennej jej typ.
Wypisz każdą zmienną w konsoli.

Zwróć uwagę jak zmieniają się typy danych w zależności od tego jakie typy ze sobą dodajemy. Jest to tak zwane niejawna konwersja danych (silnik JavaScript bez naszego udziału zmienia typ danych).
*/

var string = "string";
var number = 3;
var array = [2, 4, 5];
var arrayMixed = [2, 6, "string_1", "string_2"];
var boolean = true;
var pies = {
    name: "Mruczek",
    wiek: 3
};
var pusta = null;

// wypisuję zmienne w konsoli
console.log(string, number, array, arrayMixed, boolean, pies, pusta);

// dodawanie zmiennych
console.log(typeof(string + " " + number)); /*typ string*/
console.log(typeof(array + " " + pies)); /*typ string*/
console.log(typeof(boolean + " " + pusta)); /*typ string*/
var wynik1 = number + " " + array;
console.log(wynik1, typeof(wynik1)); /*typ string*/


console.log(string + " " + number);
console.log(array + " " + pies.name);
console.log(boolean + " " + pusta);
console.log(number + array);
