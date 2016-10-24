/**
 * Created by Jacek on 2015-12-16.
 */

document.addEventListener("DOMContentLoaded", function() {
    // console.log("działa!!!");

    var buttonNext = document.querySelector("#nextPicture");
    var buttonPrev = document.querySelector("#prevPicture");
    var listElements = document.querySelectorAll("li");
    // licznik - bedzie określac index obrazka, który jest aktualnie widoczny, zaczynamy od pierwszego,
    //czyli obrazka o indekcie 0
    var counter = 0;

    // sprawdzam czy sie dobrze wyswietlaja
    // console.log(buttonNext, buttonPrev, listElements);

    buttonNext.addEventListener("click", function(event) {
        // console.log("click!");
        listElements[counter].classList.remove("visible"); //wylaczam klase visible; obrazek znika po wcisnieciu przycisku

        //sposob z wykorzystaniem modulo
        // counter = (counter + 1) % listElements.length;
        // listElements[counter].classList.add("visible");

        if (counter === listElements.length - 1) { // jesli counter znajdzie sie na ostatnim elemencie czyli indeksie 5
            counter = 0; // to zeruj licznik-counter, wroc do indeksu 0
        } else {
            counter++; // jesli nie zero to idz dalej - zwiekszaj indeks
        }
        listElements[counter].classList.add("visible");

    });

    buttonPrev.addEventListener("click", function(event) {
        // console.log("click, click!!!");
        listElements[counter].classList.remove("visible");

        //po przeklikaniu obrazki znikaja!! trzeba wymyslic jakis warunek ... ale na razie bida...
        // counter = (counter -1) % listElements.length;
        // listElements[counter].classList.add("visible");

        // if'a trzeba zrobic odwrotnie niz w buttonNext
        if (counter === 0) { // jesli counter jest na pierwszym indeksie, czyli 0
            counter = listElements.length - 1; // to przejdz do ostatniego indeksu, czyli 5
        } else {
            counter--; // jesli nie to zmniejszaj indeks, czyli przewijaj zdjecia od tylu
        }
        listElements[counter].classList.add("visible");

    });
});
