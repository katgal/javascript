/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded", function() {

    var button = document.querySelector(".button");
    var inputs = document.querySelectorAll("input");
    var table = document.querySelector("table");
    // jak klikamy w button, tworzy sie nowa komorka z nowym tekstem
    button.addEventListener("click", function(event) {
        for (var i = 0; i < inputs.length; i++) {
            //dodac nowa komorke
            var newTd = document.createElement("td");
            // zmienic tekst w komorce
            newTd.innerText = inputs[i].value;
            //dodac komorke na koncu
            table.appendChild(newTd);
        }
        // dodac nowy pusty wiersz na koncu tabeli (jako ostatnie dziecko)
        var newTr = document.createElement("tr");
        table.appendChild(newTr);
    });

});
