$( "#pause" ).click(function() {
  if ($( "#pause img" ).attr("src") == "./IMG/pause.png") {
    $( "#pause img" ).attr("src", "./IMG/play.png");
<<<<<<< HEAD
    $( "#vid" ).get(0).play();
  }
  else {
    $( "#pause img" ).attr("src", "./IMG/pause.png");
    $( "#vid" ).get(0).pause();
=======
    $( "#backg" ).css("animation-play-state", "running");
  }
  else {
    $( "#pause img" ).attr("src", "./IMG/pause.png");
    $( "#backg" ).css("animation-play-state", "paused");
>>>>>>> 417d3ff7647db4510859ae7bc6b294d955e8694c
  }
});
