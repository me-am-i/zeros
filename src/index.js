module.exports = function zeros(expression) {

  const arrayFromExpression = expression.split("*"); // получаем массив элементов

//console.log(arrayFromExpression.length);

const result = arrayFromExpression.filter(function(elem){
  
  if (elem.slice(-2) == "!!")
  //console.log(elem.slice(-2));
  //console.log (parseInt(elem, 10))
  return elem;
})

var filtered = result.map(function(element){
      return parseInt(element, 10);
  });
console.log(filtered);

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
