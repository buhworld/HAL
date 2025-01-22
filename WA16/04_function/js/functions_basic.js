/**
 * ビルトイン関数
 */

var numberString = "0005";
var number = parseInt(numberString);

console.log(numberString); // "0005"
console.log(number); // 5

// 数字かどうか判別
var result = isNaN("HAL");
console.log(result); // true

var result = isNaN(numberString);
console.log(result); // false

var result = isNaN(number);
console.log(result); // false

// 3秒後に文字を表示
setTimeout(() => {
    console.log("3秒経過しました");
}, 3000);

var height = 169.5;
var result = 0;

result = Math.round(height);
console.log(result); // 170
result = Math.ceil(height);
console.log(result); // 170
result = Math.floor(height);
console.log(result); // 169

/**
 * ユーザ定義関数
 */

function calculate(x) {
    var y = x + 5;
    return y;
}

var answer = calculate(10);
console.log(answer); // 15

const hello1 = function(name) {
    console.log("Hello, " + name);
}
hello1("Tom");

const hello2 = (name) => {
    console.log("Hello, " + name);
}
hello2("John");