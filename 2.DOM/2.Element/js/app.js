/**
 * Created by Jacek on 2016-01-11.
 */
// kiedy załaduje sie DOM wykonaj funkcje
document.addEventListener("DOMContentLoaded", function(){
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */

    /* ## Ćwiczenie 1
     Przeanalizuj kod HTML i JavaScript tego zadania.
     Wypisz w konsoli wszystkie wcześniej przygotowane zmienne, ich typy i klasy.
     W przypadku tablic przeiteruj (używając np. pętli ```for```)
     wypisując typ i klasę dla każdego elementu, który znajduje się w tablicy.
     */

/* prostsza wersja
function showElInfo(el){
  console.log(el, typeof el, el.tagName, el.className);
}
function showElsInfo(els){
  for (var i = 0; i < els.length; i++){
    showElsInfo(els[i]);
  }
}

showElInfo(homeElement);
showElsInfo(childElements);
*/
console.log(homeElement ,typeof homeElement, homeElement.className);
console.log(childElements, typeof childElements, childElements.className);
console.log(banner, typeof banner, banner.className);
console.log(blocks, typeof blocks, blocks.className);
console.log(links, typeof links, links.className);

for (var i = 0; i < childElements.length; i++){
  console.log(typeof childElements[i], childElements[i].className);
}

for (var i = 0; i < blocks.length; i++){
  console.log(typeof blocks[i], blocks[i].className);
}

for(var i = 0; i < links.length; i++){
  console.log(typeof links[i], links[i].className);
}

/*## Ćwiczenie 2
Wypisz w konsoli wartości ```innerHTML``` i ```outerHTML``` dla elementów zmiennej ```blocks```.
Napisz w komentarzu, czym się od siebie różnią. Nastaw wartość ```innerHTML``` na "Nowa wartość diva o klasie blocks".
Przeanalizuj, jak zmienił się kod HTML strony.
*/

blocks = document.querySelectorAll(".block");

// nastawia HTML znajdujący się w tagu
for (var i = 0; i<blocks.length;i++ ){
  console.log(blocks[i].innerHTML);
}
/*
            <a href="">Start</a>
            <a href="">About</a>


            <a href="">Service</a>
            <a href="">Portfolio</a>


            <a href="">Blog</a>
            <a href="">Contact</a>
*/
// nastawia HTML wraz z tagiem
for (var i = 0; i < blocks.length; i++){
  console.log(blocks[i].outerHTML);
}
/*
<div class="block">
            <a href="">Start</a>
            <a href="">About</a>
        </div>
<div class="block">
            <a href="">Service</a>
            <a href="">Portfolio</a>
        </div>
<div class="block">
            <a href="">Blog</a>
            <a href="">Contact</a>
        </div>
*/

for (var i = 0; i<blocks.length;i++ ){
  console.log(blocks[i].innerHTML = "Nowa wartość diva o klasie blocks");
}
for (var i = 0; i < blocks.length; i++){
  console.log(blocks[i].outerHTML);
}

// <div class="block">Nowa wartość diva o klasie blocks</div>

/*## Ćwiczenie 3
Wypisz w konsoli id elementu kryjącego się w zmiennej ```homeElement```.
*/

console.log(homeElement.id);

/*# Ćwiczenie 4
Wypisz w konsoli tagi wszystkich elementów, które znajdują się w zmiennej ```childElements```
(pamiętaj o tym, że jest to tablica).
*/

var childElements = document.querySelector(".oferts").children;

for (var i = 0; i < childElements.length; i++){
  console.log(childElements[i].tagName);
}

/* div
   h2
   p
*/

/*## Ćwiczenie 5
Wypisz w konsoli wartość atrybutu ```dataset```
dla każdego elementu znajdującego się w zmiennej ```links``` (pamiętaj o tym, że jest to tablica).
*/

var links = document.querySelector(".links").children;
for (var i = 0; i < links.length; i++){
  console.log(links[i].dataset);
}

/*
DOMStringMap {color: "blue"}
DOMStringMap {color: "red"}
DOMStringMap {color: "green"}
DOMStringMap {color: "pink"}
*/

/*## Ćwiczenie 6
Wypisz w konsoli wartość atrybutów ```classList``` i ```className``` dla zmiennej ```banner```.
Wypisz w konsoli, jakiego typu (i ewentualnie jakiej klasy) są te wartości.
*/

var banner = document.querySelector(".ban");

for (var i = 0; banner.length; i ++){
  console.log(typeof banner[i], banner[i].classList, banner[i].className);
}


});
