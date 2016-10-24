document.addEventListener("DOMContentLoaded", function() {
    // console.log("dziala!");

    var allImages = document.querySelectorAll("img");
    var buttonShow = document.querySelector("#showButton");
    var buttonHide = document.querySelector("#hideButton");
    var input = document.querySelector("#tagInput");

    // console.log(allImages, buttonShow, buttonHide, input);

    buttonShow.addEventListener("click", function(event) {// daje event na buttonie show
        // console.log("buttonShow dziala!!");
        inputText = input.value; //pokazuje tekst inputa
        //   console.log(newText);
        //   input.value = ""; // czyszczenie inputa

        for (var i = 0; i < allImages.length; i++) { // iteruje po obrazkach
            var tag = allImages[i].dataset.tag; //biore dane z datasetu
            //  allImages[i].classList.add('invisible'); // wtedy bez elsa i z
            //if (allImages[i].dataset.tag.indexOf(inputText) !== -1) {
            //allImages[i].classList.remove("invisible");}
            if (tag.indexOf(inputText) == -1) {
                allImages[i].classList.add("invisible");
            } else {
                allImages[i].classList.remove("invisible");
            }
        }
        input.value = "";
    });

    buttonHide.addEventListener("click", function(event) { // daje event na buttonie hide
        // console.log("buttonHide gotowy do dzialania!");
        inputText = input.value; //pokazuje tekst inputa
        //   console.log(newText);
        //   input.value = ""; // czyszczenie inputa
        for (var i = 0; i < allImages.length; i++) {  // iteruje po obrazkach
            var tag = allImages[i].dataset.tag;
            // allImages[i].classList.remove('invisible'); // wtedy bez elsa i z
            //if (allImages[i].dataset.tag.indexOf(inputText) !== -1) {
            //allImages[i].classList.add("invisible");}
            if (tag.indexOf(inputText) != -1) {
                allImages[i].classList.add("invisible");
            } else {
                allImages[i].classList.remove("invisible");
            }
        }
        input.value = "";

    });

});

/*
// wersja z each od Jakuba
document.addEventListener("DOMContentLoaded", function () {

    var pictures = document.querySelectorAll('#gallery img'); // pseudotablica obrazków

    var btnHide = document.querySelector('#hideButton'); //guzik usuwania
    var btnShow = document.querySelector('#showButton'); //guzik pokazywania
    var tagsInput = document.querySelector('#tagInput'); //input do wyszukiwania po nazwie 'tagu'

    btnHide.addEventListener('click', function(event){ //na guziku Hide po kliknięciu
        console.log('wciśnięty '+ btnHide.innerText); //sprawdzam czy reaguje na klik - powie mi to
        var textNew = tagsInput.value; //zmiennej textNew przypisuję wartosć wpisaną w input

        tagsInput.value = ''; // czyszczę inputa - tj. przypisuje mu pustkę
        [...pictures].forEach(function(el) { //dla każdego elementu w tablicy obrazków

            if(el.dataset.tag.indexOf(textNew)!=-1){ //jeśli ciąg znaków wpisany do inputu ma index dodatni
                // tzn. że istnieje w ciągu znaków data-set => jest taki tag jak wpisany input

                console.log(el.dataset.tag); //wypisuję sobie jakie mają 'tagi' - tj. atrybuty data-tag

                el.classList.add('class', 'invisible'); // warunek spełniony: event przypisuję klasę visible
                                                        //do elementu w którym prawdzałem
            }
        })
    })

    btnShow.addEventListener('click', function(event){ // j.w.
        console.log('wciśnięty '+ btnShow.innerText);
        var textNew = tagsInput.value;
        console.log(tagsInput.value);
        tagsInput.value = '';
        [...pictures].forEach(function(el) {
            //console.log(el.dataset.tag);
            if(el.dataset.tag.indexOf(textNew)!=-1){
           // jak wyżej... guzik ma chować element po nazwie tagu więc:

                console.log(el.dataset.tag); //wypisuję sobie jakie mają 'tagi' - tj. atrybuty data-tag

                el.classList.remove('class', 'invisible'); //odbiera klasę elementowi sprawdzanemu po: input=nazwa tagu
            }
        })
    })

})
*/
