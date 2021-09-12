
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
  },{
    question: ' exclude',
    answers: [
      '拡張する',
      '除外する',
      '抽出する',
      '重複する'
      ],
      correct: '除外する'
  },{
    question: ' fetch',
    answers: [
      '呼び出す',
      '実装する',
      '取得する',
      '重複する'
      ],
      correct: '取得する'
  },{
    question: ' identifier',
    answers: [
      '初期化',
      '識別子',
      '移行',
      '修正'
      ],
      correct: '識別子'
  },{
    question: ' latency',
    answers: [
      '機能',
      '待ち時間',
      '表現',
      '実行時'
      ],
      correct: '待ち時間'
  },{
    question: ' execute',
    answers: [
      '拡張する',
      '除外する',
      '抽出する',
      '実行する'
      ],
      correct: '実行する'
  },{
    question: 'transition',
    answers: [
      '簡素化',
      '分割',
      '修正',
      '遷移 '
      ],
      correct: '遷移 '
  },
{
    question: 'toggle',
    answers: [
      '転送する',
      '切り替える',
      '終了する',
      '微調整する'
      ],
      correct: '切り替える'
  },
{
    question: ' typo',
    answers: [
      '入力ミス',
      '検証',
      '列挙',
      '拡張'
      ],
      correct: '入力ミス'
  },{
    question: 'tweak',
      answers: [
        '切り替える',
        '終了する',
        '転送する',
        '微調整する'
        ],
        correct: '微調整する'
    },{
    question: 'unique',
      answers: [
        '一意の',
        '静的な',
        '生の',
        '遠隔の'
        ],
        correct: '一意の'
    },
 {
    question: 'syntax',
      answers: [
        '接頭辞',
        '仕様',
        '構文',
        '機能'
        ],
        correct: '構文'
    },
 

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

