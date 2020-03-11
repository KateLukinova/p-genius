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

    //modal trigger
    $("#button-card-pay").click(function () {
        $('#pay-select').modal('hide');
        $('#pay-card').modal('show');
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
    if (window.location.href.indexOf("index") > -1) {
        var initialBoardCoordinate = $('#moving-block').offset().top; //изначальная верхняя координата движущегося блока
        var footerCoordinate = $('#below-block').offset().top; //верх блока, где надо остановиться
        var footerHeight = $('#below-block').first().offset().top;// от низа сайта до места где остановиться
        var boardHeight = $('#moving-block').height();
        var headerHeight = $('#border-block').offset().top;


        if (screen.width > 640) {
            $(window).scroll(function () {
                var currentCoordinate = $(window).scrollTop();

                if (currentCoordinate >= headerHeight - 280 && currentCoordinate < footerCoordinate - 700) {
                    $('#moving-block').css('position', 'fixed').css('top', '20vw').css('bottom', 'auto');
                } else if (currentCoordinate >= footerCoordinate - 1000) {
                    $('#moving-block').css('position', 'absolute').css('bottom', '0').css('top', 'auto');
                } else {
                    $('#moving-block').css('position', 'static');
                }
            });
        }

        $('.jquery-background-video').bgVideo({fadeIn: 2000});

    }
    AOS.init({disable: 'mobile'});





//video-hover
    var figure = $(".video-wrapper").hover( hoverVideo, hideVideo );

    function hoverVideo(e) {
        $('video', this).get(0).play();
    }

    function hideVideo(e) {
        $('video', this).get(0).pause();
    }

    // dropdown-user
    $('.user-block').click(function () {
        $(this).find('.user-dropdown-content').toggleClass('is-active')
    })
});

//cradit card mask

let ccNumberInput = document.querySelector('.cc-number-input'),
    ccNumberPattern = /^\d{0,16}$/g,
    ccNumberSeparator = " ",
    ccNumberInputOldValue,
    ccNumberInputOldCursor,

    ccExpiryInput = document.querySelector('.cc-expiry-input'),
    ccExpiryPattern = /^\d{0,4}$/g,
    ccExpirySeparator = "/",
    ccExpiryInputOldValue,
    ccExpiryInputOldCursor,

    ccCVCInput = document.querySelector('.cc-cvc-input'),
    ccCVCPattern = /^\d{0,3}$/g,

    mask = (value, limit, separator) => {
        var output = [];
        for (let i = 0; i < value.length; i++) {
            if ( i !== 0 && i % limit === 0) {
                output.push(separator);
            }

            output.push(value[i]);
        }

        return output.join("");
    },
    unmask = (value) => value.replace(/[^\d]/g, ''),
    checkSeparator = (position, interval) => Math.floor(position / (interval + 1)),
    ccNumberInputKeyDownHandler = (e) => {
        let el = e.target;
        ccNumberInputOldValue = el.value;
        ccNumberInputOldCursor = el.selectionEnd;
    },
    ccNumberInputInputHandler = (e) => {
        let el = e.target,
            newValue = unmask(el.value),
            newCursorPosition;

        if ( newValue.match(ccNumberPattern) ) {
            newValue = mask(newValue, 4, ccNumberSeparator);

            newCursorPosition =
                ccNumberInputOldCursor - checkSeparator(ccNumberInputOldCursor, 4) +
                checkSeparator(ccNumberInputOldCursor + (newValue.length - ccNumberInputOldValue.length), 4) +
                (unmask(newValue).length - unmask(ccNumberInputOldValue).length);

            el.value = (newValue !== "") ? newValue : "";
        } else {
            el.value = ccNumberInputOldValue;
            newCursorPosition = ccNumberInputOldCursor;
        }

        el.setSelectionRange(newCursorPosition, newCursorPosition);

        highlightCC(el.value);
    },
    highlightCC = (ccValue) => {
        let ccCardType = '',
            ccCardTypePatterns = {
                amex: /^3/,
                visa: /^4/,
                mastercard: /^5/,
                disc: /^6/,

                genric: /(^1|^2|^7|^8|^9|^0)/,
            };

        for (const cardType in ccCardTypePatterns) {
            if ( ccCardTypePatterns[cardType].test(ccValue) ) {
                ccCardType = cardType;
                break;
            }
        }

        let activeCC = document.querySelector('.cc-types__img--active'),
            newActiveCC = document.querySelector(`.cc-types__img--${ccCardType}`);

        if (activeCC) activeCC.classList.remove('cc-types__img--active');
        if (newActiveCC) newActiveCC.classList.add('cc-types__img--active');
    },
    ccExpiryInputKeyDownHandler = (e) => {
        let el = e.target;
        ccExpiryInputOldValue = el.value;
        ccExpiryInputOldCursor = el.selectionEnd;
    },
    ccExpiryInputInputHandler = (e) => {
        let el = e.target,
            newValue = el.value;

        newValue = unmask(newValue);
        if ( newValue.match(ccExpiryPattern) ) {
            newValue = mask(newValue, 2, ccExpirySeparator);
            el.value = newValue;
        } else {
            el.value = ccExpiryInputOldValue;
        }
    };

ccNumberInput.addEventListener('keydown', ccNumberInputKeyDownHandler);
ccNumberInput.addEventListener('input', ccNumberInputInputHandler);

ccExpiryInput.addEventListener('keydown', ccExpiryInputKeyDownHandler);
ccExpiryInput.addEventListener('input', ccExpiryInputInputHandler);
