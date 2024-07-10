// let numbers = [12, 8, 2, 0, 3];
// let sum = 0;
// console.log("numbers pairs:");
// for(let i = 0; i < numbers.length; i++)
//     {
//         // if(numbers[i] % 2===0){
//         //     console.log(numbers[i]);
//         // }
//         sum += numbers[i];

//     }
    // console.log(sum)

    // let str = "hello";
    // let splitword = str.split("").reverse().join("");
    // function reverseword(word){
    //     return word.split("").reverse().join("");
    // }
    // let string = "javascript"
    // console.log(reverseword(string))
function isPalindrom(str){
    let reversed = str.split("").reverse().join("");
    return reversed === str
    
}
let ispalindrom = "kayak"
console.log(isPalindrom(ispalindrom))
