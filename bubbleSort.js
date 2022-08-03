async function bubbleSort(){
  disable()
  for(let i = 0; i < arraySize - 1; i++){
    for(let j = 0; j < arraySize - 1 - i; j++){
      arrayStrip[j].style.backgroundColor = 'cyan'
      arrayStrip[j + 1].style.backgroundColor = 'cyan'
      await waitforme(sortingSpeed)
      if(parseInt(arrayStrip[j].style.height) > parseInt(arrayStrip[j + 1].style.height))
      swap(j, j + 1)
      await waitforme(sortingSpeed)
      arrayStrip[j].style.backgroundColor = '#ffc300'
      // arrayStrip[j + 1].style.backgroundColor = '#ffc300'
    }
    arrayStrip[arraySize - 1 - i].style.backgroundColor = '#32965D'
  }
  arrayStrip[0].style.backgroundColor = '#32965D'
  enable()
}
