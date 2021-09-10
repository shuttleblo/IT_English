var correctResult =""
var incorrectResult=""
for(var i = 0,len = correctStorage.length; i<len; i++){
    var k = correctStorage.key(i);
    var v = correctStorage[k];
    console.log(k+':'+v);
    correctResult+=k+v;
  }

  for(var j = 0,len = incorrectStorage.length; j<len; j++){
    var x = incorrectStorage.key(j);
    var y = incorrectStorage[x];
    console.log(x+':'+y);
    incorrectResult+=x+y;
  }
  
  document.getElementById('correct').textContent=correctResult;

  document.getElementById('incorrect').textContent=incorrectResult;

  correctStorage.clear();