$( document ).ready(function() {
    var el = document.querySelector('#toggle');
    var ovrlays = document.querySelector('#navbar');
    el.onclick = function () {
        el.classList.toggle('active');
        ovrlays.classList.toggle('open');
    };

    $('[data-fancybox="gallery"]').fancybox({
        loop: true,
        gutter : 10,
        keyboard: true,
        arrows: true,
        infobar: false,
        smallBtn: 'auto',
        toolbar: true,
        protect: true,
        thumbs: false,
        idleTime: 3,
        animationEffect: "zoom-in-out",
        animationDuration: 600,
    });

    $('.two__slider').slick({
        loop: true,
        infinite: false,
        slidesToShow: 3.3,
        nextArrow : '<button class="slick-next slick-arrow" aria-label="Next" type="button" ><svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.50898 0.192683C1.38545 0.0682927 1.22075 0 1.04636 0C0.871965 0 0.70726 0.0682927 0.586154 0.192683L0.196192 0.585366C-0.058131 0.841463 -0.058131 1.25854 0.196192 1.5122L4.65048 5.99756L0.191348 10.4878C0.0678195 10.6098 0 10.7756 0 10.9512C0 11.1268 0.0678195 11.2927 0.191348 11.4146L0.58131 11.8073C0.704838 11.9317 0.86712 12 1.04151 12C1.21591 12 1.38061 11.9317 1.50172 11.8073L6.81101 6.46341C6.93454 6.33902 7.00236 6.17317 6.99994 5.99756C6.99994 5.82195 6.93212 5.6561 6.81101 5.53171L1.50898 0.192683Z" fill="white"/></svg></button>',
        prevArrow : '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" ><svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.50898 0.192683C1.38545 0.0682927 1.22075 0 1.04636 0C0.871965 0 0.70726 0.0682927 0.586154 0.192683L0.196192 0.585366C-0.058131 0.841463 -0.058131 1.25854 0.196192 1.5122L4.65048 5.99756L0.191348 10.4878C0.0678195 10.6098 0 10.7756 0 10.9512C0 11.1268 0.0678195 11.2927 0.191348 11.4146L0.58131 11.8073C0.704838 11.9317 0.86712 12 1.04151 12C1.21591 12 1.38061 11.9317 1.50172 11.8073L6.81101 6.46341C6.93454 6.33902 7.00236 6.17317 6.99994 5.99756C6.99994 5.82195 6.93212 5.6561 6.81101 5.53171L1.50898 0.192683Z" fill="white"/></svg></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.our-client').slick({
        infinite: true,
        slidesToShow: 3,
        nextArrow : '<button class="slick-next slick-arrow our-client-next-arrow" aria-label="Next" type="button" ><svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.50898 0.192683C1.38545 0.0682927 1.22075 0 1.04636 0C0.871965 0 0.70726 0.0682927 0.586154 0.192683L0.196192 0.585366C-0.058131 0.841463 -0.058131 1.25854 0.196192 1.5122L4.65048 5.99756L0.191348 10.4878C0.0678195 10.6098 0 10.7756 0 10.9512C0 11.1268 0.0678195 11.2927 0.191348 11.4146L0.58131 11.8073C0.704838 11.9317 0.86712 12 1.04151 12C1.21591 12 1.38061 11.9317 1.50172 11.8073L6.81101 6.46341C6.93454 6.33902 7.00236 6.17317 6.99994 5.99756C6.99994 5.82195 6.93212 5.6561 6.81101 5.53171L1.50898 0.192683Z" fill="white"/></svg></button>',
        prevArrow : '<button class="slick-prev slick-arrow our-client-prev-arrow" aria-label="Previous" type="button" ><svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.50898 0.192683C1.38545 0.0682927 1.22075 0 1.04636 0C0.871965 0 0.70726 0.0682927 0.586154 0.192683L0.196192 0.585366C-0.058131 0.841463 -0.058131 1.25854 0.196192 1.5122L4.65048 5.99756L0.191348 10.4878C0.0678195 10.6098 0 10.7756 0 10.9512C0 11.1268 0.0678195 11.2927 0.191348 11.4146L0.58131 11.8073C0.704838 11.9317 0.86712 12 1.04151 12C1.21591 12 1.38061 11.9317 1.50172 11.8073L6.81101 6.46341C6.93454 6.33902 7.00236 6.17317 6.99994 5.99756C6.99994 5.82195 6.93212 5.6561 6.81101 5.53171L1.50898 0.192683Z" fill="white"/></svg></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.main__slider').slick({
        dots: true,
        arrows: false,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: true,
                    nextArrow : '<button class="slick-next slick-arrow no-rotate" aria-label="Next" type="button" ><i class="fas fa-chevron-left"></i></button>',
                    prevArrow : '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" ><i class="fas fa-chevron-right"></i></button>'
                }
            }
        ]
    });

    $(".size-link").click(function(e) {
        e.preventDefault();
        var sizeLink = $(this);
        var linkID = sizeLink.attr("id");
        $(".dynamic-text[for="+linkID+"]").slideToggle("slow", function() {
            if (sizeLink.hasClass("full-size")) {
                sizeLink.text(sizeLink.attr("max-label"));
                sizeLink.removeClass("full-size");
            } else {
                sizeLink.text(sizeLink.attr("min-label"));
                sizeLink.addClass("full-size");
            }
        })
    });

    $("#one-collapse").on("hide.bs.collapse", function(){
        $(".btn-two-hide").html('Раскрыть');
    });
    $("#one-collapse").on("show.bs.collapse", function(){
        $(".btn-two-hide").html('Скрыть');
    });

    const menuBtn = $('.dropbtn'),
        menu    = $('.dropdown-content');

    menuBtn.on('click', function() {
        if ( $(this).hasClass('is-active') ) {
            $(this).removeClass('is-active');
            menu.slideUp().fadeIn;
        } else {
            $(this).addClass('is-active');
            menu.slideDown();
        }
    });

    $(document).click(function (e) {
        if ( !menuBtn.is(e.target) && !menu.is(e.target) && menu.has(e.target).length === 0) {
            menu.slideUp();
            menuBtn.removeClass('is-active');
        }
    });

    $('.size-link-block').click(
        function () {
            $(this).find('.svg-arrow').toggleClass('arrow-rotate');
        }
    );
    $('.select').click(
        function () {
            $(this).find('.svg-arrow').toggleClass('arrow-rotate');
        }
    );

    // filter-auto mobile
    if (screen.width<768) {
        $('.collapse-wrapper')
            .removeClass('tab-pane')
            .removeClass('active')
            .removeClass('show')
            .removeClass('fade');
        $('.nav-link__type-auto').click(
            function () {
                $(this).toggleClass('active');
            }
        )
    }
    //card-slider
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow : '<button class="slick-next slick-arrow no-rotate" aria-label="Next" type="button" ><i class="fas fa-chevron-left"></i></button>',
        prevArrow : '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" ><i class="fas fa-chevron-right"></i></button>',
        fade: true,
        asNavFor: '.slider-nav',
        loop: true
    });
    $('.slider-nav').slick({
        slidesToShow: 3.5,
        infinite: false,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        centerMode: false,
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

    //video-modal
    $('#modal1').on('hidden.bs.modal', function (e) {
        // do something...
        $('#modal1 iframe').attr("src", $("#modal1 iframe").attr("src"));
    });

    //mask tel
    $('.phone').mask('+0 (000) 000 00 00', {placeholder: "+_ (_ _ _) _ _ _  _ _  _ _"});

    //scroll anchor
    $(".btn-anchor").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 1500,
            easing: "swing"
        });
        return false;
    });

    //form valid
    $("input").blur(function() {
        $('.input-box').find('input').each(function(){
            if($(this).prop('required')){
                $(this).siblings().addClass('invalid')
            } else {
                $(this).siblings().removeClass('invalid')
                $(this).siblings().addClass('valid')
            }
        });
    });



    /** Google map **/

    var map, infoWindow;
    var markersData = [{
        lat: 55.710379,
        lng: 37.590765,
        address: "350062, г. Краснодар, <br/>проезд Аэропортовский, дом № 8"
    }];

    var addMarker = function addMarker(latLng, name, address) {
        var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            title: name,
            icon: 'img/map-icon.png'
        });
        google.maps.event.addListener(marker, "click", function() {
            var contentString = '<p>' + address + '</p>';
            infoWindow.setContent(contentString);
            infoWindow.open(map, marker);
        });
    };

    var initInMap = function initInMap() {
        var mapOptions = {
            zoom: 15,
            center: new google.maps.LatLng(55.710379, 37.590765),
            styles: [{ "featureType": "all", "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#eeeeee" }, { "lightness": 40 }] }, { "featureType": "all", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#000000" }, { "lightness": 16 }] }, { "featureType": "all", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#000000" }, { "lightness": 17 }, { "weight": 1.2 }] }, { "featureType": "administrative", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative.country", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "administrative.country", "elementType": "geometry", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "administrative.country", "elementType": "labels.text", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "administrative.province", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative.locality", "elementType": "all", "stylers": [{ "visibility": "simplified" }, { "saturation": "-100" }, { "lightness": "30" }] }, { "featureType": "administrative.neighborhood", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative.land_parcel", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "visibility": "simplified" }, { "gamma": "0.00" }, { "lightness": "74" }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 20 }] }, { "featureType": "landscape.man_made", "elementType": "all", "stylers": [{ "lightness": "3" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 21 }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#333333" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#eeeeee" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#333333" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#333333" }, { "lightness": 16 }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#eeeeee" }, { "lightness": 19 }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 17 }] }]
        };
        map = new google.maps.Map(document.getElementById("gmap"), mapOptions);
        infoWindow = new google.maps.InfoWindow({
            maxWidth: 340
        });
        google.maps.event.addListener(map, "click", function() {
            infoWindow.close();
        });
        for (var i = 0; i < markersData.length; i++) {
            var latLng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
            var name = markersData[i].name;
            var address = markersData[i].address;
            addMarker(latLng, name, address);
        }
    };

    if ($('#gmap').length > 0) {
        google.maps.event.addDomListener(window, 'load', initInMap());
    }


    //datepicker
    $('#start-date').datepicker();
    $('#finish-date').datepicker();

});


