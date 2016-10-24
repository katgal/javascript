/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded", function() {

    var buttons = document.querySelectorAll("button");

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function(event) {

            var span = document.querySelector(".counter");

            span.innerText = parseInt(span.innerText) + 1;
        });
    }



});
