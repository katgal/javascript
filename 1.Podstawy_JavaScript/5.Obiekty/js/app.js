/**
 * Created by Jacek on 2016-01-11.
 */
/*## Ćwiczenie 1
Stwórz obiekt samochód, utwórz dla niego odpowiednie atrybuty i metody.
Samochód powinien mieć następujące atrybuty:
  1. Markę,
  2. Kolor,
  3. Ilość przejechanych kilometrów (na początku 0)

I następujące metody:
  1. ```printCarinfo()``` - metoda powinna wypisywać informacje o samochodzie (jego kolor, markę i ile kilometrów ma przejechane).
  2. ```drive(km)``` - która dodaje do przejechanych kilometrów podaną wartość. Użyj słowa kluczowego ```this``` żeby odwołać się do obiektu w środku metody.
*/

var car = {
    type: "bmw",
    color: "yellow",
    km: 0,
    printCarInfo: function() {
        console.log(this.type);
        console.log(this.color);
        console.log(this.km);
    },
    drive: function(kms) {
        this.km = this.km + kms + " kilometers";
        console.log(this.km);
    }
};
car.printCarInfo();
car.drive(3);

/*
var Car = new Object();
Car.type = "Toyota";
Car.color = "green";
Car.kms = 0;
printCarinfo = function() {
    console.log(this.type);
    console.log(this.color);
    console.log(this.kms);
};
Car.drive = function(km) {
    this.kms = this.kms + km;
};
*/
/*## Ćwiczenie 2

Do obiektu samochód z ćwiczenia pierwszego dodaj tablicę z listą dat przeglądów (niech będą to zwykłe napisy).
Dodaj ten nowy atrybut poza ciałem obiektu. Dodaj też metodę, która dodaje wpis do tej tablicy i metodę,
która wyświetla wszystkie przeglądy samochodu.
Użyj słowa kluczowego ```this```, żeby odwołać się do obiektu w środku metody.
*/

var car = {
    type: "bmw",
    color: "yellow",
    km: 0,
    printCarInfo: function() {
        console.log(this.type);
        console.log(this.color);
        console.log(this.km);
    },
    drive: function(kms) {
        this.km = this.km + kms + " kilometers";
    },
    newDate: function(date) {
        // this.listOfServices = ["01.2014", "01.2015", "01.2016"];
        // nowy wpis w tablicy
        this.listOfServices.push(date);
    },
    // metoda wyswietlajaca wszystkie przeglady
    showListOfServices: function() {
        console.log(this.listOfServices);
        // return this.listOfServices
    }
};
// atrybut - lista przegladow poza obiektem
car.listOfServices = ["01.2014", "01.2015", "01.2016"];

car.drive(3);
car.printCarInfo();
// bmw
// yellow
// 3
car.newDate("05.2017");
// car.listOfServices;
// ["01.2014", "01.2015", "01.2016", "05.2017"]
car.showListOfServices();
// ["01.2014", "01.2015", "01.2016", "05.2017"]

/*
## Ćwiczenie 4

Stwórz konstruktor dla obiektów ```Rectangle```, który będzie przyjmować informację na temat długości i szerokości nowo stworzonej figury.
Następnie przy pomocy prototypu klasy dodaj do niej następujące metody:
  1. ```getArea()``` - metoda ma zwracać pole powierzchni,
  2. ```getPerimiter()``` - metoda ma zwracać obwód.

Następnie stwórz kilka obiektów i zobacz czy metody działają tak jak powinny.
*/

var Rectangle = function(length, width) {
    this.length = length;
    this.width = width;
}
Rectangle.prototype.getArea = function() {
    var area = this.length * this.width;
    console.log("Area of this rectangle is " + area);
};
Rectangle.prototype.getPerimiter = function() {
    var perimeter = (2 * this.length) + (2 * this.width);
    console.log("Perimater of this rectangle is " + perimeter);
};
var firstRectangle = new Rectangle(2, 3); // nowy obiekt
firstRectangle.getArea();
// Area of this rectangle is 6
firstRectangle.getPerimiter();
// Perimater of this rectangle is 10

var secondRectangle = new Rectangle(6, 7); // nowy obiekt
secondRectangle.getArea();
// Area of this rectangle is 42
secondRectangle.getPerimiter();
// Perimater of this rectangle is 26

