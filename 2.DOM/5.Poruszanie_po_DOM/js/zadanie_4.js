/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded", function() {

    // 1. Element o klasie ```first``` -> jego pierwsze dziecko -> jego trzecie dziecko.
    var first = document.querySelector(".first").firstElementChild.children[2];
    console.log(first);

    // 2. Element o id ```second``` -> jego rodzic -> jego czwarte dziecko.
    var second = document.querySelector("#second").parentElement.children[3];
    console.log(second);

    /*3. Element o atrybucie ```data-ex``` nastawionym na wartość ```third``` -> jego dziadek
    -> jego ostatnie dziecko -> jego pierwsze dziecko -> jego środkowe dziecko
    (żeby otrzymać środkowy element, podziel ilość dzielci przez 2 i zaokrąglij do góry).
    */

    var third = document.querySelector("h1[data-ex='third']");
    console.log(third);
    var parent = third.parentElement;
    var grandpa = parent.parentElement;
    console.log(grandpa);
    var lastChildOfGrandpa = grandpa.lastElementChild;
    var firstChild = lastChildOfGrandpa.firstElementChild;
    console.log(firstChild);
    // jest blad trza na ul wejsc
    var ulFirstChild = firstChild.firstElementChild;
    console.log(ulFirstChild);
    // jego środkowe dziecko (żeby otrzymać środkowy element,
    // podziel ilość dzielci przez 2 i zaokrąglij do góry).
    var childrenUl = ulFirstChild.children;
    var middleChild = Math.ceil(childrenUl.length / 2);
    console.log(middleChild); //w konsoli wychodzi cyfra 3
    //w tablicy z li, srodkowy element bedzie mial indeks 2, wiec trzeba odjac: -1
    var middleChildFinale = childrenUl[middleChild - 1];

    console.log(middleChildFinale);


    /*4. Div o klasie ```forth``` -> jego rodzic
    -> jego pierwsze dziecko o klasie ```article``` -> jego drugie dziecko o tagu ```<p>```.
    */

    var forth = document.querySelector(".forth").parentElement;
    // console.log(forth);
    var forthArticle = forth.querySelector("article");
    // console.log(forthArticle);
    // var childOfArticle2 = forthArticle.querySelector("p:nth-child(4)"); // albo tablica z p
    var childOfArticle2 = forthArticle.querySelectorAll("p");
    // console.log(childOfArticle2);
    var childDrugieP = childOfArticle2[1];
    console.log(childDrugieP);
});
