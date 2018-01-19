// simple function
function removeChar(str){
  str = str.substring(1,str.length-1);
  return str ;
};
// arrow function
var removeChar = str =>{
  return str.substring(1,str.length-1);
};
//clever code
function removeChar(str) {
  return str.slice(1, -1);
}
