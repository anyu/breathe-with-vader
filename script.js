document.getElementById('soundButton').addEventListener('click', function () {
  var audio = document.getElementById('sound');
  if (audio.paused) {
      audio.play();
      this.innerText = 'Pause';
  } else {
      audio.pause();
      this.innerText = 'breathe with Vader';
  }
});