$('.content-link button').click(function () {
    var idx = $(this).closest('.content-link').index();
    
    $('.content-link button').removeClass('active-link');
    $(this).addClass('active-link');

    $('.content-panel').hide();
    $('.content-panel').eq(idx).show();
});


/* Assign actions */
$('.product-quantity input').change( function() {
    updateQuantity(this);
  });


  function changeVal(el) {
  var qt = parseFloat(el.parent().children(".qt").html());
  var price = parseFloat(el.parent().children(".price").html());
  var eq = Math.round(price * qt * 100) / 100;
  
  el.parent().children(".full-price").html( eq + "€" );
  
  changeTotal();      
}