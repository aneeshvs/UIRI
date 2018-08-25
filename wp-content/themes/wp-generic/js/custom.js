jQuery(document).ready(function($){
    //Search Box Toogle
    $('.ed-search-wrap .search-icon .fa-search').click(function(){
      $('.ed-search-wrap').toggleClass('show');
  });
    
    //go to top 
    if ($('#back-to-top').length) {
        var scrollTrigger = 100, // px
        goToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
        //goToTop();
        $(window).on('scroll', function () {
            goToTop();
        });
        $('#back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
    
    //submenu toggle
    var winwidth = $(window).width();
    if(winwidth>=981){
        $('#main-header .main-navigation ul > li').hover(function() {
            $(this).children('#main-header .main-navigation ul li ul').stop(true, false, true).slideToggle(300);
        });
    }

    //FOR RESPONSIVE SUBMENU TOGGLE
    
    $('#main-header .main-navigation .menu-item-has-children, #main-header .main-navigation .page_item_has_children').append('<span class="sub-click"><i class="fa fa-caret-down"></i></span>');
    $('#main-header .main-navigation ul li.menu-item-has-children .sub-click, #main-header .main-navigation ul li.page_item_has_children .sub-click').click(function() {
        $(this).siblings('#main-header .main-navigation ul li ul').stop(true, false, true).slideToggle(300);
    });
    $('#main-header .main-navigation .menu-toggle + div').scroll(function(){
        if($('#main-header .main-navigation .menu-toggle + div').scrollTop() > 20){
         $('#main-header .main-navigation .menu-toggle').addClass('hide'); 
     }else {
        $('#main-header .main-navigation .menu-toggle').removeClass('hide'); 
    }
});
    

    $('.widget_wp_generic_progress_bar').each(function() { 
        var id  = $(this).attr('id');
        var waypoint = new Waypoint({
            element: document.getElementById(id),
            handler: function(direction) {
                $('#'+id).find('.ed-progress-bar-percentage').removeAttr("style");
                var progressWidth = $('#'+id).find('.ed-progress-bar-percentage').data('value') + '%';
                //alert(progressWidth);
                $('#'+id).find('.ed-progress-bar-percentage').animate({width: progressWidth}, 2000);
                $('#'+id).find('.widget-percent').prop('Counter',0).animate({
                    Counter: progressWidth,
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now)+ '%');
                    }
                });    
            }, 
            continuous: true,
            offset: '100%'
        });
    });

    var winwidth = $(window).width();
    var swidth = 300;
    var i= 1;
    var j= 0;
    var smargin = 30;
    if(winwidth<=1096 && winwidth>980){var maxsl = 3; swidth = 270; j=1;}
    else if(winwidth<=980 && winwidth>640){var maxsl = 2; swidth = 260;}
    else if(winwidth<=640){var maxsl = 1; swidth = 270; smargin = 0; i =0;}
    else{var maxsl = 3; swidth = 300;j= 1;}
    
    // testimonial slider
    $('.testimonial-slider').bxSlider({
        auto:true,
        controls:true,
        pager: false,
        moveSlides:1,
        minSlides: 1,
        maxSlides: maxsl,
        slideWidth: swidth,
        slideMargin: smargin,
        onSliderLoad: function (currentIndex) { 
            $('.testimonial-slider>div:not(.bx-clone)').eq(j).addClass('active-slide');
        },
        onSlideBefore: function ($slideElement, oldIndex, newIndex) {
            $('.testimonial-content-wrap ').removeClass('active-slide');      
        },
        onSlideAfter: function ($slideElement, oldIndex, newIndex) {
            if(i==1){
                $($slideElement).next().addClass('active-slide');        
            }
            else{
                $($slideElement).addClass('active-slide'); 
            }
        },
    });

});