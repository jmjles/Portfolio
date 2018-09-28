$( "#pause" ).click(function() {
  if ($( "#pause img" ).attr("src") == "./IMG/pause.png") {
    $( "#pause img" ).attr("src", "./IMG/play.png");
    $( "#vid" ).get(0).play();
  }
  else {
    $( "#pause img" ).attr("src", "./IMG/pause.png");
    $( "#vid" ).get(0).pause();
  }
});
