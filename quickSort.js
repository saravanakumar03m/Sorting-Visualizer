async function partition(low, high){
  let pivot = arrayStrip[high].style.height
  let i = low 
  let j = high - 1
  arrayStrip[high].style.backgroundColor = 'red'
  await waitforme(sortingSpeed)
  while(true){
    arrayStrip[i].style.backgroundColor = 'cyan'
    while(i <= j && parseInt(pivot) >= parseInt(arrayStrip[i].style.height)){
      await waitforme(sortingSpeed)
      arrayStrip[i].style.backgroundColor = 'yellow'
      i++
      if(i < j){
        arrayStrip[i].style.backgroundColor = 'cyan'
      }
    }
    await waitforme(sortingSpeed)
    arrayStrip[j].style.backgroundColor = 'cyan'
    while(i <= j && parseInt(arrayStrip[j].style.height) >= parseInt(pivot)){
      await waitforme(sortingSpeed)
      arrayStrip[j].style.backgroundColor = 'pink'
      j--
      if(j > i)
        arrayStrip[j].style.backgroundColor = 'cyan'
    }
    if(j < i) break;
    else{
      await waitforme(sortingSpeed)
      swap(i, j)
      arrayStrip[i].style.backgroundColor = 'yellow'
      arrayStrip[j].style.backgroundColor = 'pink'
    }
  }
  swap(i, high)
  arrayStrip[high].style.backgroundColor = 'yellow'
  arrayStrip[i].style.backgroundColor = 'green'

  await waitforme(sortingSpeed)
  for(let i = 0; i < arraySize; i++){
    if(arrayStrip[i].style.backgroundColor == 'green') continue;
    arrayStrip[i].style.backgroundColor = '#ffc300'
  }
  await waitforme(sortingSpeed)
  return i
}

async function quicksortfunc(low, high){
  if(low < high){
    let p = await partition(low, high)
    // arrayStrip[p].style.backgroundColor = '#32965D'
    await quicksortfunc(low, p - 1)
    await quicksortfunc(p + 1, high)
  }
  else if(low == high){
    arrayStrip[low].style.backgroundColor = 'green'
  }
}

async function quickSort(){
  disable()
  await quicksortfunc(0, arraySize - 1)
  enable()
}

