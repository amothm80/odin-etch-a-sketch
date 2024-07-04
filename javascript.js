function prepareGrid(sideSquares) {
  let gridcontainer = document.querySelector(".gridcontainer");
  while (gridcontainer.lastElementChild) {
    gridcontainer.removeChild(gridcontainer.lastElementChild);
  }
  containerSide = 0;
  for (let i = 800; i <= 960; i++) {
    if (i % sideSquares === 0) {
      containerSide = i;
      break;
    }
  }
  if (containerSide === 0) {
    containerSide = 800;
  }
  squareSize = Math.floor(containerSide / sideSquares);
  gridcontainer.style.width = containerSide + "px";
  for (let i = 1; i <= sideSquares; i++) {
    for (let i = 1; i <= sideSquares; i++) {
      let griddiv = document.createElement("div");
      let divid = "grid" + i;
      let divclass = "flexgrid";
      griddiv.setAttribute("id", divid);
      griddiv.setAttribute("class", divclass);
      griddiv.style.height = squareSize + "px";
      griddiv.style.width = squareSize + "px";
      griddiv.addEventListener("mouseover", () => {
        if (griddiv.style.opacity != "" && Number(griddiv.style.opacity) <= 1){
            griddiv.style.opacity = `${Number(griddiv.style.opacity)+0.1}`;
        }
        if ( griddiv.style.backgroundColor == ''){
            function random_rgba() {
                var o = Math.round, r = Math.random, s = 255;
                return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
            }
            
            var color = random_rgba();
            griddiv.style.backgroundColor = color;
            griddiv.style.opacity = "0.1";
        }

      });
      gridcontainer.appendChild(griddiv);
    }
  }
}

let button = document.querySelector("#gridsize");
button.addEventListener("click", () => {
  let gridsize = prompt("please enter grid size");
  prepareGrid(gridsize);
});

let gridsize = prompt("please enter grid size");
prepareGrid(gridsize);
