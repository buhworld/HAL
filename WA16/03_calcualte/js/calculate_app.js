// オーダー
const TAX_RATE = 0.1;
var name = "コーヒー";
var price = 500;
var quantity = 2;
var discount = 100;
var totalPrice = 0;

// TODO: 個数を増減
// TODO: 合計金額計算
// TODO: 四捨五入

// HTML表示
document.getElementById('name').innerHTML = name;
document.getElementById('price').innerHTML = price;
document.getElementById('quantity').innerHTML = quantity;
document.getElementById('discount').innerHTML = discount;
document.getElementById('totalPrice').innerHTML = totalPrice;


// オーダーコード
var tableNo = 3;
var orderNo = 20341;

// TODO: オーダーコード生成（テキスト連結）
// TODO: オーダーコードHTML表示