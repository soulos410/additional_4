module.exports = function multiply(first, second) {
    let firstNumber = first.split('').reverse();
    let secondNumber = second.split('').reverse();
    let answer = [];

    for (let i = 0; firstNumber[i] >= 0; i++) {
        for (let j = 0; secondNumber[j] >= 0; j++) {
            if (!answer[i + j]) {
                answer[i + j] = 0;
            }
            answer[i + j] += firstNumber[i] * secondNumber[j];
        }
    }
    for (let i = 0; answer[i] >= 0; i++) {
        if (answer[i] >= 10) {
            if (!answer[i + 1]) {
                answer[i + 1] = 0;
            }
            answer[i + 1] += parseInt(answer[i] / 10);
            answer[i] %= 10;
        }
    }
    return answer.reverse().join('');
}







































/*  let bigNumber = [],lessNumber = [], remainder = 0 , answer = "";
  if(first.length > second.length){
    bigNumber = first.split("");
    lessNumber = second.split("");
  }
  else {
    bigNumber = second.split("");
    lessNumber = first.split("");
  }
  for (let i = lessNumber.length-1; i > -1; i--) {
    for (let j = bigNumber.length-1; j > -1; j--) {
      if (lessNumber[i] === 0 && bigNumber[j] === 0) {
        answer += '' + '0';
        break;
      }
      if (lessNumber[i] * bigNumber[j] > 9) {
        remainder = Math.floor((lessNumber[i] * bigNumber[j]) / 10);
        answer += (lessNumber[i] * bigNumber[j]) % 10;        
      }
        else {
          if (lessNumber[i] * bigNumber[j] + remainder > 9) {
            answer += Math.floor(lessNumber[i] + bigNumber[j] + remainder); 
            remainder = (lessNumber[i] + bigNumber[j] + remainder) % 10;
          }
          else{
        answer += '' + lessNumber[i] * bigNumber[j];
        }
        }
      if (j === 0 && remainder !== 0) {
        answer += '' +remainder;
      }
    }
  }
  return answer.split('').reverse().join('');   */

