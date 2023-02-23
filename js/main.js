var accordion = function () {
    var data = $(".accordion").attr('data-accordion');
    $('.accordion-header').on('click', function(){
        if (data === "close") {
            $('.accordion-body').slideUp();
            if   ($(this).hasClass('active')) {
                $(this).toggleClass('active');
            }
            else{
                $('.accordion-header').removeClass('active');
                $(this).toggleClass('active');
            }
        }
        else {
            $(this).toggleClass('active');
        }
        $(this).next('.accordion-body').not(':animated').slideToggle();
    })
}

accordion();

var kontacts__accordion = function () {
    var data = $(".kontacts__accordion").attr('data-accordion');
    $('.kontacts__accordion-header').on('click', function(){
        if (data === "close") {
            $('.kontacts__accordion-body').slideUp();
            if  ($(this).hasClass('active')) {
                $(this).toggleClass('active');
            }
            else{
                $('.kontacts__accordion-header').removeClass('active');
                $(this).toggleClass('active');
            }
        }
        else {
            $(this).toggleClass('active');
        }
        $(this).next('.kontacts__accordion-body').not(':animated').slideToggle();
    })
}

kontacts__accordion();



$(function(){

    $('.projects__slider').slick({
        arrows: true,
        dots: false,
        slidesToShow: 1,
        // responsive: [
        //     {
        //         breakpoint: 1833,
        //         setting: {
        //             centerMode: true,
        //         }
        //     }
        // ]
    });

});

function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show')
        }
    })
}

let options = {
    threshold: [0.5] };
let observer = new
IntersectionObserver(onEntry, options)
let elements = 
document.querySelectorAll("h6.intro__title-one,h5.intro__title-two,h4.intro__title-three, nav.header__nav, a.header__logo")

for (let elm of elements) {
    observer.observe(elm)
}

function hoverOnFirst() {
    document.getElementById('second').classList.add('active')
    document.getElementById('three').classList.add('active')
}
function hoverOffFirst() {
    document.getElementById('second').classList.remove('active')
    document.getElementById('three').classList.remove('active')
}

function hoverOnSecond() {
    document.getElementById('first').classList.add('active')
    document.getElementById('three').classList.add('active')
}
function hoverOffSecond() {
    document.getElementById('first').classList.remove('active')
    document.getElementById('three').classList.remove('active')
}

function hoverOnThree() {
    document.getElementById('second').classList.add('active')
    document.getElementById('first').classList.add('active')
}
function hoverOffThree() {
    document.getElementById('second').classList.remove('active')
    document.getElementById('first').classList.remove('active')
}

