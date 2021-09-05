/* 'use strict';

   const quizSet = [
      {q: 'Apple', c: ['りんご', 'ぶどう', 'レモン','メロン'],a:'りんご'},
      {q: 'Teacher', c: ['警察', '先生', '調理師','銀行員'],a:'先生'},
      {q: 'Bicycle', c: ['車', '飛行機', '自転車','電車'],a:'自転車'},
    ];
   
    var currentNum = 0;
    const que1 = document.getElementById('button1');
    const que2 = document.getElementById('button2');
    const que3 = document.getElementById('button3');
    const que4 = document.getElementById('button4');

    const setupQuiz = () =>{

      document.getElementById('js-question').textContent=quizSet[currentNum].q; 

      document.getElementById('button1').textContent = quizSet[currentNum].c[0];
      let ans1 = document.getElementById('button1').textContent;

      document.getElementById('button2').textContent = quizSet[currentNum].c[1];
      let ans2 = document.getElementById('button2').textContent;

      document.getElementById('button3').textContent = quizSet[currentNum].c[2];
      let ans3 = document.getElementById('button3').textContent;
      
      document.getElementById('button4').textContent = quizSet[currentNum].c[3];
      let ans4 = document.getElementById('button4').textContent; 
      }
  
    

     document.getElementById('js-question').textContent=quizSet[currentNum].q; 

      document.getElementById('button1').textContent = quizSet[currentNum].c[0];
      const que1 = document.getElementById('button1');
      let ans1 = document.getElementById('button1').textContent;
   
      document.getElementById('button2').textContent = quizSet[currentNum].c[1];
      const que2 = document.getElementById('button2');
      let ans2 = document.getElementById('button2').textContent;
   
      document.getElementById('button3').textContent = quizSet[currentNum].c[2];
      const que3 = document.getElementById('button3');
      let ans3 = document.getElementById('button3').textContent;
   
      document.getElementById('button4').textContent = quizSet[currentNum].c[3];
      const que4 = document.getElementById('button4');
      let ans4 = document.getElementById('button4').textContent;
    


   $('#Next').on('click', function() {

      currentNum+=1;
      
      document.getElementById('js-question').textContent=quizSet[currentNum].q;

      document.getElementById('button1').textContent = quizSet[currentNum].c[0];
      let ans1 = document.getElementById('button1').textContent;
   
      document.getElementById('button2').textContent = quizSet[currentNum].c[1];
      let ans2 = document.getElementById('button2').textContent;
   
      document.getElementById('button3').textContent = quizSet[currentNum].c[2];
      let ans3 = document.getElementById('button3').textContent;
   
      document.getElementById('button4').textContent = quizSet[currentNum].c[3];
      let ans4 = document.getElementById('button4').textContent;

    });

    que1.addEventListener('click', () => {
      if(quizSet[currentNum].a === ans1){
         window.alert('正解！');
      } else {
         window.alert('不正解！');
      }
     });
  
     que2.addEventListener('click', () => {
      if(quizSet[currentNum].a === ans2){
         window.alert('正解！');
      } else {
         window.alert('不正解！');
      }
     });
  
     que3.addEventListener('click', () => {
      if(quizSet[currentNum].a === ans3){
         window.alert('正解！');
      } else {
         window.alert('不正解！');
      }
     });
  
     que4.addEventListener('click', () => {
      if(quizSet[currentNum].a === ans4){
         window.alert('正解！');
      } else {
         window.alert('不正解！');
      }
     });

 */

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