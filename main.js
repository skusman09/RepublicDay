let currentAudio = null;
let currentAudioFile = "";

function play(audioFile) {
  if (currentAudio && currentAudioFile === audioFile) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
    currentAudioFile = "";
  } else {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    currentAudio = new Audio(audioFile);
    currentAudioFile = audioFile;
    currentAudio.play();
  }
}
