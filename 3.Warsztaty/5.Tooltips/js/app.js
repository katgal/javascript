/*
 <span class="tooltipText">Text tooltipa</span>
 */

document.addEventListener("DOMContentLoaded", function() {
    console.log("waaaghhh!");

    var toolTip = document.querySelectorAll('.tooltip');

    // console.log(toolTip);
    for (var i = 0; i < toolTip.length; i++) { // iteruje by nadac kazdemy spanowi event
        toolTip[i].addEventListener("mouseover", function(e) {
            console.log("I want this is red!");

            var spanText = this.dataset.text; // tekst tooltipa jest w datasecie, wiec musze skorzystac z dataset.text dla spana
            console.log(spanText); // wyswietla tekst tooltipa

            var newSpan = document.createElement("span"); //tworze nowy span, ktory bedzie sie wyswietlal jako tooltip
            newSpan.classList.add("tooltipText"); // dodaje do nowego spana klase tooltipText, ktora styluje "okienko"

            newSpan.innerText = this.dataset.text;
            this.appendChild(newSpan); // przypinam nowy span/tooltip
        });
        toolTip[i].addEventListener("mouseout", function(e) {
            console.log("because red is faster!");

            var remove = this.querySelector(".tooltipText"); // znajdujemy to co zesmy stworzyli, czyli span.tooltipText
            remove.parentNode.removeChild(remove); // usuwamy tooltip. odpinam od rodzica .tooltipText .spana z tooltipem, czyli sam .tooltipText
            //odpiecie klasy wywoluje dziwne rewolucje xD
        });
    }
});
/* // wersja z each

 document.addEventListener("DOMContentLoaded", function () {

   var toolTips = document.querySelectorAll('.tooltip'); // znajduję wsystkie spany z tooltipem

     [...toolTips].forEach(function(el) { // dla każdego elementu tooltip
         el.addEventListener('mouseover', function(event) { //event który po najechaniumyszką
             //console.log('jakiś mouseover');
             var textTooltipa = el.dataset.text; // pobiera text zapisany w data-text="..."

             el.innerHTML = el.innerHTML+"<span class='tooltipText'>"+textTooltipa+"</span>"; //nastęnie..
                                             // wrzuca elementowi kawałek kodu zmodyfikowany o tekst z jego data-text
                                                 // tekst/kod jest spanem-dzieckiem-elementu

         })
         el.addEventListener('mouseout', function(event) { // po zjechaniu myszką z elementu
             //console.log('jakiś mouseout');
             var childSpan = el.querySelector('span');
             childSpan.parentNode.removeChild(childSpan); // niszczymy span-diecko-elementu
         })
     })
 })
*/
