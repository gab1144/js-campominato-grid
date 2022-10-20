const container = document.querySelector('.container');

document.getElementById('play').addEventListener('click', function(){
  init();
})

function init(){
  container.innerHTML ='';
  for (let i = 1; i <= 100; i++){
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
}

function clickSquare(event){
  console.log(this.idElement);
  this.classList.add('clicked');
}