module.exports = function zeros(expression) {

  const arrayFromExpression = expression.split("*"); // получаем массив элементов
  
  const doubleFactorial = arrayFromExpression.filter(function(elem){
    // получаем только двойные факториалы
    if (elem.slice(-2) == "!!")
    return elem;
  });

  const simpleFactorial =  arrayFromExpression.filter(function(elem){
    // получаем только простые факториалы
    if (elem.slice(-2) != "!!")
    return elem;
  });

  const doubleFiltered = doubleFactorial.map(function(element){
    // переводим строку в число
      return parseInt(element, 10);
  });

  const simpleFiltered = simpleFactorial.map(function(element){
    // переводим строку в число
    return parseInt(element, 10);
});

  const nullOfDouble = doubleFiltered.map(function(num){
    // вычисляем количество нулей
    if (num % 2) {return 0;}
    else {
      function number1(n) {
          let counter = 0;
          for (let i = 10; n/i >= 1; i *= 10)
            counter += Math.floor(n/i);
          return counter;
        }
      return number1(num);
    }

  });

//console.log(nullOfDouble);

const nullOfSimple = simpleFiltered.map(
  function zzz (number) {
  return getZerosCount(number)
}
);

console.log(nullOfSimple + " - nullOfSimple");


//console.log(nullOfSimple);

var k = 0;
var a = 0;

while (k < (nullOfSimple.length - 1)) {
  a = a + nullOfSimple[k];
  k++;
}

var k = 0;
var b = 0;

while (k < (nullOfDouble.length - 1)) {
  b = b + nullOfDouble[k];
  k++;
}


//let a = nullOfSimple[3] != undefined ? nullOfSimple[3] : 0; + nullOfSimple[4] != undefined ? nullOfSimple[4] : 0;



console.log(a + b);
return a+b;


// эта функция вычисляет число нулей в в конце обычного факториала
function getZerosCount(number, base = 10) {
  let numberOfZeros = number;
  let primeNumber = base;

  for (let i = 2; i <= base; i++) {
    if ( primeNumber % i === 0) {
      let count = 0;
      while ( primeNumber % i === 0) {
        primeNumber /= i;     
        count++;
      }

      let power = 0;
      let remainder  = Math.floor(number / i);
      while (remainder  > 0) {
        power += remainder ;
        remainder  = Math.floor(remainder / i);
      }
      numberOfZeros = Math.min(numberOfZeros, Math.floor(power / count))
    }
  }

  return numberOfZeros;
}





/*
  let arr = nullOfDouble;
  let sum = 0;
  
  arr.forEach(function(elem) {
    sum += elem;
  });
  
  let arr = nullOfSimple;
    
  arr.forEach(function(elem) {
    sum += elem;
  });

  console.log(sum);
  return sum;

  */


//let n = parseInt(expression);
/*
  function number(n) {
    var counter = 0;
    for (var i = 5; n/i >= 1; i *= 5)
      counter += Math.floor(n/i);
    return counter;
  }



  return number(n);
*/



  /*
  let counter = 0;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
  }*/

}
/*

получить строку

порезать на куски

отсортировать, сложить двойные факториалы в одну, а обычные в другую переменную

если двойной Ф. нечётный, то вычисление не требуется, если чётный вычислить кол-во нулей

вычислить кол-во нулей для обычного Ф.

сложить кол-во

вернуть результат









*/