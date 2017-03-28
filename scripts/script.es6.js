function getRandomNum() {
  let randomNum = Math.floor(Math.random() * (10 - 0) + 1);
  document.getElementById("result"). append(randomNum);
};


function changeColor() {
  let colors = ["yellow", "red", "green"]


setInterval(() =>{
  let elem = document.getElementById("result")
  elem.className = colors[Math.floor(Math.random() * colors.length)];
}, 1000);
};
changeColor();
document.getElementById("button").addEventListener('click', getRandomNum);
