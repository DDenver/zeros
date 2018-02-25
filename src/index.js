module.exports = function getZerosCount(number) {
  var zero = 0,
      r = 0;
  for (var i = 1; i <= number; i++){
    ch = i;
    do{

      r = ch % 5;
      if (r == 0){
        zero++;
        ch = ch / 5;
      }
    } while( r == 0);
  };
  return zero;
}
