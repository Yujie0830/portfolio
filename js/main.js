// Pointer
var pointerF = document.querySelector('.Pointer__front');
var pointerB = document.querySelector('.Pointer__back');

document.onmousemove = function(event){
    event = event || window.event;
    
    var left = event.clientX;
    var top = event.clientY;

    pointerF.style.transform = "translate(" + left + "px, " + top + "px)";
    pointerB.style.transform = "translate(" + left + "px, " + top + "px)";
};

document.addEventListener('mousemove', function (e) {
    pointerF.classList.add('fadein');
    pointerB.classList.add('fadein');
});

var links = document.querySelectorAll('a, button');

links.forEach(function(pointer) {
    pointer.addEventListener('mouseover', function hover() {
        pointerF.classList.add('hover');
        pointerB.classList.add('hover');
    });
    pointer.addEventListener('mouseleave', function leave() {
        pointerF.classList.remove('hover');
        pointerB.classList.remove('hover');
    });
});


//
// $('.gotop').on('click', function(event){
// 	event.preventDefault();
// 	$('body,html').animate({
// 		scrollTop: 0 ,
// 		}, 600
// 	);
// });

