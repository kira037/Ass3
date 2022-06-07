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

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("addBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}