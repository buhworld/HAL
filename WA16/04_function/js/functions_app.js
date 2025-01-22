// オーダーアプリ
const TAX_RATE = 0.1;
var itemName = "コーヒー";
var price = 500;
var quantity = 2;
var discount = 100;
var totalPrice = 0;
var tableNo = 1;

/**
 * showHTML()
 * HTML表示
 */
// TODO: 関数定義

function showHTML(id, value) {
    document.getElementById(id).innerHTML = value;
}


/**
 * calculateTotalPrice()
 * 合計金額（税込）の計算 
 */
// TODO: 関数定義

function calculateTotalPrice(price, quantity, discount) {
    return ((price * quantity - discount) * (1 + TAX_RATE)).toFixed();
}



/**
 * createOrderCode()
 * オーダーコード作成
 */
// TODO: 関数定義

function createOrderCode(tableNo, orderNo) {
    return 'T' + tableNo + 'O' + orderNo;
}

/**
 * randomNumber()
 * ランダムな整数
 */
const randomNumber = (min, max) => {
    //(0 - 1 のランダム) * (最大値 - 最小値) + 最小値
    var number = Math.floor(Math.random() * (max + 1 - min)) + min;
    return number;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// TODO: HTML表示（商品名、価格、個数）

showHTML('item-name', itemName);
showHTML('price', price);
showHTML('quantity', quantity);

// TODO: 合計金額計算
totalPrice = calculateTotalPrice(price, quantity, discount);

// TODO: HTML表示（割引、合計金額）
showHTML('discount', discount);
showHTML('totalPrice', totalPrice);

// TODO: オーダーコード（テーブルNo-オーダーNo）、完了メッセージ処理
setTimeout(() => {
    showHTML('status', 'ご注文ありがとうございました');
    var orderNo = randomNumber(10000, 99999);
    var orderCode = createOrderCode(tableNo, orderNo);
    showHTML('order-code', orderCode);
}, 3000);