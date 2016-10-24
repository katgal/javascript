/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded", function() {

    var div = document.querySelector("div");

    div.addEventListener("mousemove", function(event) {

        var globalX = document.querySelector("#globalX");
        var globalY = document.querySelector("#globalY");
        var localX = document.querySelector("#localX");
        var localY = document.querySelector("#localY");

        globalX.innerText = event.screenX;
        globalY.innerText = event.screenY;
        localX.innerText = event.clientX;
        localY.innerText = event.clientY;

    });

});
