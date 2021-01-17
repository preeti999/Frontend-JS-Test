/* Define an array of numbers (use any random numbers).
   Write a program in Javascript to print only the even numbers of the array.
   Do not use any library functions, need to do via for loops only
*/

function question1(){
    let arr = [1,1,2,4,0,3,10,12,11];
    for (let i = 0; i < arr.length; i++){
      if (arr[i] % 2 == 0){
        console.log(arr[i]);
      }
    }
  } 
  var result = question1();
  console.log(result);