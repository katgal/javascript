document.addEventListener("DOMContentLoaded", function() {
    var left = document.querySelector("#list1");
    var right = document.querySelector("#list2");

    var onclickA;
    var onclickB = function() {
        left.appendChild(this);
        this.onclick = onclickA;
        return false;
    };

    onclickA = function() {
        right.appendChild(this);
        this.onclick = onclickB;
        return false;
    };

    for (var i = 0; i < left.getElementsByTagName("li").length; i++)
        left.getElementsByTagName("li")[i].onclick = onclickA;
    for (var i = 0; i < right.getElementsByTagName("li").length; i++)
        right.getElementsByTagName("li")[i].onclick = onclickB;
});

/*

document.addEventListener("DOMContentLoaded", function () {

    var buttMove = document.querySelectorAll('.moveBtn'); //guziki
    var list = document.querySelectorAll('ul');

    [...buttMove].forEach(function (el) { // dla każdego guzika o indexie

        el.addEventListener('click', function (event) { // konkretny element-guzik dostaje event
            var itemDel = this.parentElement; //element <li> do skasowania jest ojcem linka-guzika
            var itemCloned = itemDel.cloneNode(true); //tworzę kolon elementu do skasowania

            if (this.parentElement.parentElement.getAttribute('id') == 'list1') { //jeżeli guzik znajduje się w liście nr 1
                var newDest = list[1]; // nowym miejscem dla elementu będzie lista nr 2
            }
            else {
                var newDest = list[0];  // i vice versa ...
            }
            newDest.appendChild(itemCloned); // wrzucam klon do nowego miejsca przeznaczenia
            newDest.replaceChild(itemDel, itemCloned); //podmieniam elementem do usuniecia z klonem

            //otrzymuję sytuację w kórej element został przeniesiony do nowego miejsca
            //a na starym miejscu został jego klon - który nam nie jest potrzebny

            itemCloned.parentNode.removeChild(itemCloned); // każę rodzicowi wiersza aby
            // skasował dziecko - KOLON!!! cha cha cha,
        })
    })
});
*/
