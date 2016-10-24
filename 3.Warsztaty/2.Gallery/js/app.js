/**
 * Created by Jacek on 2015-12-16.
 */

/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */

document.addEventListener("DOMContentLoaded", function() {
    // console.log("działa!!!");
    //
    var listElements = document.querySelectorAll("li");
    var bodyBody = document.querySelector("body");

    // console.log(listElements);
    // console.log(bodyBody);

// Taki sposób dodawania event listenerów zadziała, ale możnaby pomyśleć o event bubblingu. https:
//www.kirupa.com/html5/handling_events_for_many_elements.htm

    // addEventListener dziala na jednym elemencie, wiec trzeba przeiterowac kazdy element
    for (var i = 0; i < listElements.length; i++) {
        listElements[i].addEventListener("click", function(event) {
            // console.log("działa!yupi!");

            //wypisuje  w konsoli adres url kliknietego obrazka
            console.log(this.firstChild.getAttribute("src"));

            //tworzy nowego diva ze zdjeciem i dodaje na koncu body w html
            // 1. potrzebny nam jest nowy div...
            newDiv = document.createElement("div");
            //nadajemy klase fullScreen tak jak w pliku style.css
            newDiv.classList.add("fullScreen");
            bodyBody.appendChild(newDiv);

            // 2. ...i adres zdjecia, ktore ma sie pojawic po kliknieciu
            newImage = document.createElement("img");
            //ustawiamy atrybut src
            newImage.setAttribute("src", this.firstChild.getAttribute("src"));
/*
mozna zrobic za pomocą jest krócej
  var img = document.getElementById('sunset');
  console.log(img.src);
*/
            newDiv.appendChild(newImage);

            // teraz dodajemy button potrzebny do "zamkniecia" obrazka
            buttonAdd = document.createElement("button");
            buttonAdd.classList.add("close");
            buttonAdd.innerText = "Close";
            newDiv.appendChild(buttonAdd);

            // dodajemy event do buttona, zeby w momencie kliknieca "zamknal" zdjecie
            buttonAdd.addEventListener("click", function(event) {
            newDiv.parentNode.removeChild(newDiv);
            })
        });
    }
});
