/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded", function() {

    var buttons = document.querySelectorAll(".deleteBtn");

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function(event) {
            //  this.parentNode.parentNode.innerHTML = '';
            // albo tez
            //trza skasowac  dziadka guzika
            var rowToDelete = this.parentElement.parentElement;
            // rodzic wiersza kasuje dziecko
            rowToDelete.parentNode.removeChild(rowToDelete);
        });
    }
});
