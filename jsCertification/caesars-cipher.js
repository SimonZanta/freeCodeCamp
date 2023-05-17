function rot13(str) {
const alphabetShifted = {
  'a': 'n',
  'b': 'o',
  'c': 'p',
  'd': 'q',
  'e': 'r',
  'f': 's',
  'g': 't',
  'h': 'u',
  'i': 'v',
  'j': 'w',
  'k': 'x',
  'l': 'y',
  'm': 'z',
  'n': 'a',
  'o': 'b',
  'p': 'c',
  'q': 'd',
  'r': 'e',
  's': 'f',
  't': 'g',
  'u': 'h',
  'v': 'i',
  'w': 'j',
  'x': 'k',
  'y': 'l',
  'z': 'm'
};

let stringToArr = str.split("");
let finalArr = [];
let finalString = ""

for(let i = 0; i < stringToArr.length; i++){
  for(let j = 0; j < Object.keys(alphabetShifted).length; j++){
    if(!stringToArr[i].match(/[A-Z]/i)){
      finalArr.push(stringToArr[i])
      j = Object.keys(alphabetShifted).length
    }
    else if (stringToArr[i] === Object.keys(alphabetShifted)[j].toUpperCase()){
      finalArr.push(Object.values(alphabetShifted)[j].toUpperCase())
      j = Object.keys(alphabetShifted).length
    }
  }
}

for(let f = 0; f < finalArr.length; f++){
  finalString = finalString + finalArr[f]
}

return finalString

}

rot13("FREE PIZZA!");