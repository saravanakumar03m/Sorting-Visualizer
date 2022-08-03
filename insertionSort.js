async function insertionSort(){
  disable()
  let i 
  let key
  let j
  for(i = 1; i < arraySize; i++){
    await waitforme(sortingSpeed)
    arrayStrip[i].style.backgroundColor = '#832232'
    key = arrayStrip[i].style.height
    j = i - 1
    await waitforme(sortingSpeed)
    while(j >= 0 && parseInt(arrayStrip[j].style.height) > parseInt(key)){
      await waitforme(sortingSpeed)
      arrayStrip[j].style.backgroundColor = 'cyan'
      await waitforme(sortingSpeed)
      await waitforme(sortingSpeed)
      arrayStrip[j + 1].style.height = arrayStrip[j].style.height
      arrayStrip[j + 1].style.backgroundColor = '#32965D'
      arrayStrip[j].style.backgroundColor = '#32965D'
      j--
    }
    arrayStrip[j + 1].style.height = key
  }
  enable()
}

