AOS.init({
    once: true,
    delay: 100,
    offset: 200,
    duration: 1200,
})

new WOW({
    boxClass:     'wow',
    animateClass: 'animated',
    offset:       200,
    mobile:       true,
    live:         true
}).init();



$(document).ready(function () {
    var Offset = $('header').offset();
    $(window).scroll(function () {
        if ($(document).scrollTop() > Offset.top) {
            $('header').addClass('Fixed');
        }
        else {
            $('header').removeClass('Fixed');
        }
    });
});



$(function () {
    $('.topBtn').hide();
    
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('.topBtn').fadeIn(150);
            } else {
                $('.topBtn').fadeOut(150);
            }
        });
    });
});

if (window.innerWidth > 1050) {
    $(function () {
        $('.fixed-wrapper').hide();
        
        $(function () {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 200) {
                    $('.fixed-wrapper').fadeIn(150);
                } else {
                    $('.fixed-wrapper').fadeOut(150);
                }
            });
        });
    });
}

if (window.innerWidth < 1051) {
    $(function () {
        $('.fixed-m').hide();
        
        $(function () {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 200) {
                    $('.fixed-m').fadeIn(150);
                } else {
                    $('.fixed-m').fadeOut(150);
                }
            });
        });
    });
}



$(function () {
    $('.topBtn, .remoteBtn a').click(function (e) {
        $.scrollTo(this.hash || 0, 500);
        e.preventDefault();
    });
});



$(window).on('scroll', function () {
    $('.article').each(function () {
        if ($(window).scrollTop() >= $(this).offset().top - 500) {
            var id = $(this).attr('id');
            $('.remoteBtn a').removeClass('actives');
            $('.remoteBtn a[href=#' + id + ']').addClass('actives');
        }
    });
});




$('.menuBtns').click(function () {
    $(this).toggleClass('change');
});



if (navigator.userAgent.indexOf("Trident") > 0) {
    alert("ì´ ì‚¬ì´íŠ¸ì— ëŒ€í•œ Internet Explorer ì§€ì›ì´ ì¢…ë£Œë˜ì—ˆìŠµë‹ˆë‹¤. " +
        "í™•ì¸ ë²„íŠ¼ì„ ëˆ„ë¥´ë©´ Edge ë¸Œë¼ìš°ì €ë¡œ ì´ë™í•©ë‹ˆë‹¤.")
    window.location = 'microsoft-edge:' + window.location.href;
};



$(window).resize(function () {
    var width_size = window.innerWidth;

    if (width_size == 1920) {
        document.location.reload();
    } else if (width_size == 2560) {
        document.location.reload();
    }
})