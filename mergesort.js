// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

function sort(arr){
    let originalArr = [...arr]
    let left = []
    let right = []
    if(arr.length>1){
        let mid = arr.length/2
         left = sort(arr.slice(0,mid))
         right = sort(arr.slice(mid))
         
         console.log(originalArr,left, right,'13')
         
         originalArr =   merge(left,right,originalArr)
    }
    //console.log(originalArr,'45')
    return originalArr;
}
function merge(left,right,originalArr){
    let i=0;j=0;k=0;
 
   while(i< left.length && j< right.length){
            if(left[i]<right[j]){
                originalArr[k]= left[i]
                i++
            }else{
                originalArr[k]= right[j]
                j++
            }
            k++
    }

    while(i<left.length){
      originalArr[k]= left[i]
      i++
      k++
    }
    while(j<right.length){
      originalArr[k]= right[j]
      j++
      k++
    }
  console.log(originalArr,'45')
  return originalArr
}


var arr = [8,3,0,1,5,2,6,1]
sort(arr)


