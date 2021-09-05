
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
      window.alert('正解！');
      score++;
   } else {
      window.alert('不正解！');
   }
  
   quizIndex++;
  
   if(quizIndex < quizLength){
     setupQuiz();
   } else {
     window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
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