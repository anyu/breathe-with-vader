document.getElementById('soundButton').addEventListener('click', function () {
  var audio = document.getElementById('sound');
  if (audio.paused) {
      audio.play();
      this.innerText = 'pause breathing';
  } else {
      audio.pause();
      this.innerText = 'breathe with Vader';
  }
});