const container = document.querySelector('.container');
let elementsPerRow;

document.getElementById('play').addEventListener('click', function(){
  init();
})

function init(){
  container.innerHTML ='';
  elementsPerRow = parseInt(document.getElementById('level').value);
  for (let i = 1; i <= Math.pow(elementsPerRow, 2); i++){
    createSquare(i);
  }
  container.style.border = "1px solid black";
  container.style.background= "white";
}

function createSquare(id){
  const square = document.createElement('div');
  square.className = 'square';
  square.idElement = id;
  square.innerText = id;
  container.append(square);
  square.addEventListener('click', clickSquare)
  square.style.width = generateCalcCss();
  square.style.height = generateCalcCss();
}

function generateCalcCss(){
  return `calc(100% / ${elementsPerRow})`;
}

function clickSquare(event){
  console.log(this.idElement);
  this.classList.add('clicked');
}