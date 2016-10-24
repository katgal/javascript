# JacaScript - Ćwiczenia - Obiekty

Zadania wprowadzające do korzystania z tworzenia i używania obiektów.
Ćwiczenia powinny być rozwiązane w pliku app.js, chyba, że treść zadania wskazuje inaczej.
Pamiętaj, żeby oddzielać ćwiczenia komentarzami i pisać czytelny i dobrze sformatowany kod.


## Ćwiczenie 1
Stwórz obiekt samochód, utwórz dla niego odpowiednie atrybuty i metody.
Samochód powinien mieć następujące atrybuty:
  1. Markę,
  2. Kolor,
  3. Ilość przejechanych kilometrów (na początku 0)

I następujące metody:
  1. ```printCarinfo()``` - metoda powinna wypisywać informacje o samochodzie (jego kolor, markę i ile kilometrów ma przejechane).
  2. ```drive(km)``` - która dodaje do przejechanych kilometrów podaną wartość. Użyj słowa kluczowego ```this``` żeby odwołać się do obiektu w środku metody.

## Ćwiczenie 2

Do obiektu samochód z ćwiczenia pierwszego dodaj tablicę z listą dat przeglądów (niech będą to zwykłe napisy). Dodaj ten nowy atrybut poza ciałem obiektu.
Dodaj też metodę, która dodaje wpis do tej tablicy i metodę, która wyświetla wszystkie przeglądy samochodu. Użyj słowa kluczowego ```this```, żeby odwołać się do obiektu w środku metody.

## Ćwiczenie 3

W pliku cwiczenie3.js możesz znaleźć przykładowy konstruktor dla Robota. Konstruktor oczekuje, że podasz tylko imię robota.
Wszystkie roboty mają od razu kilka metod (metody dodane są przez prototypy).
Utwórz kilka robotów i poszukaj czy w napisanym kodzie nie ma jakiś błędów.

## Ćwiczenie 4

Stwórz konstruktor dla obiektów ```Rectangle```, który będzie przyjmować informację na temat długości i szerokości nowo stworzonej figury.
Następnie przy pomocy prototypu klasy dodaj do niej następujące metody:
  1. ```getArea()``` - metoda ma zwracać pole powierzchni,
  2. ```getPerimiter()``` - metoda ma zwracać obwód.

Następnie stwórz kilka obiektów i zobacz czy metody działają tak jak powinny.

## Ćwiczenie 5
Stwórz konstruktor dla obiektów ```Calculator```. Konstruktor ma nie przyjmować żadnych danych. Każdy nowo stworzony obiekt powinien mieć pustą tablicę w której będzie trzymać historię wywołanych operacji.
Następnie przy pomocy prototypu klasy dodaj do niej następujące metody:
  1. ```add(num1, num2)``` - metoda ma dodać do siebie dwie zmienne i zwrócić wynik. Dodatkowo w tablicy operacji ma zapamiętać napis: "added ```num1``` to ```num2``` got ```result```" (oczywiście z wartościami zmiennych podstawionymi w odpowiednie miejsce).
  2. ```multiply(num1, num2)``` - metoda ma pomnożyć przez siebie dwie zmienne i zwrócić wynik. Dodatkowo w tablicy operacji ma zapamiętać napis: "multiplied ```num1``` with ```num2``` got ```result```" (oczywiście z wartościami zmiennych podstawionymi w odpowiednie miejsce).  
  3. ```subtract(num1, num2)``` - metoda ma odjąć od siebie dwie zmienne i zwrócić wynik. Dodatkowo w tablicy operacji ma zapamiętać napis: "subtracted ```num1``` from ```num2``` got ```result```" (oczywiście z wartościami zmiennych podstawionymi w odpowiednie miejsce).  
  4. ```divide(num1, num2)``` - metoda ma podzielić przez siebie dwie zmienne i zwrócić wynik. Dodatkowo w tablicy operacji ma zapamiętać napis: "divided ```num1``` by ```num2``` got ```result```" (oczywiście z wartościami zmiennych podstawionymi w odpowiednie miejsce).  
  5. ```printOperations()``` - metoda ma wypisać wszystkie operacje zapamiętane w pamięci.
  6. ```clearoperations()``` - metoda ma wyczyścić wszystkie operacje z pamięci.

Pamiętaj o używaniu ```this```.
