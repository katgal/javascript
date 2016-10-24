/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded", function() {

    var btn = document.querySelector(".button");
    list = document.querySelector(".list");

    btn.addEventListener("click", function() {
        // 1 sposob
        list.parentNode.removeChild(list); // usuwa wszystkie za jednym razem / usuwa caly element ul

        /* 2 sposob usuwa po kolei, choc nie dziala to tak jak powinno

        var childrenUl = list.children;
        for(var i = 0; i < childrenUl.length; i++){
          list.removeChild(childrenUl[i]);
        }
        */
    });
});
