function partition(arr,start,end){
  
    let pivot_index = start;
        let pivot = arr[end];
        console.log(arr,'5, start= ',start ,', end= ',end)
        for(let i=start; i<end;i++){
            if(arr[i]< pivot){
               swap(pivot_index,i,arr)
                pivot_index = pivot_index+1;
              //  console.log(pivot_index,' pivot index 12')
            }
    
        }
        swap(pivot_index,end,arr)
        return pivot_index;
         
    }
    
    function quickSort(arr,start,end){
       if(start< end){
            let pivotIndex = partition(arr,start,end)
           // console.log(pivotIndex,'25')
            quickSort(arr,0,pivotIndex-1)
            quickSort(arr,pivotIndex,end)
       }
       console.log(arr)
    
    }
    var originalArr = [9,8,7,6,5,4,3,2]
    quickSort(originalArr,0,originalArr.length-1)
    
    function swap(pivotIndex,currentIndex,arr){
          let temp = arr[pivotIndex]
          arr[pivotIndex] =arr[currentIndex]
          arr[currentIndex]= temp
           
    }s