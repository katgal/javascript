/**
 * Created by Jacek on 2016-01-12.
 */

document.addEventListener("DOMContentLoaded", function() {

    var checkbox = document.querySelector("#invoice");
    var checkboxData = document.querySelector("#invoiceData");

    checkbox.addEventListener("click", function(event) { // nastawiam event na chceckboxie
        if (checkbox.checked) { // jesli checkbox jest zaznaczony to...
            checkboxData.classList.remove("hidden"); // usun klase hidden - pojawi sie niewidoczna sekcja formularza
        } else {
            checkboxData.classList.add("hidden"); //gdy checkox jest niezaznaczony to dodatkowa sekcja jest ukryta/ma klase hidden
        }
    });
});
