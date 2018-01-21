//simple code
var checkTheBucket = bucket => {
  for( let contain of bucket){
   if( contain === "gold" ){
     return true ;
    }
  }
  return false ;
}
// clever code
var checkTheBucket = bucket =>{
  return bucket.includes("gold") ;
}
