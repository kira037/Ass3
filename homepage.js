/*learn more button js*/
function viewFunction(){
  document.getElementsByClassName('view').onclick=location.href ="product-page.html"
}

/*learn more button js*/
function cartFunction(){
  document.getElementsByClassName('cart').onclick=location.href ="cart.html"
}


/* scroll to vr */
function vrFunction() {
  document.getElementsByClassName('forth-section').scrollIntoView({ behavior: 'smooth', block: 'center' })
};


/* scroll to vr */
$(".link_to_vr").click(function() {
  $('html,body').animate({
      scrollTop: $(".vr-section").offset().top},
      'slow');
});

/* return to top */
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

