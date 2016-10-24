/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function() {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */

    /*   ## Ćwiczenie 1
     Na stronie są 3 obrazki z ikonami najpopularniejszych przeglądarek internetowych. Niestety zarówno obrazki, jak i linki prowadzące do ich stron zawierają błędy.
     Napisz kod JavaScript, który:
     1. Poprawi elementy tak, żeby do każdej przeglądarki było podpięte odpowiednie logo (obrazek jest nastawiany za pomocą ```background-image```).
     1. Poprawi linki tak, żeby każdy miał poprawny opis i atrybut href.
     1. Poprawi szerokość elementu o klasie ```chrome``` (powinno być 100px).

     Podejrzyj w konsoli, jak wygląda kod CSS dopisany przez JavaScript. Zastanów się, dlaczego dopisywany jest w tym miejscu.
     Napisz odpowiedź na to pytanie w komentarzu do zadania.
*/


    // var background = document.querySelectAll(".ex1 > div div");
    // var backgroundImage = background.style.BackgroundImage

    var divs = document.querySelectorAll(".ex1 > div div");
    for (var i = 0; i < divs.length; i++) {
        var div = divs[i];
        var className = div.className;
        div.style.backgroundImage = "url(assets/img/" + className + ".png)";
    }

    // wersja szybsza niekaniecznie lepsza
    /*
    [...document.querySelectorAll(".ex1>div div")].forEach(function(div){
      div.style.backgroundImage = "url(assets/img/" + div.className + ".png)";
    })
    */

    var elementA = document.querySelectorAll(".ex1 a");
    for (var i = 0; i < elementA.length; i++) {
        var a = elementA[i];
        var link = a.getAttribute("href");
        if (link.indexOf("http") == -1) {
            a.setAttribute("href", "http://" + link);
        }
    }


    var chrome = document.querySelector(".ex1 .chrome")
    chrome.style.width = "100px";


    /*## Ćwiczenie 2
    Na stronie jest lista, w której musisz wpisać swoje imię i nazwisko, swój ulubiony kolor i potrawę.
    1. Wyszukaj wszystkie spany i zapisz je do odpowiednich zmiennych.
    2. Za pomocą innerHTML wypełnij w nich odpowiednie informacje.
    */

    // var elementSpan1 = document.querySelector(".ex2 span li#name");
    // elementSpan1.innerText = "Hilary";

    var elementSpan = document.querySelectorAll(".ex2 span");

    elementSpan[0].innerText = "Hilary";
    elementSpan[1].innerText = "red";
    elementSpan[2].innerText = "pomidorowa zupa";

    /*## Ćwiczenie 3
    Na stronie jest proste menu. Zarówno kod HTML, jak i CSS jest już do niego przygotowany. Niestety ktoś zapomniał dodać odpowiednie klasy do odpowiednich elementów.
    1. Wyszukaj element ```ul``` i dodaj mu klasę ```menu```.
    1. Wyszukaj wszystkie elementy ```li``` i dodaj im klasę ```menuElement``` (użyj do tego pętli). Uważaj, żeby nie wykasować klasy ```selected```.
    1. Zauważ, że jeden z elementów ma czerwony kolor tekstu - jest to spowodowane tym, że ma klasę ```error```. Zabierz mu ją (najlepiej, jeżeli zabierzesz tę klasę wszystkim elementom, które ją mają).
    */

    var elementUl = document.querySelector(".ex3 ul");
    elementUl.classList.add("menu");

    var elementsLi = document.querySelectorAll(".ex3 ul li");

    for (var i = 0; i < elementsLi.length; i++) {
        var li = elementsLi[i];
        var addClass = li.classList.add("menuElement");

    }

    var elementLi = document.querySelectorAll(".ex3 ul li.error");
    for (var i = 0; i < elementLi.length; i++) {
        var liError = elementLi[i];
        var removeClass = liError.remove("error");
    }

    /*## Ćwiczenie 4
    Dodaj do każdego elementu listy atrybut ```data-id``` przyjmujący kolejne liczby całkowite (zaczynając od 1). Rozwiąż to zadanie na dwa sposoby:
    1. Używając datasetu.
    1. Używając matody ```setAttribute```.
    */
    var atrData = document.querySelectorAll(".ex4 ul li");
    for (var i = 0; i < atrData.length; i++) {
        atrData[i].dataset.id = i + 1;
    }

    // setAttribute
    var atrData = document.querySelectorAll(".ex4 ul li");
    for (var i = 0; i < atrData.length; i++) {
        atrData[i].setAttribute("data-id", i + 1);
    }

    /*## Ćwiczenie 5
    Zmodyfikuj listę w następujący sposób:
    1. Dodaj atrybut ```data-direction``` nastawiony na wartość ```up``` każdemu elementowi ```li```, który nie posiada tego atrybutu.
    1. Nastaw kolor tła co drugiego elementu listy na zielony.
    1. Nastaw 5-mu elementowi listy klasę big.
    1. Nastaw co 3-mu elementowi podkreślenie.
    */

    var dataDir = document.querySelectorAll(".ex5 ul li");

    for (var i = 0; i < dataDir.length; i++) {
        if (dataDir[i].dataset.direction !== "down") {
            dataDir[i].dataset.direction = "up";
        }
    };

    // var backgroundEl = document.querySelectorAll(".ex5 ul li:nth-child(odd)");
    // backgroundEl.style.backgroundColor = "green";

    var backgroundEl = document.querySelectorAll(".ex5 ul li");

    for (var i = 0; i < backgroundEl.length; i++) {
        if (i % 2 !== 0) {
            backgroundEl[i].style.backgroundColor = "green";
        }
    }

    var el_5 = document.querySelector(".ex5 ul li:nth-child(5)");
    el_5.classList.add("big");

    var el_3 = document.querySelectorAll(".ex5 ul li:nth-child(3n+3)");
    for (var i = 0; i < el_3.length; i++) {
        el_3[i].style.textDecoration = "line-through"; //dałam przkreślenie bo nie było widać podkreslenia


    }


});
