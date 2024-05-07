// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.getElementById('voice-select');
  const textArea = document.getElementById('text-to-speak');
  const speakButton = document.querySelector('button');
  const faceImage = document.querySelector('img');

  let syn = window.speechSynthesis;
  let voices = [];

  // Function to populate voices in the dropdown
  const populateVoices = () => {
      voices = syn.getVoices();
      voiceSelect.innerHTML = '';
      voiceSelect.appendChild(document.createElement('option')).textContent = 'Select Voice:';
      voices.forEach(voice => {
          let option = document.createElement('option');
          option.textContent = `${voice.name} (${voice.lang})`;
          option.setAttribute('value', voice.name);
          voiceSelect.appendChild(option);
      });
  };

  // Populate voices when they are loaded
  if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = populateVoices;
  }

  // Speak the text in the textarea
  const speak = () => {
      if (syn.speaking) {
          console.error('speechSynthesis.speaking');
          return;
      }
      if (textArea.value !== '') {
          let speach = new SpeechSynthesisUtterance(textArea.value);
          speach.voice = voices.find(voice => voice.name === voiceSelect.value);
          speach.onstart = () => {
              faceImage.src = 'assets/images/smiling-open.png';
          };
          speach.onend = () => {
              faceImage.src = 'assets/images/smiling.png';
          };
          syn.speak(speach);
      }
  };

  // Event listener for the button
  speakButton.addEventListener('click', () => {
      speak();
  });
}

