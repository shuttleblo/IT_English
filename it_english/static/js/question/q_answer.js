
const quiz = [
  {
    question: 'allocation',
    answers: [
      '割り当て',
      '認証 ',
      '可用性',
      '機能'
      ],
      correct: '割り当て'
  },{
    question: 'compatibility',
    answers: [
      '互換性',
      '補完、完了',
      '制約',
      '遅延'
      ],
      correct: '互換性'
  },{
    question: ' duration',
    answers: [
      '処理',
      '期間',
      '改装',
      '実装'
      ],
      correct: '期間'
  },{
    question: ' enumeration',
    answers: [
      '機能',
      '抽出する',
      '外部の',
      '列挙'
      ],
      correct: '列挙'
  },

  ];

console.log(localStorage.getItem('count'));

var quizCount = Number(localStorage.getItem('count'));

console.log(quizCount);

localStorage.clear();

  const quizLength = quizCount;
  console.log(quizLength+3);

  let quizIndex = 0;
  let score =0;

var correctStorage = localStorage;
var incorrectStorage = sessionStorage;

  
  const $button = document.getElementsByTagName('button');
  const buttonLength = $button.length;
  
  //クイズの問題、選択肢を定義
  const setupQuiz = () => {
   document.getElementById('js-question').textContent = quiz[quizIndex].question;
   let buttonIndex = 0;
   while(buttonIndex < buttonLength){
     $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
     buttonIndex++;
   }
  }
  
setupQuiz();



  
  const clickHandler = (e) => {
   if(quiz[quizIndex].correct === e.target.textContent){
      $('.quiz_area_icon').addClass('true');

      correctStorage.setItem(quiz[quizIndex].question,quiz[quizIndex].correct);
      score++;
      quizIndex++;
   } else {
      $('.quiz_area_icon').addClass('false');
      
      incorrectStorage.setItem(quiz[quizIndex].question,quiz[quizIndex].correct);
      quizIndex++;
   }



  $("#Next").on('click', function () {
   $('.quiz_area_icon').removeClass('true false');
   $('.quiz_area_bg').hide();
   //問題のカウントを進める
   //次の問題を設定する
   setupQuiz(); 
 });

  


  
   if(quizIndex === quizLength){
      document.getElementById('result').textContent='終了！あなたの正解数は' + score + '/' + quizLength + 'です！'
      $("#Next").val("Finish");
      location.href = "/result";
   } 
  };
  
  //ボタンをクリックしたら正誤判定
  let handlerIndex = 0;
  while (handlerIndex < buttonLength) {
   $button[handlerIndex].addEventListener('click', (e) => {
     clickHandler(e);
   });
   handlerIndex++;
  };

