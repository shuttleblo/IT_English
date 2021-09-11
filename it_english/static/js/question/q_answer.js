
const quiz = [
   {
     question: 'Apple',
     answers: [
       'りんご',
       'レモン',
       'ぶどう',
       'なし'
       ],
       correct: 'りんご'
   }, {
     question: 'Teacher',
     answers: [
       '警察',
       '調理師',
       '銀行員',
       '先生'
       ],
       correct: '先生'
   }, {
     question: 'Bicycle',
     answers: [
       '車',
       '飛行機',
       '電車',
       '自転車'
       ],
       correct: '自転車'
   }
  ];
  
  const quizLength = quiz.length;
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

