jQuery(document).ready(function($) {
    var Min = 1170;
    //primary navigation slide-in effect
    if ($(window).width() > Min) {
        var headerHeight = $('.stickyNavContainer').height();
        $(window).on('scroll', {
                previousTop: 0
            },
            function() {
                var currentTop = $(window).scrollTop();

                if (currentTop < this.previousTop) {
                   
                    //if scrolling up...
                    if (currentTop > 245 && $('.stickyNavContainer').hasClass('is-fixed')) {
                        $('.stickyNavContainer').addClass('is-visible');
                    } else {
                        $('.stickyNavContainer').removeClass('is-visible is-fixed');
                    }
                } else if (currentTop > this.previousTop) {
                    //if scrolling down...
                    $('.stickyNavContainer').removeClass('is-visible');
                    if (currentTop > (headerHeight + 245) && !$('.stickyNavContainer').hasClass('is-fixed')) $('.stickyNavContainer').addClass('is-fixed');
                }
                this.previousTop = currentTop;
            });

    }
    

});
