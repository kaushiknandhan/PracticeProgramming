An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

isIsogram( "Dermatoglyphics" ) == true
isIsogram( "aba" ) == false
isIsogram( "moOse" ) == false // -- ignore letter case



function isIsogram(str){
  var input = str.toLowerCase().split('');
  var result = [];
  if(input.length === 0 ){
    return true;
  }
  for(let i=0;i< input.length;i++){
 if(result.indexOf(input[i]) < 0){
      result.push(input[i]);
    }else{
      return false;
    }
  }
  
  return true;
  
}

//Another program

function isIsogram(str){ 
  return !/(\w).*\1/i.test(str)
}