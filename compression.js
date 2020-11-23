
let count = 1;
let rleString = "";

function compressString(string){
    if(string.length > 1){
    let n = string.length
    //assign first char as currentchar
    let currentChar = string[0]
    let nextChar;
    for (let i = 1; i < n; ++i) {
         nextChar = string[i]
       if(nextChar == currentChar) {
                count++
        }else{
            rleString += count + currentChar;
            //reset count to 1
            count = 1;
            //assign value of  nextChar to currentChar
            currentChar = nextChar;
        }
    }
    rleString += count + nextChar;
    return rleString;
  }
  return string 
}
     



console.log(compressString("QQQUUUUUUUlllllllqqQQQQQQQQQTTA"))