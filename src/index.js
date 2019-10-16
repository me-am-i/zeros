module.exports = function zeros(expression) {

  const arrayFromExpression = expression.split("*"); // получаем массив элементов
  
  const doubleFactorial = arrayFromExpression.filter(function(elem){ // получаем только двойные факториалы
    if (elem.slice(-2) == "!!")
    return elem;
  });

  const simpleFactorial =  arrayFromExpression.filter(function(elem){ // получаем только простые факториалы
    if (elem.slice(-2) != "!!")
    return elem;
  });

  const doubleFiltered = doubleFactorial.map(function(element){ // переводим строку в число
      return parseInt(element, 10);
  });

  const simpleFiltered = simpleFactorial.map(function(element){ // переводим строку в число
    return parseInt(element, 10);
});


  const nullOfDouble = doubleFiltered.map(function(num){
    if (num % 2) {return 0;}
    else {
      // тут надо вычислить
    }

  });


  let arr = nullOfDouble;
  let sum = 0;
  
  arr.forEach(function(elem) {
    sum += elem;
  });
  
  console.log(sum);
  return sum;

  


//let n = parseInt(expression);

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
