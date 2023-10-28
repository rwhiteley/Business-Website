
function ConstructionMsg(){
  alert("Under Construction :)")
}


function generateGradient() {
  var gradientBox = document.getElementById('gradient-box');
  var colors = [
      getRandomColor(),
      getRandomColor()
  ];
  gradientBox.style.background = 'linear-gradient(45deg, ' + colors[0] + ', ' + colors[1] + ')';
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

  function downloadGradient() {
    var gradientBox = document.getElementById('gradient-box');

    // Use html2canvas to capture the gradient as an image
    html2canvas(gradientBox).then(function(canvas) {
        // Convert the canvas to a data URL and create a download link
        var imgData = canvas.toDataURL('image/png');
        var link = document.createElement('a');
        link.href = imgData;
        link.download = 'gradient.png';
        link.click();
    });

  }

  document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("myAudio");
    const playButton = document.getElementById("playButton");
    const previousButton = document.getElementById("previousButton");
    const nextButton = document.getElementById("nextButton");

    const playlist = [
        "Audio/audio2.mp3",
        "Audio/audio3.mp3",
    ];

    let currentSongIndex = 0;

    playButton.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
            playButton.innerHTML = '<i class="fa fa-pause" style="font-size:14px"></i>';
        } else {
            audio.pause();
            playButton.innerHTML = '<i class="fa fa-play" style="font-size:14px"></i>';
        }
    });

    previousButton.addEventListener("click", function () {
        if (currentSongIndex > 0) {
            currentSongIndex--;
        }
        audio.src = playlist[currentSongIndex];
        audio.play();
    });

    nextButton.addEventListener("click", function () {
        if (currentSongIndex < playlist.length - 1) {
            currentSongIndex++;
        }
        audio.src = playlist[currentSongIndex];
        audio.play();
    });
});

function toggleMobileMenu(menu){
    menu.classList.toggle('open');
}
