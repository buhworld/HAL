// タイトルの設定
var titleElement = document.getElementById("title");
var messageElement = document.getElementById("message");
var diceElement = document.getElementById("dice");
var number = 1;

// タイトルと初期メッセージの設定
titleElement.innerText = 'DICE';
messageElement.innerHTML = 'サイコロをふってください！';

/**
 * ランダムな整数を生成
 */
const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
};

/**
 * サイコロの画像を切り替える関数
 */
const updateDiceImage = (number) => {
    var resultElement = document.getElementById("result");
    // TODO: サイコロ画像の更新
    resultElement.src = `./images/dice${number}.png`;
};

/**
 * rollDice()
 * サイコロを振る関数
 */
// TODO: HTMLに onclickイベントで登録
const rollDice = () => {
    // TODO: prevent function from being called repeatedly
    if (diceElement.classList.contains('rolling')) {
        console.log("The dice is already rolling!");
        return;
    }

    console.log("Click!");
    // TODO: 1 - 6 のランダムな数字を取得
    number = randomNumber(1, 6);
    // console.log(`The random number will be ${number}`);

    // TODO: サイコロが振られている間、updateDiceImage() で画像をランダムに変更(0.05秒インターバル）
    const rolling = setInterval(() => {
        number = randomNumber(1, 6);
        updateDiceImage(number);
    }, 50);

    // TODO: アニメーション開始: class = rolling を追加
    diceElement.classList.add('rolling');

    // TODO: setTImeout で２秒後にサイコロを止める
    setTimeout(() => {
        clearInterval(rolling);
        updateDiceImage(number);
        // メッセージ更新
        messageElement.innerHTML = `サイコロの目は ${number} です！`;
    }, 2000);

    // TODO: アニメーション終了 class = rolling を削除
    setTimeout(() => {
        diceElement.classList.remove('rolling');
    }, 2000);

    // メッセージ更新
    messageElement.innerHTML = "サイコロをふりました！";
};

// ウィンドウ読み込み完了後に実行
window.onload = () => {
    // ローディングを非表示
    const loadingElement = document.getElementById('loading');
    loadingElement.style.display = 'none';
}