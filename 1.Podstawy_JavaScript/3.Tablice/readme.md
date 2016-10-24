# JacaScript - Ćwiczenia - Tablice

Zadania wprowadzające do korzystania z tablic.
Ćwiczenia powinny być rozwiązane w pliku app.js, chyba, że treść zadania wskazuje inaczej.
Pamiętaj, żeby oddzielać ćwiczenia komentarzami i pisać czytelny i dobrze sformatowany kod.



## Ćwiczenie 1
Stwórz tablicę z listą swoich ulubionych owoców. Następnie:
  1. Wypisz pierwszy owoc w konsoli,
  2. Wypisz ostatni owoc w konsoli (skorzystaj z atrybutu ```length```).
  3. W pętli wypisz wszystkie owoce (skorzystaj z atrybutu ```length```).


## Ćwiczenie 2
Zajrzyj do pliku cwiczenie2.js - jest tam przykładowa funkcja, która tworzy tablicę z liczbami. Niestety nie działa ona dobrze - znajdź błąd i  napraw go, tak żeby funkcja działała.

## Ćwiczenie 3
Napisz funkcję ```printTable(array)```, która przyjmuje tylko jeden parametr - tablice. Następnie przy pomocy pętli for przeiteruj (przejdź) po każdym elemencie i wypisz go w konsoli.

## Ćwiczenie 4
Napisz dwie funkcje ```add(array)``` i ```multiply(array)```. Obie mają przyjmować tylko jeden argument - tablicę. Następnie funkcja ```add``` ma zsumować wszystkie liczby znajdujące się w tej tablicy (przy pomocy pętli for), a funkcja ```multiply``` ma pomnożyć wszystkie liczby znajdujące się w tablicy (przy pomocy pętli for).


## Ćwiczenie 5
Napisz funkcje ```getAvarage```, która ma przyjmować tylko jeden argument - tablicę. Funkcja ta ma zwracać średnią wartość liczb w tej tablicy. Dla uproszczenia można założyć, że tablica ma w sobie tylko liczby.

## Ćwiczenie 6
Napisz funkcje ```distFromAvarage```, która ma przyjmować tylko jeden argument - tablicę. Funkcja ta ma zwracać też tablicę. Zwracana tablica powinna mieć w sobie różnicę pomiędzy liczbą z danej komórki, a średnią wartością tablicy. Dla uproszczenia możesz użyć funkcji z poprzedniego zadania.
Np.
```
distFromAvarage([1,2,3,4,5,6,7]) => [3,2,1,0,1,2,3] (średnia z tablicy wejściowej to 4)
distFromAvarage([1,1,1,1]) => [0,0,0,0] (średnia z tablicy wejściowej to 1)
distFromAvarage([2,8,3,7]) => [3,3,2,2] (średnia z tablicy wejściowej to 5)
```

## Ćwiczenie 5
Napisz funkcje ```factors```, która ma przyjmować tylko jeden argument - liczbę. Liczba musi być większa od 0. Funkcja ta ma zwracać tablicę. Zwracana tablica powinna mieć w sobie wszystkie dzielniki podanej liczby (w kolejności malejącej). Jeżeli liczba jest mniejsza lub równa 0 to zwróć pustą tablicę.
```
factors(2) => [2,1]
factors(54) => [54, 27, 18, 9, 6, 3, 2, 1]
factors(-4) => []
```

## Ćwiczenie 6
Napisz funkcje ```getMissingElement```, która ma przyjmować tylko jeden argument - tablicę. Tablica ma w sobie rosnące liczby całkowite. Funkcja ta ma zwracać brakującą liczbę (czyli miejsca, w którym tablica skacze o 2 zamiast o 1). Jeżeli w tablicy nie ma brakujących liczb to funkcja ma zwracać ```null```.
```
getMissingElement([1,2,3,4,5,6,7]) => null
getMissingElement([6,7,8,10,11,12,13,14,15]) => 9
getMissingElement([-4,-3,-2,0,1,2,3,4]]) => -1
```
