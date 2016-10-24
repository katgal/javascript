document.addEventListener("DOMContentLoaded", function() {

    var foodCheckboxes = document.querySelectorAll(".checkbox label input"); // wszystkie checkboxy
    // var checkboxAll = document.querySelector(".checkbox:first-child label input"); // tak tez dziala, ale wyswietla nieprecyzyjnie
    var firstCheckbox = foodCheckboxes[0]; // checkbox wszystkich Dodatkow, czyli pierwszy
    // var clear = document.querySelector(".checkbox:nth-child(7) label input"); // tak tez mozna
    var clear = foodCheckboxes[foodCheckboxes.length - 1]; // checkbox odznaczajacy checkboxy, czyli ostatni
    var price = document.getElementById("price"); //span z Cena
    var submit = document.querySelector(".btn");
    // console.log(submit);

    // **************zaznaczanie wszytkich checkboxow

    firstCheckbox.addEventListener('click', function(event) { // daje event na pierwszym checkboxie
        if (this.checked === true) { // jeśli checkbox jest zaznaczony
            for (var i = 1; i < foodCheckboxes.length - 1; i++) { // iteruje po checkboxach  (bez ostatniego i pierwszego bo tam nie ma cen)
                if (foodCheckboxes[i].checked === false) { //jesli nie są zaznaczone
                    foodCheckboxes[i].checked = true; // zaznacza kazdy checkbox / musi byc tutaj jedno = !!!!bo to nie warunek w if xD
                    var addPrice = foodCheckboxes[i].getAttribute('data-price'); //pobiera cenę z atrybutu
                    //wstawiam w spanie price cene od zera poprzez iteracje dodaje do siebie kolejne liczby/ceny kazdego elementu...
                    // ...i zaokraglam do dwoch miejscach po przecinku
                    price.innerText = (parseFloat(price.innerText) + parseFloat(addPrice)).toFixed(2) + "zł"; // dodaje cene do spanu z cena calosiowa
                    //parseFloat konwertuje ciag na liczbe zmiennoprzecinkowa - wyluskuje liczby z tekstu
                }
            }
            clear.checked = false; // odznacza checkbox czyszczący zaznaczenie dodatków
        }
    });

    //*****************czyszczenie chceckboxow

    clear.addEventListener('click', function(event) { // daje event na ostatnim chceckboxie
        if (this.checked === true) { // jeśli zaznaczony
            for (var i = 0; i < foodCheckboxes.length - 1; i++) { //to dla każdego z iterowanych checkboxow (od 2-6)
                if (foodCheckboxes[i].checked === true) { // jeśli są zaznaczone
                    foodCheckboxes[i].checked = false; // odznacz wszystkie
                    price.innerText = 0 + "zł"; // wpisuje w spanie price wartosć '0'
                }
            }
        }
    });


    //******************zaznaczenie chceckboxow pojedynczo

    for (var i = 1; i < foodCheckboxes.length - 1; i++) { // dla kazdego checkboxa oprocz ostatniego
        foodCheckboxes[i].addEventListener('click', function(event) { // daje event
            if (this.checked === true) { // jeśli checkbox jest zaznaczony
                var addPrice = this.getAttribute('data-price'); // zmienna pobiera atrybut zapisany w inpucie - cena dodatku
                price.innerText = (parseFloat(price.innerText) + parseFloat(addPrice)).toFixed(2) + "zł"; //do kwoty istniejącej dodaje
                // cenę dodatku, pobiera ciągi znaków zamienia je na cyfry dodaje i zaokrągla

            } else { // jeśli chceckbox nie jest zaznaczony
                var minusPrice = this.getAttribute('data-price'); // pobiera cene dodatku
                price.innerText = (parseFloat(price.innerText) - parseFloat(minusPrice)).toFixed(2) + "zł"; // odejmuje ją od calej kwoty
            }
            clear.checked = false; // event powoduje odznaczenie pola "wyczyść"
        });
    }


    // Alarm do zaplaty
    submit.addEventListener('click', function(event) { //daje event na submicie
        alert("Do zapłaty " + price.innerText); //nie pobiera z danej tylko z DOM po zmianach tekstu zawartego w spanie
        // DOM przechowuje wartość danej jaką wstrzyknęliśmy sapanowi - ciągle go modyfikując funkcjami
    });

});


/*
****można też kombinawac ze zwyklymi funkcjami a potem eventy

document.addEventListener("DOMContentLoaded", function() {

    // Select All
    function selectAll() {
        var checkBox = document.querySelectorAll(".checkbox input");
        for (var i = 0; i < checkBox.length; i++) {
            checkBox[i].checked = true;
        }
    }
    // Select None
    function unCheckAll() {
        var checkBox = document.querySelectorAll(".checkbox input");
        for (var i = 0; i < checkBox.length; i++) {
            checkBox[i].checked = false;
        }
    }

    // Elements
    var checkBox = document.querySelectorAll(".checkbox input");
    var button = document.querySelector("button");
    var cost = document.querySelector("#price");
    var first = checkBox[0];
    var last = checkBox[checkBox.length - 1];

    first.addEventListener("click", selectAll);
    last.addEventListener("click", unCheckAll);
    button.addEventListener("click", function(event) {
        event.preventDefault();
        var money = 0;
        for (var i = 0; i < checkBox.length; i++) {
            if (checkBox[i].checked) {
                var price = checkBox[i].dataset.price;
                if (price !== undefined) {
                    money += parseFloat(checkBox[i].dataset.price);
                }
            }
            cost.innerText = money.toFixed(2) + " zł";
        }
        alert("Zapłacisz " + money.toFixed(2) + " zł")
    });
});

*/
