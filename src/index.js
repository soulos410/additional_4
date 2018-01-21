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
            answer[i + 1] += Math.floor(answer[i] / 10);
            answer[i] %= 10;
        }
    }
    return answer.reverse().join('');
}