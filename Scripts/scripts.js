
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
