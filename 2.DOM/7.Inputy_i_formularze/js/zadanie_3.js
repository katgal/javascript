document.addEventListener("DOMContentLoaded", function () {
    
    var logo = document.querySelectorAll("img");
    var btn = document.querySelector("button");
    var select = document.querySelector(".form-control");

    btn.addEventListener("click", function(event){
        event.preventDefault();
        var chosen = select.selectedIndex;
        var chosenName = select.options[chosen].text;
        if (chosenName === "Windows") {
            logo[0].classList.add("hidden") || logo[1].classList.add("hidden");
        } else if (chosenName === "Os X") {
            logo[1].classList.add("hidden") || logo[2].classList.add("hidden");
        } else if (chosenName === "Ubuntu"){
            logo[0].classList.add("hidden") || logo[2].classList.add("hidden");
        }
    });
});
/*
document.addEventListener("DOMContentLoaded", function () {

    var inptTeam1 = document.querySelector('#team1'); // pola inputów z których pobieramy wartości
    var inptPoint1 = document.querySelector('#points1');
    var inptTeam2 = document.querySelector('#team2');
    var inptPoint2 = document.querySelector('#points2');

    var table = document.querySelector('table'); // tabela ma rzędy z danymi poniżej
    var lastTr = table.querySelector('tr:last-child');
    var tabT1Data = lastTr.querySelector('td:first-child'); //miejsca na wpisanie pobranej wartości i wyświetlenie
    var tabT2Data = lastTr.querySelector('td:nth-child(2)');
    var tabScore = lastTr.querySelector('td:last-child');

    var formUlar = document.querySelector('form');

    var inputParent = document.querySelector('.form-group');


    inputParent.addEventListener('change', function (event) {

        if (event.target !== event.currentTarget) {

            tabT1Data.innerText = inptTeam1.value; //przypisanie wartości inputa do miejsca w tabeli
            tabT2Data.innerText = inptTeam2.value;
            tabScore.innerText = inptPoint1.value + " - " + inptPoint2.value;
        }
        event.stopPropagation();
    });

    formUlar.addEventListener('submit', function (event) { // guzik submit nie zadziała, jeśli warunki poniższe są spełnione

        if ((inptTeam1.value === inptTeam2.value)||(inptTeam1.value==="")||(inptTeam2.value==="")) {
            alert("can't send form: incorrect names of teams"); //
            event.preventDefault();
        } else if (inptPoint1.value < 0 || (!/^[0-9]+$/.test(inptPoint1.value))) {

            alert("can't send form: incorrect number of points of " + inptTeam1.value + " team"); //
            event.preventDefault();
        } else if ((inptPoint2.value < 0) || (!/^[0-9]+$/.test(inptPoint2.value))) {
            alert("can't send form: incorrect number of points of " + inptTeam2.value + " team"); //
            event.preventDefault();
        }
    });

});
*/
