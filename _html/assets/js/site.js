function openNave() {
    document.getElementById("mySidenav").style.width = "100%";
}
function closeNave() {
    document.getElementById("mySidenav").style.width = "0";
}


$('.sidenav a').click(function(){
   $('#mySidenav').css("width", "0");
});


$('.owl-carousel-banner').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});


jQuery(document).ready(function() {

    $('nav a').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1500);
                return false;
            }
        }
    });
    
   
    function fecharMenu(){
        $("#menufull").removeClass("aberta");
    }

 
    $(".fechar_menu").click(function() {
        fecharMenu();
    });

    $(".botao_menu").click(function() {
        if($("#menufull").hasClass("aberta")) {
            fecharMenu();
            $("#corpo").removeClass("fix");
        }
        else {
            $("#menufull").addClass("aberta");
            $("#corpo").addClass("fix");
        }
    });

    $(".fechar_section").click(function(){
        fecharMenu();
        fecharPesquisa();
        $("#corpo").removeClass("fix");
    });


    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('header').outerHeight();

    jQuery(window).scroll(function (event) {
        didScroll = true;
    });

    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = jQuery(this).scrollTop();

        if (Math.abs(lastScrollTop - st) <= delta)
            return;

        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            jQuery('header').removeClass('fixa').addClass('normal');
        } else {
            // Scroll Up
            if (st + jQuery(window).height() < jQuery(document).height()) {
                jQuery('header').removeClass('normal').addClass('fixa');
            }
        }

        var top_offset = $(window).scrollTop();
        if (top_offset == 0) {
            $('header').removeClass('fixa fade-in');
        } else {
            $('header').addClass('menu-fixo');
        }

        lastScrollTop = st;
    }
});


