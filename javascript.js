let draw = false;
let clear = false;
let gridcontainer = document.querySelector(".gridcontainer");
gridcontainer.addEventListener("click", () => {
  draw = !draw;
  clear = false;
});
gridcontainer.addEventListener("contextmenu", () => {
  draw = false;
  clear = true;
});
function prepareGrid(sideSquares) {

  while (gridcontainer.lastElementChild) {
    gridcontainer.removeChild(gridcontainer.lastElementChild);
  }

  //this is toootah's magic
  containerSide = 800;
  squareSize = Math.ceil(containerSide/sideSquares);
  containerSide = squareSize * sideSquares; 
  ///
  
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
        if (draw) {
          if (
            griddiv.style.opacity != "" &&
            Number(griddiv.style.opacity) <= 1
          ) {
            griddiv.style.opacity = `${Number(griddiv.style.opacity)+0.1}`;
          }
          if (griddiv.style.backgroundColor == "") {
            function random_rgba() {
              var o = Math.round,
                r = Math.random,
                s = 255;
              return (
                "rgba(" +
                o(r() * s) +
                "," +
                o(r() * s) +
                "," +
                o(r() * s) +
                "," +
                r().toFixed(1) +
                ")"
              );
            }

            var color = random_rgba();
            griddiv.style.backgroundColor = color;
            griddiv.style.opacity = "0.1";
          }
        }else if (clear){
          griddiv.style.backgroundColor = "white";
        }
      });
      gridcontainer.appendChild(griddiv);
    }
  }
}

let button = document.querySelector("#gridsize");
button.addEventListener("click", () => {
  let gridsize = Number(prompt("please enter grid size"));
  prepareGrid(gridsize);
});

let gridsize = Number(prompt("please enter grid size"));
prepareGrid(gridsize);
