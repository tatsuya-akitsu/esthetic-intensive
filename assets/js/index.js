/* ------------------------------- scrollBack ------------------------------- */
function scrollBack() {
  const scroll_btn = $('.scrollBack_Btn')
  $(window).scroll(function() {
    if ($(window).scrollTop() > 800) {
      scroll_btn.fadeIn()
    } else {
      scroll_btn.fadeOut()
    }
  })
  $('a[href^="#"]').click(function() {
    const speed = 400;
    const href= $(this).attr("href");
    const target = $(href == "#" || href == "" ? 'html' : href);
    const position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
}

$(function() {
  scrollBack()
})
