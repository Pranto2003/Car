var audio = document.createElement("audio");
audio.setAttribute("src", "Musics/sound.mp3");
audio.loop = true;
audio.autoplay = true;
audio.play().catch(function (error) {
  console.log("Audio playback was prevented:", error);
});
