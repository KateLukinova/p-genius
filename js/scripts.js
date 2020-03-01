$( document ).ready(function() {

    $('.best-deal-carousel').slick({
        loop: true,
        infinite: false,
        arrows: false,
        centerMode: false,
        slidesToShow: 2.3,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2.1
                }
            },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 1.3
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1.5
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.2
                }
            }
        ]
    });

    $(".carousel-button-prev").click(function () {
        $('.best-deal-carousel').slick('slickPrev');
    });
    $(".carousel-button-next").click(function () {
        $('.best-deal-carousel').slick('slickNext');
    });



    $('.slider-reviews').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 400,
        arrows: false,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        asNavFor: '.slider-reviews',
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        loop: true,
        arrows: false,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 4,
                    infinite: true
                }
            },
            {
                breakpoint: 1520,
                settings: {
                    slidesToShow: 5,
                    infinite: true
                }
            },
        ]
    });
    $(".reviews-button-prev").click(function () {
        $('.slider-reviews').slick('slickPrev');
        $('.slider-nav').slick('slickPrev');
    });
    $(".reviews-button-next").click(function () {
        $('.slider-reviews').slick('slickNext');
        $('.slider-nav').slick('slickNext');
    });

    //video-modal
    $('#modal1').on('hidden.bs.modal', function (e) {
        // do something...
        $('#modal1 iframe').attr("src", $("#modal1 iframe").attr("src"));
    });

    //mask tel
    $('.phone').mask('+0 (000) 000 00 00', {placeholder: "+7 (_ _ _) _ _ _  _ _  _ _"});

    //scroll anchor
    // $(".btn-anchor").click(function() {
    //     $("html, body").animate({
    //         scrollTop: $($(this).attr("href")).offset().top + "px"
    //     }, {
    //         duration: 1500,
    //         easing: "swing"
    //     });
    //     return false;
    // });




});


