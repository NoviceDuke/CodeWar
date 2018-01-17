function arrayPlusArray(arr1, arr2) {

  arr1 = arr1.concat( arr2 ) ;

  var sum = 0;

  for ( i = 0 ; i<arr1.length; i++){
    sum += arr1[i];
  }

  return sum; //something went wrong
}
