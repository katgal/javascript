/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('#element1').addEventListener('click', function(e) {
        console.log('Event in #element1 fired!');
    });

    document.querySelector('#element2').addEventListener('click', function(e) {
        console.log('Event in #element2 fired!');
        e.stopPropagation();
    });

    document.querySelector('#element3').addEventListener('click', function(e) {
        console.log('Event in #element3 fired!');
        // e.stopPropagation();
    });

    document.querySelector('#element4').addEventListener('click', function(e) {
        console.log('Event in #element4 fired!');
        // e.stopImmediatePropagation();
    });

    document.querySelector('#element5').addEventListener('click', function(e) {
        console.log('Event in #element5 fired!');
        e.stopImmediatePropagation();
    });

    // można zrobić na z poruszanie siępo dom siblingi itp
});
