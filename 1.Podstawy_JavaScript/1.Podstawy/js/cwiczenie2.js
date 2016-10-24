/* ## Ćwiczenie 2
Stwórz zmienną, która będzie przetrzymywała stan pogody (sam modyfikuj tą zmienną) np.:
var weather = "deszczowo"
Wykorzystaj poznaną instrukcję warunkową, aby wyświetlić informację w konsoli czy powinieneś wziąć parasol czy nie. Zmień wartość zmiennej ```weather``` i sprawdź co zostanie wypisane.
*/

var weather = ["deszczowo", "slonecznie", "pochmurno"]

var pogoda = function(weather) {
    if (weather === "deszczowo" || weather === "pochmurno") {
        console.log("Wez parasol!!!");
    } else {
        console.log("Jest ladna pogoda, nie trzeba parasola.");
    }
}

pogoda(weather[1]);
