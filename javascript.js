let draw = false;
let clear = false;
let black = true;
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
  for (let j = 1; j <= sideSquares; j++) {
    for (let i = 1; i <= sideSquares; i++) {
      let griddiv = document.createElement("div");
      let divid = "grid" + i + j;
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
            griddiv.style.opacity = `${Number(griddiv.style.opacity)+0.2}`;
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
            let color = "";
            let opacity = "";
            if (black == false){
              color = random_rgba();
              opacity = "0.1";
            }else{
              color = "rgba(0,0,0,1)"
              opacity = "1";
            }
            griddiv.style.backgroundColor = color;
            griddiv.style.opacity = opacity;
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

button = document.querySelector("#color");
button.addEventListener("click",()=>{
  let colorbutton = document.querySelector("#color");
  if (black == true){
    black = false;
    colorbutton.innerHTML = "All Colors";
  }else{
    black = true;
    colorbutton.innerHTML = "Black Only";
  }
})

let gridsize = Number(prompt("please enter grid size"));
prepareGrid(gridsize);
