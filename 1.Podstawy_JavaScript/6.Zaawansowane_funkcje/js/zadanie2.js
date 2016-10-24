/**
 * Funkcje wy�szego rz�du.
 * Prze�led� krok po kroku ka�d� linijk� kodu. Ka�d�!
 * Spr�buj napisa� komentarze dla ka�dej z linijek kodu
 */

/*## Ćwiczenie 2
 Zajrzyj do pliku zadanie2.js i przetestuj działanie funkcji sortArray.
 Dla potwierdzenia zrozumienia tematu spróbuj napisać komentarze dla każdej z linijek kodu w tym pliku.
*/

//tworzymy anonimowa funkcje o nazwie "sortArray"
function sortArray() {

    //deklarujemy zmienna "points", ktorej wartoscia jest tablica
    var points = [41, 3, 6, 1, 114, 54, 64];

    //tworze metode, ktora posortuje elementy rosnaco na podstawie przekazanej funkcji "function(a, b)"
    points.sort(function(a, b) {
        //funkcja sprawdza roznice miedzy a i b, nastepnie ja zwraca, w ten sposob ustala prawidlowa kolejnosc liczb tablicy
        // ale dlaczego akurat a-b? bieze kazda liczbe, odejmuje kazda z kazda i tak ustala kolejnosc? dziwne to...
        // a dlaczego nie warunek a>b ?
        return a - b;
    });

    //zwraca zmienna points po zmianach - posortowaniu elementow tablicy
    return points;
}

//wywolujemy funkcje sortArray
sortArray();
// [1, 3, 6, 41, 54, 64, 114]
