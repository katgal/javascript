/**
 * Created by Jacek on 2016-01-12.
 */
 document.addEventListener("DOMContentLoaded", function(){

 var buttons = document.querySelectorAll("button");
 // var span = document.querySelectorAll("button span.counter");

// var clickCount = 0;

for (var i =0; i < buttons.length; i++){
buttons[i].addEventListener("click", function(event){


// clickCount= clickCount +1;
var id = this.id;
var span = document.querySelector("#" + id + "+ p span");

span.innerText = parseInt(span.innerText) +1;
});
}



 });
