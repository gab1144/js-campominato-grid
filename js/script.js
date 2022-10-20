const container = document.querySelector('.container');

document.getElementById('play').addEventListener('click', function(){
  init();
})

function init(numElements){
  for (let i = 0; i < 100; i++){
  createSquare(i);
  }
}

function createSquare(id){
  const square = document.createElement('div');
  square.className = 'square';
  square.idElement = id;
  square.innerText = id + 1;
  container.append(square);
}