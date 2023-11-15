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

var vaderImages = [
  'images/vader1.png', 
  'images/vader2.png', 
  'images/vader3.png', 
  'images/vader4.png',
  'images/vader5.png'
]
var currentImageIndex = 0

document.getElementById('changeVader').addEventListener('click', function () {
  var img = document.getElementById('vaderImg');
  var randomIndex = Math.floor(Math.random() * vaderImages.length);
  if (randomIndex === currentImageIndex) {
    randomIndex = randomIndex;
  }
  currentImageIndex = randomIndex;
  img.src = vaderImages[currentImageIndex];
});