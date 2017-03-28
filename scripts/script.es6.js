function getRandomNum() {
  let randomNum = Math.floor(Math.random() * (10 - 0) + 1);
  document.getElementById("result"). append(randomNum);
};


function changeColor() {
  let colors = ["yellow", "red", "green"]


setInterval(() =>{
  let elem = document.getElementById("result");
  let curLeft = (Number(elem.style.left.substring(0, elem.style.left.length -2)) || 0);
  elem.style.left = curLeft + 10 + 'px';
  elem.className = colors[Math.floor(Math.random() * colors.length)];
}, 1000);
};
changeColor();
document.getElementById("button").addEventListener('click', getRandomNum);
