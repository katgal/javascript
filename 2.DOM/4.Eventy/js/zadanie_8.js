/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded", function() {

    var windowHeight = document.querySelector("#windowHeight");
    var windowWidth = document.querySelector("#windowWidth");

    window.addEventListener('load', function(event) { //rozmiar okna bezposrednio po wgraniu
        windowHeight.innerText = window.innerHeight;
        windowWidth.innerText = window.innerWidth;
    });

    window.addEventListener("resize", function(event) { //rozmiar okna przy zmianie rozmiarow
        windowHeight.innerText = window.innerHeight;
        windowWidth.innerText = window.innerWidth;
    });


});
