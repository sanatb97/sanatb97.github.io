/*============================
   js index
==============================

==========================================*/

(function ($) {
    "use strict";

    /*==============================
    Switcher
    ==============================*/
    $('.switcher__picker').on('click', function () {
        $('.switcher').toggleClass('switcher--open');
    });

    $('#color0').on('click', function () {
        $('#colors > div').removeClass('active');
        $(this).addClass('active');
        $('#triggerColor').attr('href', 'assets/css/triggerplate/color-0.css');
    });
    $('#color1').on('click', function () {
        $('#colors > div').removeClass('active');
        $(this).addClass('active');
        $('#triggerColor').attr('href', 'assets/css/triggerplate/color-1.css');
    });
    $('#color2').on('click', function () {
        $('#colors > div').removeClass('active');
        $(this).addClass('active');
        $('#triggerColor').attr('href', 'assets/css/triggerplate/color-2.css');
    });
    $('#color3').on('click', function () {
        $('#colors > div').removeClass('active');
        $(this).addClass('active');
        $('#triggerColor').attr('href', 'assets/css/triggerplate/color-3.css');
    });
    $('#color4').on('click', function () {
        $('#colors > div').removeClass('active');
        $(this).addClass('active');
        $('#triggerColor').attr('href', 'assets/css/triggerplate/color-4.css');
    });
    $('#color5').on('click', function () {
        $('#colors > div').removeClass('active');
        $(this).addClass('active');
        $('#triggerColor').attr('href', 'assets/css/triggerplate/color-5.css');
    });
    $('#color6').on('click', function () {
        $('#colors > div').removeClass('active');
        $(this).addClass('active');
        $('#triggerColor').attr('href', 'assets/css/triggerplate/color-6.css');
    });
    $('#color7').on('click', function () {
        $('#colors > div').removeClass('active');
        $(this).addClass('active');
        $('#triggerColor').attr('href', 'assets/css/triggerplate/color-7.css');
    });
    $('#color8').on('click', function () {
        $('#colors > div').removeClass('active');
        $(this).addClass('active');
        $('#triggerColor').attr('href', 'assets/css/triggerplate/color-8.css');
    });

    /*================================
    Preloader
    ==================================*/
    var preloader = $('#preloader');
    $(window).on('load', function () {
        preloader.fadeOut('slow', function () { $(this).remove(); });

        // Load pie progress
        if ($(".pie_progress").length) {
            $('.pie_progress').asPieProgress('start');
        }
    });

    /*================================
    Humberger / Offset Menu
    ==================================*/
    var humberger = $('.humberger'),
        close_btn = $('.close-btn'),
        offset_wrapper = $('.offset-wrapper');
    humberger.on('click', function () {
        offset_wrapper.addClass('show_hide');
    });
    close_btn.on('click', function () {
        offset_wrapper.removeClass('show_hide');
    });

    /*================================
    stickey Header
    ==================================*/
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop(),
            mainHeader = $('.header-area');

        if (scroll > 1) {
            mainHeader.addClass("scrolled");
        } else {
            mainHeader.removeClass("scrolled");
        }
    });


    /*================================
    Wow js activation
    ==================================*/
    var wow = new WOW(
        {
            mobile: false
        }
    )
    wow.init();

    /*================================
    Magnific Popup
    ==================================*/
    $('.expand-img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.expand-video').magnificPopup({
        type: 'iframe',
        gallery: {
            enabled: true
        }
    });

    /*================================
    Profesional skill progress-bar
    ==================================*/
    $('.pie_progress').asPieProgress({
        namespace: '',
        classes: {
            svg: 'pie_progress__svg',
            element: 'pie_progress',
            number: 'pie_progress__number',
            content: 'pie_progress__content'
        },
        min: 0,
        max: 100,
        goal: 100,
        size: 130,
        speed: 25, // speed of 1/100
        barcolor: '#12db8a',
        barsize: '10',
        trackcolor: '#232323',
        fillcolor: 'none',
        easing: 'ease',
        numberCallback: function numberCallback(n) {
            'use strict';

            var percentage = Math.round(this.getPercentage(n));

            return percentage + '%';
        },

        contentCallback: null
    });

    /*================================
    Software skill progress-bar
    ==================================*/
    $('.progress-bar').each(function (i) {
        setTimeout(function () {
            $('.progress-bar').eq(i).addClass('left-anim');
        }, (700 * (Math.exp(i * 0.14))) - 700);
    });

    /*================================
    slicknav
    ==================================*/
    $('ul#navigation').slicknav({
        prependTo: "#mobile-menu"
    });

    /*================================
    Masonary
    ==================================*/
    $('#container').imagesLoaded(function () {
        // filter items on button click
        $('.project-menu').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });
        var $grid = $('.project-masonary').isotope({
            itemSelector: '.prt-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.prt-item',
            }
        });
    });

    $('.project-menu button').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });

    /*================================
    Ajax Contact Form
    ==================================*/
    $('.screen-reader-response').hide();
    $('form#cf #submit').on('click', function () {
        var fname = $('#fname').val();
        var lname = $('#lname').val();
        var email = $('#email').val();
        var msg = $('#msg').val();
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (!regex.test(email)) {
            alert('Please enter valid email');
            return false;
        }

        fname = $.trim(fname);
        lname = $.trim(lname);
        email = $.trim(email);
        msg = $.trim(msg);

        if (fname != '' && email != '' && msg != '') {
            var values = "fname=" + fname + "&lname=" + lname + " &email=" + email + " &msg=" + msg;
            $.ajax({
                type: "POST",
                url: "mail.php",
                data: values,
                success: function () {
                    $('#fname').val('');
                    $('#lname').val('');
                    $('#msg').val('');

                    $('.screen-reader-response').fadeIn().html('<div class="alert alert-success"><strong>Success!</strong> Email has been sent successfully.</div>');
                    setTimeout(function () {
                        $('.screen-reader-response').fadeOut('slow');
                    }, 4000);
                }
            });
        } else {
            $('.screen-reader-response').fadeIn().html('<div class="alert alert-danger"><strong>Warning!</strong> Please fillup the informations correctly.</div>')
        }
        return false;
    });

})(jQuery);