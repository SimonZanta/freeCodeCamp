function telephoneCheck(str) {
  let strArr = str.split("")

  if(countNumbers(strArr) == 10 || countNumbers(strArr) == 11 && strArr[0] == 1){

    if(strArr[strArr.length - 1] != ")"){
      if(getNumberOfParantesies(strArr) == 0 || getNumberOfParantesies(strArr) == 2){
            if(getNumberOfDash(strArr) < 3){
              return true
            }else{
              return false
            }
            
          }else{
            return false
        }
    }else{
      return false
    }
  }else{
    return false
  }


}

function countNumbers(arr){
  let count = 0
  for(let i = 0; i < arr.length; i++){
    if(arr[i].match(/[0-9]/i)){
      count++
    }
  }

  return count
}

function getNumberOfDash(arr){
  let count = 0

   for(let i = 0; i < arr.length; i++){
    if(arr[i].match(/[-]/i)){
      count++
    }
  }

  return count
}


function getNumberOfParantesies(arr){

  let count = 0

   for(let i = 0; i < arr.length; i++){
    if(arr[i].match(/[(-)]/i)){
      count++
    }
  }

  return count
}

telephoneCheck("1 (555) 555-5555");