//combine sort takes 2 sorted arrays
//returns new sorted array
//not working inplace

//iterate through both arrays
//compare the value in both and add the smaller value to the new array
//when we run out in 1 array, iterate through the other and add the rest of the values

function combineArrays(arr1,arr2){
   
    
    newarr = []
    for(i1=0,i2 = 0; i1<arr1.length && i2<arr2.length; i1++,i2++){

        if(arr1[i1] < arr2[i2]){
            newarr.push(arr1[i1])
            i2--
        }else{
            newarr.push(arr2[i2])
            i1--
        }

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

    return newarr
}
// function combineArrays(arr1,arr2){
//     i1 = 0
//     i2 = 0
//     newarr = []
//     while(true){

//         if(arr1[i1] < arr2[i2]){
//             newarr.push(arr1[i1])
//             i1++
//         }else{
//             newarr.push(arr2[i2])
//             i2++
//         }

//         if(i1 == arr1.length || i2 == arr2.length)
//         break
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

x = combineArrays([1,2,4,5,6], [2,4,5,7,8])
console.log(x)