const elem = document.getElementById("colorstrip")
const box = document.getElementById("contentArea")
const sliderSize = document.getElementById("myRange");
const sliderSpeed = document.getElementById("speedRange")
const outputSize = document.getElementById("size-disp");
const outputSpeed = document.getElementById("speed-disp")

outputSize.innerHTML = sliderSize.value;
outputSpeed.innerHTML = sliderSpeed.value / 100 + 'x'

let arraySize = sliderSize.value
let sortingSpeed = 400 - sliderSpeed.value

const arrayStrip = []
for(let i = 0; i < arraySize; i++){
    arrayStrip[i] = elem.cloneNode(true);
    arrayStrip[i].style.height = Math.floor((Math.random() * 500)+ 1) + 'px'
    box.appendChild(arrayStrip[i])
}

sliderSize.oninput = function() {
  arraySize = this.value
  outputSize.innerHTML = this.value;
  box.innerHTML = ''
  for(let i = 0; i < arraySize; i++){
    arrayStrip[i] = elem.cloneNode(true);
    arrayStrip[i].style.height = Math.floor((Math.random() * 500)+ 1) + 'px'
    box.appendChild(arrayStrip[i])
  }
}


sliderSpeed.oninput = function(){
  sortingSpeed = 400 - this.value
  outputSpeed.innerHTML = this.value / 100 + 'x'
}


function genArray(){
  box.innerHTML = ''
  for(let i = 0; i < arraySize; i++) {
    arrayStrip[i].style.height = Math.floor((Math.random() * 500)+ 1) + 'px'
    arrayStrip[i].style.backgroundColor = '#ffc300'
    box.appendChild(arrayStrip[i])
  }
}

function swap(minind, j){
    let temp = arrayStrip[minind].style.height
    arrayStrip[minind].style.height = arrayStrip[j].style.height
    arrayStrip[j].style.height = temp
}


function waitforme(ms){
  return new Promise(resolve => {
    setTimeout(() => {resolve('')}, ms);
  })
}

function disable(){
    document.getElementById("selection-sort").disabled = true;
    document.getElementById("bubble-sort").disabled = true;
    document.getElementById("merge-sort").disabled = true;
    document.getElementById("insertion-sort").disabled = true;
    document.getElementById("quick-sort").disabled = true;
    document.getElementById("new-array").disabled = true;
    document.getElementById("myRange").disabled = true;
}

function enable(){
    document.getElementById("selection-sort").disabled = false;
    document.getElementById("bubble-sort").disabled = false;
    document.getElementById("merge-sort").disabled = false;
    document.getElementById("insertion-sort").disabled = false;
    document.getElementById("quick-sort").disabled = false;
    document.getElementById("new-array").disabled = false;
    document.getElementById("myRange").disabled = false;
}








