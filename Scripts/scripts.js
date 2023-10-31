
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




document.addEventListener('DOMContentLoaded', function() {
    const cells = document.querySelectorAll('[data-cell]');
    const resetButton = document.getElementById('reset-button');
    let currentPlayer = 'X';
    let gameOver = false;

    function checkWinner() {
        const winningCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (const combo of winningCombos) {
            const [a, b, c] = combo;
            if (cells[a].getAttribute('data-cell') && cells[a].getAttribute('data-cell') === cells[b].getAttribute('data-cell') && cells[a].getAttribute('data-cell') === cells[c].getAttribute('data-cell')) {
                cells[a].style.backgroundColor = 'lightgreen';
                cells[b].style.backgroundColor = 'lightgreen';
                cells[c].style.backgroundColor = 'lightgreen';
                gameOver = true;
            }
        }
    }

    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            if (gameOver || cell.getAttribute('data-cell') !== '') return;
            cell.setAttribute('data-cell', currentPlayer);
            checkWinner();
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        });
    });

    resetButton.addEventListener('click', () => {
        cells.forEach(cell => {
            cell.setAttribute('data-cell', '');
            cell.style.backgroundColor = '#eee';
        });
        currentPlayer = 'X';
        gameOver = false;
    });
});