import Vue from 'vue'
var clock = new Vue({
    el: '#clock',
    data: {
        time: '',
        date: ''
    }
});

// 曜日を変数varに入れる
var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
//  ＊タイマー処理＊
// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
// setInterval…一定時間ごとに特定の処理を繰り返す(永久的に)
// setTimeout…一定時間後に特定の処理をおこなう（繰り返さずに一度だけ）
// 1秒 = 1000ミリ秒。
var timerID = setInterval(updateTime, 1000); //1秒ごとにupdateTimeを実行する
updateTime();
function updateTime() {
  var time = new Date();
  var hours = time.getHours();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // The hour '0' should be '12'

// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
//  ＊zero paddingとgetHoursなどの指定された日付のローカルタイムに沿って、
// 　その時間を返すメソッドを使って現在の日時を表示する＊
// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
    // ゼロパディング(zero padding)とは、書式の桁数に満たない数値の場合に、足りない桁数だけ 0 を追加して桁数を合わせること

    // getFullYear()　→　2019(現在)なので4桁
    // getMonth()　→　Max12月までなので2桁、0月は存在しないので+1させる
    // getDate()　→　Max31日までなので2桁
    // getHours()　→　0〜時間なので2桁
    // getMinutes()　→　Max60分なので2桁
    // getSeconds()　→　Max60秒なので2桁
    // getDay()　→　月〜日まで7なので1桁、１桁の場合は第二引数はいらない
    clock.time = zeroPadding(time.getHours(), 2) + ':' + zeroPadding(time.getMinutes(), 2) + ':' + zeroPadding(time.getSeconds(), 2);
    clock.date = zeroPadding(time.getFullYear(), 4) + '-' + zeroPadding(time.getMonth()+1, 2) + '-' + zeroPadding(time.getDate(), 2) + ' ' + week[time.getDay()];
};

function zeroPadding(num, digit) {
    var zero = '';
    for(var i = 0; i < digit; i++) {
        zero += '0';
    }
    // .slice()は文字列の一部を抜き出して、新しい文字列を返すメソッドです
    return (zero + num).slice(-digit);
}