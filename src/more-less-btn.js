//...............................................Toggle__1.............................................///////////////

$(document).ready(function() {
  $("#toggle").click(function() {
    var elem = $("#toggle").text();
    if (elem == "Read More") {
      //Stuff to do when btn is in the read more state
      $("#toggle").text("Less");
      $("#text").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#toggle").text("Read More");
      $("#text").slideUp();
    }
  });
});
//...............................................Toggle__2.............................................///////////////

$(document).ready(function() {
  $("#toggle2").click(function() {
    var elem = $("#toggle2").text();
    if (elem == "Read More") {
      //Stuff to do when btn is in the read more state
      $("#toggle2").text("Less");
      $("#text2").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#toggle2").text("Read More");
      $("#text2").slideUp();
    }
  });
});