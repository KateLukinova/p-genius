$( document ).ready(function() {

    $(window).scroll(function () {
        if (this.pageYOffset > 0) {
            $('header').addClass('active');
        } else {
            $('header').removeClass('active');
        }
    }).trigger('scroll');

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
                    slidesToShow: 1
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
        responsive: [
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 3,
                    centerMode: true,
                    infinite: true
                }
            }
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

//video-page

    $('.vid-item').each(function(index){
        $(this).on('click', function(){
            var current_index = index+1;
            $('.vid-item .thumb').removeClass('active');
            $('.vid-item:nth-child('+current_index+') .thumb').addClass('active');
        });
    });

    AOS.init();

    var initialBoardCoordinate = $('#moving-block').offset().top; //изначальная верхняя координата движущегося блока
    var footerCoordinate = $('#below-block').offset().top; //верх блока, где надо остановиться
    var footerHeight = $('#below-block').first().offset().top;// от низа сайта до места где остановиться
    var boardHeight = $('#moving-block').height();
    var headerHeight = $('#border-block').offset().top;

    $(window).scroll(function () {
        var currentCoordinate = $(window).scrollTop();

        console.log('current ' + currentCoordinate)
        console.log(headerHeight - 350)
        console.log(footerCoordinate - 700)


        if (currentCoordinate >= headerHeight - 280 && currentCoordinate < footerCoordinate - 700) {
            $('#moving-block').css('position', 'fixed').css('top', '20vw').css('bottom', 'auto');
        } else if (currentCoordinate >= footerCoordinate - 700) {
            $('#moving-block').css('position', 'absolute').css('bottom', '0').css('top', 'auto');
        } else {
            $('#moving-block').css('position', 'static');
        }
    });

    $('.jquery-background-video').bgVideo({fadeIn: 2000});

//video-hover
    var figure = $(".video-wrapper").hover( hoverVideo, hideVideo );

    function hoverVideo(e) {
        $('video', this).get(0).play();
    }

    function hideVideo(e) {
        $('video', this).get(0).pause();
    }
});


