/* Jquery smooth arrow */
document.addEventListener('mousewheel', onscroll, { passive: true });


$(".arrow").click(function () {
    $('html,body').animate({
        scrollTop: $(".img1").offset().top
    },
        'slow');
});


/* animations Scroll Magic */

var controller = new ScrollMagic.Controller();

var scene1 = new ScrollMagic.Scene({
    triggerElement: '.box1',
    // là où ça s'arrête
    triggerHook: 0.9, // là où ça trigger
    reverse: false

    //by default half of the screen

})
    .setClassToggle('.box1', 'fade-in')
    .addIndicators({
        y: 800,
        colorStart: 'white'
    })
    .addTo(controller);



var scene2 = new ScrollMagic.Scene({
    triggerElement: '.box2',
    // là où ça s'arrête
    triggerHook: 0.9, // là où ça trigger
    reverse: false

    //by default half of the screen

})
    .setClassToggle('.box2', 'fade-in')
    .addIndicators({
        y: 800,
        colorStart: 'white'
    })
    .addTo(controller);





var scene2 = new ScrollMagic.Scene({
    triggerElement: '.box3',
    // là où ça s'arrête
    triggerHook: 0.9, // là où ça trigger
    reverse: false

    //by default half of the screen

})
    .setClassToggle('.box3', 'fade-in')
    .addIndicators({
        y: 800,
        colorStart: 'white'
    })
    .addTo(controller);


/* Green Sock anim */



/* Effet Js */


TweenMax.to("h1", 2, {
    opacity: 1,
    ease: Expo.easeInOut
})

TweenMax.to('.arrow', .75, {
    delay: 1.25,
    opacity: 1,
})





