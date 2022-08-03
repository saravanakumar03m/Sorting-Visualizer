async function merge(l, mid, r){
  let leftArray = []
  let rightArray = []
  let leftArraySize = mid - l + 1
  let rightArraySize = r - mid

  for(let i = 0; i < leftArraySize; i++){
    await waitforme(sortingSpeed)
    leftArray.push(arrayStrip[l + i].style.height)
    arrayStrip[l + i].style.backgroundColor = '#ED9390'
  }
  for(let j = 0; j < rightArraySize; j++){
    await waitforme(sortingSpeed)
    rightArray.push(arrayStrip[mid + 1 + j].style.height)
    arrayStrip[mid + 1 + j].style.backgroundColor = '#832232' 
  }
  
  let i = 0
  let j = 0
  let k = l
  
  while(i < leftArraySize && j < rightArraySize){
    await waitforme(sortingSpeed)
    if(parseInt(leftArray[i]) <= parseInt(rightArray[j])){
      arrayStrip[k].style.height = parseInt(leftArray[i]) + 'px'
      i++
    }
    else{
      arrayStrip[k].style.height = parseInt(rightArray[j]) + 'px'
      j++
    }
    arrayStrip[k].style.backgroundColor = '#32965D'
    k++
  }

  while(i < leftArraySize){
    await waitforme(sortingSpeed)
    arrayStrip[k].style.height = parseInt(leftArray[i]) + 'px'
    arrayStrip[k].style.backgroundColor = '#32965D'
    i++
    k++
  }

  while(j < rightArraySize){
    await waitforme(sortingSpeed)
    arrayStrip[k].style.height = parseInt(rightArray[j]) + 'px'
    arrayStrip[k].style.backgroundColor = '#32965D'
    j++
    k++
  }
}

async function mergesortfunc(l, r){
  if(l >= r)
    return
  let mid = Math.floor((l + r) / 2)
  await mergesortfunc(l, mid)
  await mergesortfunc(mid + 1, r)
  await merge(l, mid, r)
}

async function mergeSort(){
  disable()
  await mergesortfunc(0, arraySize - 1)
  enable()
}
