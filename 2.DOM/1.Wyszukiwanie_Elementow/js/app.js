/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function() {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */
    /* ## Ćwiczenie 1
     Wyszukaj na stronie i zapisz do odpowiednio nazwanych zmiennych nastepujące elementy:
     1. Element o id ```home``` (na dwa sposoby),
     1. Pierwszy element li **nie** posiadający atrybutu ```data-direction```,
     1. Pierwszy element o klasie ```block```,

     Pamiętaj, żeby za każdym razem sprawdzić, czy wczytałeś odpowiedni element.
     Pamiętaj, żeby używać funkcji, które wyszukują tylko **jeden** element.
*/
    console.log(document.querySelector("#home"));
    console.log(document.getElementById("home"));

    console.log(document.querySelector("li:not([data-direction])"));
    console.log(document.querySelector(".block"));

    /*## Ćwiczenie 2
    Wyszukaj na stronie i zapisz do odpowiednio nazwanych zmiennych nastepujące elementy:
    1. Wszystkie elementy ```li```, które znajdują się w tagu ```nav```,
    1. Wszystkie paragrafy należące do wszystkich elementów ```div```,
    1. Wszystkie divy znajdujące się w tagu ```article```,

    Pamiętaj, żeby za każdym razem sprawdzić, czy wczytałeś odpowiednie elementy.
    Pamiętaj, żeby używać funkcji, które wyszukują **wiele** elementów.
    Za każdym razem wypisz w konsoli, ile jest znalezionych przez ciebie elementów.
    */

    console.log(document.querySelectorAll("nav li"));
    // 7
    console.log(document.querySelectorAll("div p"));
    // 8
    console.log(document.querySelectorAll("article div").length);
    // 14

    /*## Ćwiczenie 3
    Wyszukaj na stronie i zapisz do odpowiednio nazwanej zmiennej tag ```article``` o klasie ```first```. Następnie:
    1. Wypisz w konsoli, ile elementów ```h1``` znajduje się w tym tagu.
    1. Wyszukaj w nim wszystkie elementy o klasie ```oferts```. Przeiteruj je i wypisz nazwy ich tagów w konsoli.
    1. Wyszukaj w nim wszystkie elementy ```div```. Przeiteruj je i wypisz nazwy ich klas w konsoli.

    Pamiętaj, żeby za każdym razem sprawdzić, czy wczytałeś odpowiednie elementy.
    Pamiętaj, żeby używać funkcji, które wyszukują **wiele** elementów.
    Za każdym razem wypisz w konsoli, ile jest znalezionych przez ciebie elementów.
    */

    var article = document.querySelector("article.first").querySelectorAll("h2");
    console.log(article.length);

    // elementy oferts, przeiterowanie i wypisanie nazw tagów
    var oferts = document.querySelector("article.first").querySelectorAll(".oferts");
    console.log(oferts.length);


    for (var i = 0; i < oferts.length; i++) {
        console.log(oferts[i].tagName);
    }
    // elementy div, przeiterowanie i wypisanie po nazwie klas
    var div = document.querySelector("article.first").querySelectorAll("div");
    console.log(div.length);

    for (var i = 0; i < div.length; i++) {
        console.log(div[i].className);
    }

    /*## Ćwiczenie dodatkowe
    Znajdź wszystkie elementy li, które znajdują się w tagu nav.
    Następnie nadaj każdemu elementowi li atrybut ```data-direction = „top”```,
    ale tylko dla tych elementów, które nie posiadają ustawionego tego atrybutu.
    */
    var nav = document.querySelectorAll("nav li");

    for (var i = 0; i < nav.length; i++) {

        // var dataDirection = nav[i].dataset.direction; // nie dziala, wywala blad, nie wiem dlaczego tak sie dzieje(?)
        if (nav[i].dataset.direction !== "down") {
            nav[i].dataset.direction = "top";

        }
    }
});
