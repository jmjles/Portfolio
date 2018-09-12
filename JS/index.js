$( "#pause" ).click(function() {
  if ($( "#pause img" ).attr("src") == "./IMG/pause.png") {
    $( "#pause img" ).attr("src", "./IMG/play.png");
    $( "#backg" ).css("animation-play-state", "running");
  }
  else {
    $( "#pause img" ).attr("src", "./IMG/pause.png");
    $( "#backg" ).css("animation-play-state", "paused");
  }
});
