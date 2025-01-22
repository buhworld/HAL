/**
 * for
 * 0 から1ずつ増やして10回表示
 */
// TODO: For Loop

for (let i = 0; i < 10; i++) {
    console.log(i);
}

/**
 * for
 * 1 から 1000までの足し算
 */
var sum = 0;
// TODO: For Loop
for (let i = 1; i <= 1000; i++) {
    sum += i;
}
console.log(sum);

/**
 * while
 * 10までの偶数(even number)を表示
 */
var num = 0;
// TODO: While Loop
while (num <= 10) {
    if (num % 2 == 0) {
        console.log(num);
    }
    num++;
}