$(document).ready(function() {
    $('.review__slider').slick({

        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/prev.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/next.png"></button>',
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        infinite: true,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true

                }
            },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    dots: true
                }
            }
        ]

    });
});


//map
let map;

var width = document.documentElement.clientWidth,
    mapCenter;
if (width < 576) {
    mapCenter = { lat: 55.749156573987825, lng: 37.62940867668522 };
} else {
    mapCenter = { lat: 55.74844504285342, lng: 37.62711607461039 };
}


function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: mapCenter,
        zoom: 16,
    });
    var marker = new google.maps.Marker({
        position: { lat: 55.74844504285342, lng: 37.62711607461039 },
        map: map,
        icon: '../icons/map.png',
    });

    var content = '<div class="map">' +
        '<div class="map__title">г. Москва</div>' +
        '<div class="map__text">ул. Садовническая, дом 5, офис 4-6 </br> 700 от м.Новокузнецкая </br> Тел: <a href="tel:79264230100">+7(926) 423 01 00</a></div>' +
        '<div class="map__email"><a href="mailto:info @glopt.ru">info @glopt.ru</a></div>' +
        '<div class="marker-arrow"></div>' +
        '</div>';

    var info = new google.maps.InfoWindow({
        content: content,
        pixelOffset: new google.maps.Size(240, -40),
        maxWidth: '330',
    });

    info.open(map, marker);


}

//nav bar
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.main__cover'),
        menuItem = document.querySelectorAll('.main__cover-item'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('main_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('main_active');
        });
    });
});