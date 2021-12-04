//Slider Value
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

//Grid Creation
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

