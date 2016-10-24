/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded", function() {

    var btn = document.querySelector(".button");
    var addUlEl = document.querySelector(".menu")
    btn.addEventListener("click", function() {

        var newLi = document.createElement("li");

        newLi.innerText = "Element #" + addUlEl.children.length;

        addUlEl.appendChild(newLi);
    });
});
