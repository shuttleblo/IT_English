//正解一覧のテーブル
var makeTableCorrect = function(){
  var tb = document.getElementById("tbody_correct")
  // テーブルの初期化
  while (tb.firstChild){
    tb.removeChild(tb.firstChild);
  }

  // テーブルの出力
  for (var i=0; i < correctStorage.length; i++) {
      var _key = correctStorage.key(i);
      var tr = document.createElement("tr");
      var td1 = document.createElement("td");
      var td2 = document.createElement("td");
      tb.appendChild(tr);
      tr.appendChild(td1);
      tr.appendChild(td2);
      td1.innerHTML = _key;
      td2.innerHTML = correctStorage.getItem(_key);
  }
};

window.addEventListener('load', function() {
  makeTableCorrect();
  correctStorage.clear();
})

//不正解一覧のテーブル
var makeTableIncorrect = function(){
  var tb = document.getElementById("tbody_incorrect")
  // テーブルの初期化
  while (tb.firstChild){
    tb.removeChild(tb.firstChild);
  }

  // テーブルの出力
  for (var j=0; j < incorrectStorage.length; j++) {
      var _key = incorrectStorage.key(j);
      var tr = document.createElement("tr");
      var td1 = document.createElement("td");
      var td2 = document.createElement("td");
      tb.appendChild(tr);
      tr.appendChild(td1);
      tr.appendChild(td2);
      td1.innerHTML = _key;
      td2.innerHTML = incorrectStorage.getItem(_key);
  }
};

window.addEventListener('load',function(){
  makeTableIncorrect();
  incorrectStorage.clear();
});

localStorage.clear();