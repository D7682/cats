$(document).ready(function() {
    jQuery.fn.carousel.Constructor.TRANSITION_DURATION = 10000 //2secs

});

/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width= "100%";
  }

  function openNav1() {
    document.getElementById("myNav1").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav1() {
    document.getElementById("myNav1").style.width = "0%";
  }