const current = document.getElementById('current-station');
const furigana = document.getElementById('current-furigana');
const next = document.getElementById('next-station');
const prev = document.getElementById('prev-station');

// 連想配列の定義
var station = {
    name: '東京',
    furigana: 'とうきょう'
}

console.log(station)

// 駅名表示
current.textContent = station.name;
furigana.textContent = station.furigana;

// 駅名、ふりがなのデータ更新
station = {
  name: '新橋',
  furigana: 'しんばし'
}

// 駅名表示
current.textContent = station.name;
furigana.textContent = station.furigana;

// 連想配列の配列
const stations = [
    {name: '東京', furigana: 'とうきょう'},
    {name: '有楽町', furigana: 'ゆうらくちょう'},
    {name: '新橋', furigana: 'しんばし'},
    {name: '浜松町', furigana: 'はままつちょう'},
    {name: '田町', furigana: 'たまち'},
    {name: '高輪ゲートウェイ', furigana: 'たかなわげーとうぇい'},
    {name: '品川', furigana: 'しながわ'},
    {name: '大崎', furigana: 'おおさき'},
    {name: '五反田', furigana: 'ごたんだ'},
    {name: '目黒', furigana: 'めぐろ'},
    {name: '恵比寿', furigana: 'えびす'},
    {name: '渋谷', furigana: 'しぶや'},
    {name: '原宿', furigana: 'はらじゅく'},
    {name: '代々木', furigana: 'よよぎ'},
    {name: '新宿', furigana: 'しんじゅく'},
    {name: '新大久保', furigana: 'しんおおくぼ'},
    {name: '高田馬場', furigana: 'たかだのばば'},
    {name: '目白', furigana: 'めじろ'},
    {name: '池袋', furigana: 'いけぶくろ'},
    {name: '大塚', furigana: 'おおつか'},
    {name: '巣鴨', furigana: 'すがも'},
    {name: '駒込', furigana: 'こまごめ'},
    {name: '田端', furigana: 'たばた'},
    {name: '西日暮里', furigana: 'にしにっぽり'},
    {name: '日暮里', furigana: 'にっぽり'},
    {name: '鶯谷', furigana: 'うぐいすだに'},
    {name: '上野', furigana: 'うえの'},
    {name: '御徒町', furigana: 'おかちまち'},
    {name: '秋葉原', furigana: 'あきはばら'},
    {name: '神田', furigana: 'かんだ'}
];

console.log(stations)

// 前の駅名表示
// 次の駅名表示

function updateStationInfo(index) {
    if (index < 0 || index >= stations.length) return;

    current.textContent = stations[index].name;
    furigana.textContent = stations[index].furigana;
    next.textContent = (index + 1 < stations.length) ? stations[index + 1].name : '終点';
    prev.textContent = (index - 1 >= 0) ? stations[index - 1].name : '始点';
}

updateStationInfo(8);
