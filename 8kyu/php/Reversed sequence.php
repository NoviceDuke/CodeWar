<<?php
function reverseSeq ($n) {
  $k = [] ;
  while ( $n ){
  array_push( $k , $n ) ;
  $n--;
  }
  return $k ;
};
// clever code
function clever_reverseSeq($n){
  return range ( $n , 1 );
}
 ?>
