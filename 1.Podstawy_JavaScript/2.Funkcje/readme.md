# JavaScript - Ćwiczenia - Funkcje

Zadania wprowadzające do tworzenia funkcji.
Ćwiczenia powinny być rozwiązane w pliku app.js, chyba, że treść zadania wskazuje inaczej.
Pamiętaj, żeby oddzielać ćwiczenia komentarzami i pisać czytelny i dobrze sformatowany kod.


## Ćwiczenie 1
Napisz funkcję miksującą o nazwie ```miksowanie```, która jako argument będzie przyjmowała napis.
Zadaniem funkcji jest zwrócenie tego napisu, ale poprzedzonego słowem ```zmiksowana ```. Funkcja ma zwracać nowo powstały napis (poprzez ```return```).
Następnie wypisz w konsoli to co zwróciła ta funkcja.

Przykład:
```
input -> "marchewka"
output -> "zmiksowana marchewka"
```

## Ćwiczenie 2
Napisz funkcję, która przyjmuje jako argumenty dwie liczby i zwraca (poprzez ```return```) większą z nich.

Przykład:
```
input -> 5, 29
output -> 29
```

## Ćwiczenie 3
Stwórz funkcję, która będzie zwracała (poprzez ```return```) sumę 3 liczb. Liczby powinny być przekazane do funkcji jako argumenty.

Przykład:
```
input -> 1,2,3
output -> 6
```

## Ćwiczenie 4
Stwórz funkcję anonimową i przypisz ją do zmiennej. Zadaniem funkcji jest wypisanie 10 razy
"Wszędzie i zawsze pisząc kod, używam funkcji oraz pilnuję, żeby nie tworzyć zmiennych globalnych".

## Ćwiczenie 5
Napisz funkcję ```rentCost(days)```, która będzie pobierać liczbę dni jako argument, a następnie wyliczać koszt wynajmu pokoju według podanego wzoru:
Wynajem trwa 1 dzień - koszt pokoju 200zł/dzień
Wynajem trwa 2-3 dni - koszt pokoju 180zł/dzień
Wynajem trwa 4-7 dni - koszt pokoju 160zł/dzień
Wynajem trwa 8+ dni - koszt pokoju 150zł/dzień.

Dodatkowo za każdy pełny tydzień przysługuje 50zł zniżki. Do wyliczenia pełnych tygodni użyj poniższego kodu:
```
var numbersOfWeeks = Math.floor(days / 7); //Math.floor jest funkcją która zaokrągla liczbę w dół.
```
Przykład:
```
input -> 8
output -> 1150
```

## Ćwiczenie 6
Napisz funkcję ```rockPaperScissors(player1, player2)```, która będzie pobierać dwa napisy i na ich podstawie zwracać infromacje kto wygrał. Poprawne napisy przyjmowane przez funkcjię to: papier, nozyce, kamien.

Funkcja ma zwracać jeden z 4 napisów:
"Gracz 1 wygral",
"Gracz 2 wygral"
"Remis",
"Blędne informacje"

Przykład:
```
input -> 8
output -> 1150
```

## Ćwiczenie 7
Napisz funkcję ```calculateTip(amount, raiting)```, która będzie przyjmować dwa argumenty - kwotę do zapłaty i opis słowny obsługi.
Jeśli opis jest taki jak zdefiniowano poniżej, funkcja ma zwracać kwotę napiwku, w przeciwnym przypadku, jeśli opis jest nieznany funkcja powinna zwracać napis "Opis nieczytelny".

Opis może przyjmować następujące wartości:
"Bardzo dobra obsluga" => 25% napiwku,
"Dobra obsluga" => 20% napiwku,
"Średnia obsluga" =>15% napiwku,
"Zła obsluga" => 0% napiwku.

Przykład:
```
input -> 100, "Bardzo dobra obsluga"
output -> 25
```
