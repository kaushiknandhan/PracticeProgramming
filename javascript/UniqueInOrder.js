// Unique In Order


var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
  var arr = typeof(iterable) === 'string'?iterable.split(""):iterable;
  if(arr.length === 0){
return [];
  }
  var result = [];
  result.push(arr[0]);
  for(let i =0;i<  arr.length-1;i++){
  if(arr[i] !== arr[i+1]){
  result.push(arr[i+1]);
  }
  }
  return result;
}