var thirdRectangle = new Rectangle(13, 19); // nowy obiekt
thirdRectangle.getArea();
// Area of this rectangle is 247
thirdRectangle.getPerimiter();
// Perimater of this rectangle is 64


/*## Ćwiczenie 5
Stwórz konstruktor dla obiektów ```Calculator```. Konstruktor ma nie przyjmować żadnych danych. Każdy nowo stworzony obiekt powinien mieć pustą tablicę w której będzie trzymać historię wywołanych operacji.
Następnie przy pomocy prototypu klasy dodaj do niej następujące metody:
  1. ```add(num1, num2)``` - metoda ma dodać do siebie dwie zmienne i zwrócić wynik. Dodatkowo w tablicy operacji ma zapamiętać napis: "added ```num1``` to ```num2``` got ```result```" (oczywiście z wartościami zmiennych podstawionymi w odpowiednie miejsce).
  2. ```multiply(num1, num2)``` - metoda ma pomnożyć przez siebie dwie zmienne i zwrócić wynik. Dodatkowo w tablicy operacji ma zapamiętać napis: "multiplied ```num1``` with ```num2``` got ```result```" (oczywiście z wartościami zmiennych podstawionymi w odpowiednie miejsce).
  3. ```subtract(num1, num2)``` - metoda ma odjąć od siebie dwie zmienne i zwrócić wynik. Dodatkowo w tablicy operacji ma zapamiętać napis: "subtracted ```num1``` from ```num2``` got ```result```" (oczywiście z wartościami zmiennych podstawionymi w odpowiednie miejsce).
  4. ```divide(num1, num2)``` - metoda ma podzielić przez siebie dwie zmienne i zwrócić wynik. Dodatkowo w tablicy operacji ma zapamiętać napis: "divided ```num1``` by ```num2``` got ```result```" (oczywiście z wartościami zmiennych podstawionymi w odpowiednie miejsce).
  5. ```printOperations()``` - metoda ma wypisać wszystkie operacje zapamiętane w pamięci.
  6. ```clearoperations()``` - metoda ma wyczyścić wszystkie operacje z pamięci.

Pamiętaj o używaniu ```this```.
*/
// stworzenie konstruktora/funkcje, zawsze piszemy wielką literą!!
var Calculator = function() {
        this.operationsHistory = [];
    }
    // dodaje metody
Calculator.prototype.add = function(num1, num2) {
    var sum = num1 + num2;
    this.operationsHistory.push("added " + num1 + " to " + num2 + " got " + sum);
    return sum;
};
Calculator.prototype.multiply = function(num1, num2) {
    var product = num1 * num2;
    this.operationsHistory.push("multiplied " + num1 + " with " + num2 + " got " + product);
    return product;
};
Calculator.prototype.subtract = function(num1, num2) {
    var diffrence = num1 - num2;
    this.operationsHistory.push("substracted " + num1 + " from " + num2 + " got " + diffrence);
    return diffrence;
};
Calculator.prototype.divide = function(num1, num2) {
    if (num2 !== 0) {
        var quotient = num1 / num2;
        this.operationsHistory.push("divided " + num1 + " by " + num2 + " got " + quotient);
        return quotient;
    } else {
        console.log("don't divide by 0!")
    }
};
// wypisanie wszystkich operacji zapisanych w pamieci/tablicy
Calculator.prototype.printOperations = function() {
    return this.operationsHistory;
};
// czyszczenie tablicy z wszystkich zapamietanych operacji
Calculator.prototype.clearOperations = function() {
    this.operationsHistory = [];
};

var firstObject = new Calculator(); // nowy obiekt
// ... i wywolywanie metod
firstObject.add(2, 6);
// 8
firstObject.multiply(2, 6);
// 12
firstObject.subtract(3, 8);
// -5
firstObject.divide(9, 3);
// 3
firstObject.divide(3, 0);
// don't divide by 0!
firstObject.printOperations();
// ["added 2 to 6 got 8", "multiplied 2 with 6 got 12", "substracted 3 from 8 got -5", "divided 9 by 3 got 3"]
firstObject.clearOperations();
// []
