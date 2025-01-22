// for文を使って年齢のプルダウンメニューを生成
// selectタグ取得​
const ageSelect = document.getElementById('age-select');
const defaultYear = 30;

// TODO: optionタグ生成の繰り返し
for (let i = 0; i <= 100; i++) {
    // optionタグ生成​
    const option = document.createElement('option');
    option.value = i;
    option.innerHTML = i + ' 歳';

    // selectタグ に optionタグ追加​
    ageSelect.appendChild(option);
}

// --- ここから ---
// optionタグ生成​
// const option = document.createElement('option');
// option.value = 0;
// option.innerHTML = 0 + ' 歳';

// selectタグ に optionタグ追加​
ageSelect.appendChild(option);
// --- ここまで ---

/**
 * 複利計算 while
 */
function calculateYears() {
    // 入力値を取得
    const initialDeposit = parseFloat(document.getElementById('initial-deposit').value);
    const interestRate = parseFloat(document.getElementById('saving-interest-rate').value) / 100;
    const savingTarget = parseFloat(document.getElementById('saving-target').value);

    // TODO: 入力が正しいかどうかのチェックm

    var years = 0;
    var currentAmount = initialDeposit;

    // 複利計算: 目標金額に達するまで年ごとに増やす
    while (currentAmount < savingTarget) {
        currentAmount += currentAmount * interestRate;
        years++;
    }

    // 結果を表示
    document.getElementById('year').innerHTML = years;
}