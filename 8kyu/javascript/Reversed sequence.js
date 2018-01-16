const reverseSeq = n => {
  var seq = [] ;
  while( n )
  {
    seq.push ( n ) ;
    n-- ;
  }
  return seq ;
};
// clever code
const reverseSeq = length => Array.from({length}, () => length--) ;
