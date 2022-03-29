$(window).scroll(function() {
    var headerHeight = $(".header").outerHeight();
    // kiểm tra điều kiện > header thì mới addClass 
    if ($(window).scrollTop() > headerHeight) {
        $('.header').addClass('fixed');
    } else {
        $('.header').removeClass('fixed');
    }
});


$(document).ready(function() {
    $(".menu-item").click(function() {
        $(this).toggleClass("show");
    });
    $(".toggle-menu").click(function() {
        $(this).addClass("show");
        $('.mobile-menu').addClass('show');
    });
    $(".close").click(function() {
        $('.toggle-menu').removeClass("show");
        $('.mobile-menu').removeClass('show');
    });

    $('.banner-main').owlCarousel({
        loop: true,
        // margin: 20,
        center: true,
        items: 1,
        // nav: true,
        // statePadding: 30,
        // addClassActive: true,

        slideSpeed: 300,
        paginationSpeed: 400,

    })
    $('.slide-ourhotel').owlCarousel({
        loop: true,
        margin: 100,
        center: true,
        items: 1.9,
        nav: true,
        statePadding: 30,
        addClassActive: true,

        slideSpeed: 300,
        paginationSpeed: 400,
        responsive: {
            0: {
                items: 1
            },
            768: {
                item: 1.5
            }

        }

    })

    $('#date1').datepicker();
    $('#date2').datepicker();
});