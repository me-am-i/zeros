module.exports = function zeros(expression) {

  const arrayFromExpression = expression.split("*");

console.log(arrayFromExpression);


let n = parseInt(expression);

  function number(n) {
    var counter = 0;
    for (var i = 5; n/i >= 1; i *= 5)
      counter += Math.floor(n/i);
    return counter;
  }



  return number(n);


  /*
  let counter = 0;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
  }*/

}
