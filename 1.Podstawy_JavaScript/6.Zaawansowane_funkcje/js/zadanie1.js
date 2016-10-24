/**
 * Zagnie�d�anie funkcji.
 * Prze�led� krok po kroku ka�d� linijk� kodu. Ka�d�!
 * Spr�buj napisa� komentarze dla ka�dej z linijek kodu
 */

/*## Ćwiczenie 1
 Zajrzyj do pliku zadanie1.js i przetestuj działanie obu funkcji.
 Dlaczego funkcja o nazwie jeden nie ma dostępu do zmiennej o nazwiezmienna2?
 Dla potwierdzenia zrozumienia tematu spróbuj napisać komentarze dla każdej z linijek kodu w tym pliku.
*/

//tworzymy funkcje anonimowa o nazwie "jeden"
function jeden() {

    //dodajemy do funkcji "jeden" zmienna1
    var zmienna1 = 1;

    //zagniezdzamy funkcje o nazwie "dwa" w funkcji "jeden"
    function dwa() {

        //za pomoca funkcji "dwa" wypisujemy wartość zmiennej1, a ze nie ma jej w swoim zakresie to sięga wyzej, do funkcji "jeden"
        console.log(zmienna1);

        //definjujemy zmienna2 w funkcji "dwa"
        var zmienna2 = 3;
    }

    //wywolujemy funkcje "dwa", console.log powinien wypisać wartość zmiennej1
    dwa();

    //funkcja "jeden" chce wypisac w konsoli zmienna2, jest to niemozliwe! bo nie ma ona dostępu do zmiennych funkcji "dwa"!
    console.log(zmienna2)
}

//wywolujemy funkcje "jeden", której wynik rowny 1 jest efektem dzialania zagniezdzonej funkcji "dwa"
jeden();
// 1

// Funkcja o nazwie jeden nie ma dostępu do zmiennej o nazwie zmienna2, gdyz nie lezy ona w jej zasiegu.
// Posiada ona dostęp wylacznie do zmiennej1, natomiast funkcja o nazwie "dwa" ma dostep do obu zmiennych, wynika to
// z zasad tworzenia funkcji zagniezdzonych
