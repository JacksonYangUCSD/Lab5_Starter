window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const volumeControl = document.getElementById('volume');
  const hornImage = document.querySelector('img[alt="No image selected"]');
  const playButton = document.querySelector('button');
  const audioElement = document.querySelector('audio');

  // Function to update the horn image and audio source
  function updateHorn() {
      const hornValue = hornSelect.value;
      hornImage.src = `assets/images/${hornValue}.svg`;

      if (hornValue == "select"){
        hornImage.src = 'assets/images/no-image.png';
    }
      audioElement.src = `assets/audio/${hornValue}.mp3`;
  }

  // Load initial image and audio source based on the default selection
  updateHorn();

  // Event listener for changing the horn selection
  hornSelect.addEventListener('change', updateHorn);

  // Event listener to play the horn sound
  playButton.addEventListener('click', function() {
      audioElement.volume = volumeControl.value / 100;
      audioElement.play();
  });
};
