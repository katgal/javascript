document.addEventListener("DOMContentLoaded", function () {

var cardNumb = document.querySelector('#card'); //walidowany input
    var cardName = document.querySelector('#type'); // typ karty podaję w szarym divie jako wynik walidacji

    cardNumb.addEventListener('change', function(event){
        if ((this.value.indexOf(4) === 0)&&(13<=this.value.length)&&(this.value.length<=16)) {
            cardName.innerText='Visa';
        } else if ((this.value.indexOf(5) === 0)&&(this.value.length==16)) {
            cardName.innerText='Mastercard';
        } else if ((this.value.indexOf(3) === 0)&&((this.value.indexOf(4) === 1)
            ||(this.value.indexOf(7) === 1))
            &&(this.value.length==15)) {
            cardName.innerText='Mastercard';
        } else {
            cardName.innerText='err card type!!';
        }


    });

});
