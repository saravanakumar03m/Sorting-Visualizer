async function selectionSort(){
    disable()
    for(let i = 0; i < arraySize - 1; i++){
        arrayStrip[i].style.backgroundColor = '#832232'
        let minind = i
        for(let j = i + 1; j < arraySize; j++){
            arrayStrip[j].style.backgroundColor = 'cyan'
            await waitforme(sortingSpeed)
            if(parseInt(arrayStrip[j].style.height) < parseInt( arrayStrip[minind].style.height)){
                if(minind != i)
                    arrayStrip[minind].style.backgroundColor = '#ffc300'
                minind = j   
            }
            else
                arrayStrip[j].style.backgroundColor = '#ffc300'
        }
        await waitforme(sortingSpeed)
        swap(minind, i)
        arrayStrip[minind].style.backgroundColor = '#ffc300'
        arrayStrip[i].style.backgroundColor = '#32965D'
    }
    arrayStrip[arraySize - 1].style.backgroundColor = '#32965D'
    enable()
}

