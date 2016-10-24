/*## Ćwiczenie 4
Stwórz funkcję anonimową i przypisz ją do zmiennej. Zadaniem funkcji jest wypisanie 10 razy
"Wszędzie i zawsze pisząc kod, używam funkcji oraz pilnuję, żeby nie tworzyć zmiennych globalnych".
*/

var anonim = function() {
    for (var i = 0; i < 10; i++) {
        console.log("Wszędzie i zawsze pisząc kod, używam funkcji oraz pilnuję, żeby nie tworzyć zmiennych globalnych");
    }
};
anonim();
