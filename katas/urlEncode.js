const urlEncode = function(text) {
  text = text.split("");
  for (let i = 0; i < text.length; i++){
    //IF NOT starting OR NOT ending AND empty space THEN cut space and insert %20
    if(text[i] === " " && !(i === 0 || i === text.length - 1)){
      text.splice(i, 1, "%20");

    //IF starting OR ending AND empty space THEN cut space
    }else if (text[i] === " " && (i === 0 || i === text.length -1) ){
      text.splice(i,1);
    }
  }
  return text.join("");
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));