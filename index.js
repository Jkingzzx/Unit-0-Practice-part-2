//Unit 0 Practice Part 2

/* 1. Write a function that returns the largest of
two numbers.




Example: 
greaterThan(20, 4) => 20
greaterThan(5, 15) => 15

*/
function max(2, 1){
  
    if (2 > 1) {
       console.log( 2 + " is larger than " + 1);
    } else {
        console.log( 2+ " is less than " + 1);
    }
    return;
  
}









/* 2.

Write a function that returns the smallest of
two numbers.

Example: 
lessThan(20, 4) => 20
lessThan(5, 15) => 15

*/
console.log(Math.min(2, 3, 1));
// expected output: 1









/* 3.

Write a function that returns all of the values within a given array.

Example: 

var myArray = [0,1,2,3,4,5]

arrayPrint(myArray) => 0 1 2 3 4 5
arrayPrint(['hello', true]) => 'hello'  true

*/
// Input array contain some elements. 
var array = [ 'a', 'gfg', 'c', 'n' ]; 
  
// Here array.values() function is called. 
var iterator = array.values(); 
  
// Here all the elements of the array is being printed. 
for (let elements of iterator) { 
  console.log(elements); 
} 







/* 4.

Write a function that prints the numbers from 0 to an input number.

Example: 
counter(6) => 0 1 2 3 4 5 6
counter(10) => 0 1 2 3 4 5 6 7 8 9 10

*/
for ( var i = 1; i <= 100; i++ )
{
  if ( i%3 === 0 && i%5 === 0 )
  {
    console.log( i + " FizzBuzz" );
  }
  else if ( i%3 === 0 ) 
  {
    console.log(i+ " Fizz" );
  }
  else if ( i%5 === 0 ) 
  {
    console.log(i+ " Buzz" );
  }
  else
  {
    console.log(i);
  }
}









/* 5.

Write a function that determines if a given input 
number is even or odd

Example: 
isEven(6) => even
isEven(55) => odd

*/
var num = 5;
   document.write("Number = "+num+"<br>");
   if(num % 2 == 0) {
      document.write('Number is even!');
   } else {
      document.write('Number is odd!');
   }








