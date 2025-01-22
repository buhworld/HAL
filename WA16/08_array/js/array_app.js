// TODO: 配列の定義（'コーヒー', '紅茶', 'ほうじ茶'）
var items = ['コーヒー', '紅茶', 'ほうじ茶'];

/**
 * 配列を文字列で表示
 */
function showArrayString() {
    // 配列をカンマ区切りの文字列に変換
    var string = items.join(', ');
    document.getElementById('array-string').innerHTML = string;
}

/**
 * 配列の要素表示
 */
function showItem() {
    const index = document.getElementById('input-index').value;
    // インデックス範囲内かチェック
    if (index >= 0 && index < items.length) {
        // TODO: items に index を指定してデータ表示
        var item = items[index];
        // document.getElementById('item').innerHTML = item;
        document.getElementById('input-value').value = item;
        document.getElementById('error').innerHTML = "";
    } else {
        // TODO: 配列の個数から、最大インデックスを設定
        var maxIndex = items.length;
        var error = `0 から${maxIndex}の範囲で指定してください。`;
        document.getElementById('error').innerHTML = error;
    }
}

/**
 * 値の更新
 */
function updateItem() {
    const index = document.getElementById('input-index').value;
    const value = document.getElementById('input-value').value;

    // TODO: インデックスを指定して値更新
    items[index] = value;
    

    // 配列の値表示
    showItem();

    // 配列の文字列表示
    showArrayString();
}

showArrayString();