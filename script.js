//Slider Value
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

//Initial Grid Creation
let gridSize = 16;
let gridDisplay = 800;

let gridContainer = document.getElementById('gridcontainer');

for(let i=0; i<gridSize; i++) {
  let gridRow = document.createElement("div");
  gridRow.className = 'gridrow';
  gridRow.id = 'row'+i;
  gridRow.style.display='flex';
  gridContainer.appendChild(gridRow);
}

for(let i=0; i<gridSize; i++) {
  let currentRow = document.getElementById('row'+i);
  for(let j=0; j<gridSize; j++) {
    let gridElement = document.createElement("div");
    gridElement.className = 'gridelement';
    gridElement.style.height = gridDisplay/gridSize+"px";
    gridElement.style.width = gridDisplay/gridSize+"px";
    currentRow.appendChild(gridElement);
  }
}

//Grid Creation
slider.oninput = function() {
  output.innerHTML = this.value;
  gridSize = slider.value;
  console.log(gridSize);

  while (gridContainer.firstChild) {gridContainer.removeChild(gridContainer.lastChild);}
  
  for(let i=0; i<gridSize; i++) {
    let gridRow = document.createElement("div");
    gridRow.className = 'gridrow';
    gridRow.id = 'row'+i;
    gridRow.style.display='flex';
    gridContainer.appendChild(gridRow);
  }
  
  for(let i=0; i<gridSize; i++) {
    let currentRow = document.getElementById('row'+i);
    for(let j=0; j<gridSize; j++) {
      let gridElement = document.createElement("div");
      gridElement.className = 'gridelement';
      gridElement.style.height = gridDisplay/gridSize+"px";
      gridElement.style.width = gridDisplay/gridSize+"px";
      currentRow.appendChild(gridElement);
    }
    
  }
}

//Draw
gridContainer.addEventListener('mouseover', paintGrid)

function paintGrid() {
  let gridElements = document.querySelectorAll('.gridelement');
  let activeButton = document.getElementById('active');

  if (activeButton.className=='button1') {
    gridElements.forEach(gridElement => {
      gridElement.addEventListener('mouseover', turnBlack);
      function turnBlack() {
        gridElement.style.backgroundColor='black';
      }
      
    });
  }

  else if (activeButton.className=='button2') {
    gridElements.forEach(gridElement => {
      gridElement.addEventListener('mouseover', turnRandomColor);
      function turnRandomColor() {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        gridElement.style.backgroundColor='#'+randomColor;
      }

    })
  }

  else if (activeButton.className=='button3') {
    gridElements.forEach(gridElement => {
      gridElement.addEventListener('mouseover', turnWhite);
      function turnWhite() {
        gridElement.style.backgroundColor='white';
      }
    })
  }
}


//Buttons
let buttons = document.querySelectorAll('button');

let blackButton = document.querySelector('.button1');
blackButton.addEventListener('click', drawBlack);

let randomButton = document.querySelector('.button2');
randomButton.addEventListener('click', drawRandom);

let eraserButton = document.querySelector('.button3');
eraserButton.addEventListener('click', erase);

let resetButton = document.querySelector('.button4');
resetButton.addEventListener('click', reset);

function drawBlack() {
  buttons.forEach(button => {
    button.removeAttribute('id');
   })
  blackButton.id = 'active';
}

function drawRandom() {
  buttons.forEach(button => {
    button.removeAttribute('id');
   })
  randomButton.id = 'active';
}

function erase() {
  buttons.forEach(button => {
    button.removeAttribute('id');
   })
  eraserButton.id = 'active';
}

function reset() {
  let gridElements = document.querySelectorAll('.gridelement');
  gridElements.forEach(gridElement => {
    gridElement.style.backgroundColor='';
    gridElement.style.opacity='';
  });
}