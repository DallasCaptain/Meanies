

// //string to word array
// // "I solemly swear i am upto no good!" => ["I","solemly", "swear", "i","am","upto","no","good!"]


// //reverse word order
// //I solemly swear i am upto no good!  => "good! no upto am i swear solemnly I
// //challenge*** leave the punctuation in place => "good no upto am i swear solemnly I!

// //unicode character set
// //every character is mapped to a unicode(binary) value
// //compare them
// // val = ".";
// // if(val > " " && val < 'A'){
// //     console.log('a is greater')
// // }else{
// //     console.log('a is smaller')
// // }

// //using regex
//  //    'Welcome to the Jungle'  => rotate('Welcome to the Jungle', 5) => 'me to the JungleWelco'
//  // isRotation('I am Sam', 'Sam I am') => True  isRotation('rotation','nope') => False




// //assume rotate(str, num) is a function

// // asdf

// //sdfa
// //dfas
// function rotate(str, num){
//     new_str = ''
//     for(let i = num; i<str.length; i++){
//         new_str += str[i]
//     }
//     for(let j = 0; j<num; j++){
//         new_str += str[j]
//     }
//     return new_str
// }








// function isRotation(str1,str2){
//     if(str1.length != str2.length){
//         return false
//     }
//     if(str1 == str2){
//         return true
//     }
//     lenStr1 = str1.length

//     for(let i = lenStr1-1; i > 0; i --){
//         let rotated = rotate(str1, i)
//         if(rotated == str2){
//             return true
//         }
//     }
//     return false

// }

// // asdf     dfas

// function isRotation2(str1,str2){
//     let startindex = 0
//     let firstChar = str1[0]

//     for(let i =0; i< str2.length; i++){//looping to look for starts of rotation
//         if(str2[i]==firstChar){//found a possible start of rotation
            
//             let startindex = i
//             let match = true
//             for(let j=startindex; j<str2.length;j++){//loop over str2 starting at start index to str2.length
//                 if(str1[j-startindex]!= str2[j]){//making sure the strings match
//                     //console.log('1',j,i,startindex)
//                     match = false
//                     break
//                 }
//                 //console.log(j)
//             }

//             for(let j =0; j<startindex;j++){//loop over str2 starting at 0 to startindex
//                 if(str1[str2.length - startindex+j]!= str2[j]){//making sure the strings match
//                     //console.log('2',j,i,startindex)
//                     match = false
//                     break
//                 }
//             }
//             if(match){
//                 return true
//             }
//         }
//     }
//     return false
// }

// console.log(isRotation('call to power','to powercall '))
// console.log(isRotation2('call to power','to powercall '))


//--dedupe(str)
//'Snaps! crackles! pops!' => Snrackle ops!

//loop backwords over the str
//build a newstr by checking the str char if it already exists in newstr


//--uniqueletters(str)
//asdfsdf => a   ///newstr only contains letters that occured once in str

//encode
//'aaaaaaaaabbbbbbcccccccccceeeefff' => 'a9b6c10e4f3'


//decode 'a9b6c10e4f3' => 'aaaaaaaaabbbbbbcccccccccceeeefff'
//

//parseInt(text, 10);