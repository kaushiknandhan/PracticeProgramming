Create a function that returns the average of an array of numbers ("scores"), rounded to the nearest whole number. You are not allowed to use any loops (including for, for/in, while, and do/while loops).



function average(scores) {
    // code to calculate the average
var sum =  scores.reduce((total,n)=>{
   return total+n;
 },0);
 
 return Math.round(sum/scores.length);
}