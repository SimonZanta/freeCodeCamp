function steamrollArray(arr) {

  let array = [...arr]
  let fullArr = []

  recursiveElement(array)

  

  function recursiveElement(arrayInput){

    let newArrInput = [...arrayInput]

    console.log(arrayInput)
    console.log(arrayInput.length)

    for(let i = 0; i < arrayInput.length; i++){

      let type = typeof(arrayInput[i])

      console.log(type)

      if(arrayInput[i].length === undefined){
        fullArr.push(arrayInput[i])
      }else if(arrayInput[i].length === 1 && type == "string"){
        fullArr.push(arrayInput[i])
      }else{
        recursiveElement(newArrInput[i])
      }
    }
  }

  console.log(fullArr)
return fullArr;

}

steamrollArray(["a", "b"]);