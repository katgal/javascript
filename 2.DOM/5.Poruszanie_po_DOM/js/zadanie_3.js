/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded", function() {

    var listInDivs = document.querySelectorAll(".listContainer");

    for (var i = 0; i < listInDivs.length; i++) {
        listInDivs[i].addEventListener("mouseover", function(event) {
            var list = this.children[0].children;
            list[0].style.backgroundColor = "red";

            var blue = list[list.length - 1];
            blue.style.backgroundColor = "blue";

            for (var i = 1; i < list.length - 1; i++) {
                list[i].style.backgroundColor = "green";
            }
        });
    }
});
