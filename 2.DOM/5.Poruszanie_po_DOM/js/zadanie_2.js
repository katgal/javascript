/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded", function() {

    var buttons = document.querySelectorAll(".button");

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function(event) {
            var divs = this.parentElement;
            var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
            divs.style.backgroundColor = randomColor;
        });
    }
});
