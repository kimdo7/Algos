console.log(prob1("abcde")) //baced
console.log(prob1("abcd")) //badc

function prob1(str) {
    var midpoint = parseInt(str.length / 2)

    var leftStr = ""
    var rightStr = ""
    var midStr = (str.length % 2) ? str[midpoint] : ""

    for (var i = 0, leftCursor = 0, rightCursor = str.length - 1;
        i < midpoint; i++) {
        leftStr = str[leftCursor] + leftStr
        rightStr = rightStr + str[rightCursor]

        leftCursor += 1
        rightCursor -= 1
    }

    return leftStr + midStr + rightStr
}

function swap(str, first, last){
    return str.substr(0, first)
           + str[last]
           + str.substring(first+1, last)
           + str[first]
           + str.substr(last+1);
}

function prob2(str){
  var midpoint = parseInt(str.length / 2)
  for (var i = 0; i < midpoint; i += 2){
    str = swap(str, i, midpoint - i - 1)
    
    if (str.length % 2 == 0 ){
      str = swap(str, midpoint, str.length - i - 1) 
    }else{
      str = swap(str, midpoint + 1, str.length - i - 1)

    }
  }

  return str
}
