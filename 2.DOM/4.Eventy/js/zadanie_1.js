/**
 * Created by Jacek on 2016-01-12.
 */
// classList of null po zmianie

document.addEventListener("DOMContentLoaded", function(){
// znika classList of null po dodaniu addEvent
var menu = document.querySelector("#menu");
var paragraf = document.querySelector("p");

menu.classList.add("menu");
paragraf.innerHTML = "A to jest paragraf w zadaniu 1";

// nic sięnie zmienia w 3?


});
