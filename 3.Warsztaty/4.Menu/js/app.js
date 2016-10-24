document.addEventListener("DOMContentLoaded", function() {

    console.log("We will build it for you...");

    var listEl = document.querySelectorAll(".nav>ul>li"); //bezposrednie dzieci .naw i pierwszej ul
    console.log(listEl);

    for (var i = 0; i < listEl.length; i++) { // iteruje po elemntach listy by dodac eventy do kazdego li
        listEl[i].addEventListener("mouseover", function(e) {
            // console.log("work, work, work");
            var secondUl = this.querySelector("ul"); // ul zagniezdzone - wysuwana lista
            if (secondUl !== null) { // jesli podlista istnieje, (zwrocony element jest inny niz null)
                console.log("work, work, work"); // wiadomosc sie wyswietla tylko jesli podlista istnieje
                secondUl.style.display = "block"; // nadaje liscie zagniezdzonej styl display block, czyli pojawi sie lista
            }
        });

        listEl[i].addEventListener("mouseout", function(e) {
            // console.log("yes, master?");
            var secondUl = this.querySelector("ul");
            if (secondUl !== null) { // jesli podlista istnieje, (zwrocony element jest inny niz null)
                console.log("yes, master?"); // wiadomosc sie wyswietla tylko jesli podlista istnieje
                secondUl.style.display = "none"; // lista nie bedzie wyswietlana
            }
        });
    }

});
