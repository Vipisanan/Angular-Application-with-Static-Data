$( function() {
  $( "#sortable" ).sortable();
  $( "#sortable" ).disableSelection();
} );

//for toggle menu
$(document).ready(function () {
  $("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });
})
