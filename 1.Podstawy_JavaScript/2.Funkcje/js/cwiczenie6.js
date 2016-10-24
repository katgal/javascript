/*## Ćwiczenie 6
Napisz funkcję ```rockPaperScissors(player1, player2)```, która będzie pobierać dwa napisy i na ich podstawie zwracać infromacje kto wygrał. Poprawne napisy przyjmowane przez funkcjię to: papier, nozyce, kamien.

Funkcja ma zwracać jeden z 4 napisów:
"Gracz 1 wygral",
"Gracz 2 wygral"
"Remis",
"Blędne informacje"
*/

function rockPaperScissors(player1, player2) {
    if (player1 === "papier") {
        if (player2 === "nozyce") {
            console.log("Gracz 2 wygral");
        } else if (player2 === "kamien") {
            console.log("Gracz 1 wygral");
        } else if (player2 === "papier") {
            console.log("Remis");
        }
    } else if (player1 === "nozyce") {
        if (player2 === "kamien") {
            console.log("Gracz 2 wygral");
        } else if (player2 === "papier") {
            console.log("Gracz 1 wygral");
        } else if (player2 === "nozyce") {
            console.log("Remis");
        }
    } else if (player1 === "kamien") {
        if (player2 === "papier") {
            console.log("Gracz 2 wygral");
        } else if (player2 === "nozyce") {
            console.log("Gracz 1 wygral");
        } else if (player2 === "kamien") {
            console.log("Remis");
        }
    } else {
        console.log("Wpisz wlasciwe dane!");
    }
}
rockPaperScissors("papier", "nozyce");
// Gracz 2 wygral
rockPaperScissors("1", "nozyce");
// Wpisz wlasciwe dane!
rockPaperScissors("nozyce", "nozyce");
// Remis


/*to samo tylko za pomoca tablic i obiektu
function rockPaperScissors(player1, player2) { //na wejściu np: "kamien", "papier"

    var nazwaNaIndex = { // każda wartosć wejscia będzie miała jedną z trzech możliwych wartości
                            // liczbowych reprezentujących index tablicy ponizszej (L):
        kamien: 0,
        papier: 1,
        nozyczki: 2
    }
 // tablica dwuwymiarowa pokazuje wszystkie mozliwe rowązania:
 // gracz1 podaje tak naprawdę index kolumny (numer wiersza),
    // gracz2 podaje index w danym wierszu
    var L = [["remis", "gracz2 - wygrywa", "gracz1 - wygrywa"],
        ["gracz1 - wygrywa", "remis", "gracz2 - wygrywa"],
        ["gracz2 - wygrywa", "gracz1 - wygrywa", "remis"]]

    console.log(L[nazwaNaIndex[player1]][nazwaNaIndex[player2]]); // funkcja wywołuje
    // wartość elementu tablicy dwuwymiarowej wskazaną przez obu graczy (zamienioną na indexy)
    // VOILA!!!
} rockPaperScissors("kamien", "papier");
*/
