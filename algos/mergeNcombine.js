//combine sort takes 2 sorted arrays
//returns new sorted array
//not working inplace

//iterate through both arrays
//compare the value in both and add the smaller value to the new array
//when we run out in 1 array, iterate through the other and add the rest of the values

// function combineArrays(arr1,arr2){
   
    
//     newarr = []
//     for(i1=0,i2 = 0; i1<arr1.length && i2<arr2.length; i1++,i2++){

//         if(arr1[i1] < arr2[i2]){
//             newarr.push(arr1[i1])
//             i2--
//         }else{
//             newarr.push(arr2[i2])
//             i1--
//         }

//     }
//     if(i1 < arr1.length){
//         for(let i = i1; i<arr1.length; i++){
//             newarr.push(arr1[i])
//         }
//     }else{
//         for(let i = i2; i<arr2.length; i++){
//             newarr.push(arr2[i])
//         }
//     }

//     return newarr
// }
function combineArrays(arr1,arr2){
    i1 = 0
    i2 = 0
    newarr = []
    while(true){

        if(arr1[i1] < arr2[i2]){
            newarr.push(arr1[i1])
            i1++
        }else{
            newarr.push(arr2[i2])
            i2++
        }

        if(i1 == arr1.length || i2 == arr2.length)
        break
    }
    if(i1 < arr1.length){
        for(let i = i1; i<arr1.length; i++){
            newarr.push(arr1[i])
        }
    }else{
        for(let i = i2; i<arr2.length; i++){
            newarr.push(arr2[i])
        }
    }
    //console.log('combined',newarr)
    return newarr
}

// x = combineArrays([1,2,4,5,6], [2,4,5,7,8])
// console.log(x)

//merge sort


function mergesort(arr){

    if(arr.length == 1){
        return arr
    }
    let arrleft = []//first half
    let arrright = []//second half
    for(let i = 0; i<arr.length; i++ ){
        if(i< arr.length /2){
            arrleft.push(arr[i])
        }else{
            arrright.push(arr[i])
        }
    }
    return(combineArrays(mergesort(arrleft),mergesort(arrright)))
}


//console.log(mergesort([7,2,6,3,8,5,9,0,1,4]))


function countTo10(){
    for(let i =1; i<11;i++)
    console.log(i)
}
//countTo10()

function rcountto10(i = 0){
    if(i==10){
        return i
    }
    rcountto10(++i)
    console.log(i+1)

}
rcountto10()