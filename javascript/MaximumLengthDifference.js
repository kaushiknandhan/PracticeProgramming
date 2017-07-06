// Maximum Length Difference


function mxdiflg(a1, a2) {
    
    if(a1.length === 0 || a2.length === 0 )
    return -1;
    var a1lengthArr = a1.map(e=>e.length);
    var a2lengthArr = a2.map(e=>e.length);
     if((Math.max(...a1lengthArr) - Math.min(...a2lengthArr)) > (Math.max(...a2lengthArr)-Math.min(...a1lengthArr))){
    return (Math.max(...a1lengthArr) - Math.min(...a2lengthArr));
  }else{
    return (Math.max(...a2lengthArr) - Math.min(...a1lengthArr));
  }
}