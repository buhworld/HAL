var result;
var price = 500;

result = (price == 500);
console.log(result);

result = (price < 0);
console.log(result);

result = (price > 500);
console.log(result);

// If statement

var message = "";
var price = 500;
var money = 1000;

if (money >= price) {
    console.log("決済完了");
}

// If else statement

if (price < 0) {
    console.log("価格エラー");
} else if (money >= price) {
    console.log("決済完了");
} else {
    console.log("残高不足");
}

// ternary operator

message = (price <= money) ? "決済完了" : "残高不足";
console.log(message);

// switch statement
var weekday = "月";
var garbage = "";

switch (weekday) {
    case "月":
    case "金":
        garbage = "燃えるゴミ";
        break;
    case "木":
        garbage = "燃えないゴミ";
        break;
    
    default:
        garbage = "不明";
        break;
}

console.log(garbage);