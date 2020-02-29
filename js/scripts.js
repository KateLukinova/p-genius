$( document ).ready(function() {

    $('.best-deal-carousel').slick({
        loop: true,
        infinite: false,
        arrows: false,
        centerMode: false,
        slidesToShow: 2.3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {

                }
            },
            {
                breakpoint: 767,
                settings: {

                }
            },
            {
                breakpoint: 575,
                settings: {

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

    //video-modal
    $('#modal1').on('hidden.bs.modal', function (e) {
        // do something...
        $('#modal1 iframe').attr("src", $("#modal1 iframe").attr("src"));
    });

    //mask tel
    $('.phone').mask('+0 (000) 000 00 00', {placeholder: "+_ (_ _ _) _ _ _  _ _  _ _"});

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


