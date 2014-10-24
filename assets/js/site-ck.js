$(function() {
  $('#hero, #services, #work').css({ minHeight: $(window).innerHeight() + 'px' });
  $(window).resize(function() {
    $('#hero, #services, #work').css({ minHeight: $(window).innerHeight() + 'px' });
  });
});
jQuery(document).ready(function(e) {
    e(".scroll").click(function(t) {
        t.preventDefault();
        e("html,body").animate({
            scrollTop: e(this.hash).offset().top
        }, 1e3)
    })
});
