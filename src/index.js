module.exports = function zeros(expression) {

  const arrayFromExpression = expression.split("*"); // получаем массив элементов
  
  const doubleFactorial = arrayFromExpression.filter(function(elem){
    // получаем только двойные факториалы
    if (elem.slice(-2) == "!!")
    return elem;  });

  const simpleFactorial =  arrayFromExpression.filter(function(el){
    // получаем только простые факториалы
    if (el.slice(-2) != "!!")
    return el;  });

  const doubleFiltered = doubleFactorial.map(function(element){
    // переводим строку в число
      return parseInt(element, 10);  });

  const simpleFiltered = simpleFactorial.map(function(e){
    // переводим строку в число
    return parseInt(e, 10);  });

  const nullOfSimple = simpleFiltered.map(function(n) {
  // вычисляем количество нулей в обычном факториале
    var result = 0;
    while (n = Math.floor(n / 5)) result += n;
    return result;
 });

console.log(nullOfSimple + " - nullOfSimple");
/*
var nullOfDouble = 0;
var nullOfDouble = doubleFiltered.map(function(num){
  // вычисляем количество нулей
  var count5 = 0;
  var count2 = 0;
  var count = 0;
  {
    if (num % 2 == 0) { 
           for (var i = 5; num/(2*i) >= 1; i *= 5) {
                  count5 += Math.floor(num/(2*i));
           }
           for (var i = 2; num/i >= 1; i *= 2) {
                  count2 += Math.floor(num/i); 
           }            
          }
    else {
           var t15 = 0;
           var t25 = 0;

           for (var i = 5; (Number(num)+1)/i >= 1; i *= 5) {
                 //console.log(Number(num)+1);
                 t15 += Math.floor((Number(num)+1)/i);
               }
           for (var i = 5; (Number(num)+1)/(2*i) >= 1; i *= 5) {
                      t25 += Math.floor((Number(num)+1)/(2*i));
               }
           count5 += (t15 - t25);
           }
        }
        if ((count5 != 0) && (count2 != 0)) {
          if (count5 != count2) {
           count += Math.min(count5, count2);
          }
          else {
           count +=count2;
          }
     }
   
     if ((count5 == 0) || (count2 == 0) || ((count2 == 0)&&(count5 == 0))) {
       count += 0;
     }
//   console.log(`count = ${count}`)
   
   return count ? count : 0;
       



});

*/

console.log(nullOfSimple.reduce((a, b) => a + b, 0));

/*
var k = 0;
var a = 0;

do {
  a = a + nullOfSimple[k];
  k++;


console.log(`a= ${a} и k= ${k}`);

} while (k < (nullOfSimple.length - 1))
*/
/*
var b = 0;
    k = 0;

while (k < (nullOfDouble.length - 1)) {
  b = b + nullOfDouble[k];
  k++;
}

*/


//console.log(`a= ${a} и NUD[0]= ${nullOfDouble[0]}`);

return nullOfSimple.reduce((a, b) => a + b, 0);// + nullOfDouble[0];



function getZerosCount(number, base = 10) { // эта функция вычисляет число нулей в в конце обычного факториала, взята из прошлого задания
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