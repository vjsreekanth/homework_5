function pangram(str){
   let lowCaseStr = str.toLowerCase();
   const panagram = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
   for(let letter of panagram){
     if(lowCaseStr.includes(letter)){

     }else{
        return false
    }
  }
  return true
}


console.log(pangram('Abcdefghijklmnopqrstuvwxyz'));
console.log((pangram('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')));