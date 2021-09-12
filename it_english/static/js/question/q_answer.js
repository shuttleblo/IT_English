
const quiz = [
  //ベーシック
  {question:'argument',answers:['配列','引数','属性','機能'],correct:'引数'},
  {question:'array',answers:['容量','要素','配列','例外'],correct:'配列'},
  {question:'attribute',answers:['属性','機能','構文','条件'],correct:'属性'},
  {question:'available',answers:['圧縮する','詳細な','非対応の','利用可能な'],correct:'利用可能な'},
  {question:'branch',answers:['キャッシュ','枝/ブランチ','コア','生成'],correct:'枝/ブランチ'},
  {question:'cache',answers:['キャッシュ','定義','仕様','簡素化'],correct:''},
  {question:'capacity',answers:['同期','容量','表示','分割'],correct:'容量'},
  {question:'case',answers:['設定','範囲','制限','大文字小文字の区別'],correct:'大文字小文字の区別'},
  {question:'component',answers:['表現','部品','条件','削除'],correct:'部品'},
  {question:'condition',answers:['遠隔','条件','登録','更新'],correct:'条件'},
  {question:'configuration',answers:['転送','構成','優先度','上書き'],correct:'構成'},
  {question:'console',answers:['オフセット','数値','通知','コンソール'],correct:'コンソール'},
  {question:'connection',answers:['修正','接続','最小','手動'],correct:'接続'},
  {question:'constant',answers:['定数の/一定の','一致する','手動の','待ち時間'],correct:'定数の/一定の'},
  {question:'context',answers:['初期化','無効な','文脈','互換性のある'],correct:'文脈'},
  {question:'core',answers:['インデント','階層','最重要の/コア','処理'],correct:'最重要の/コア'},
  {question:'current',answers:['現在の','前の','次の','消去された'],correct:'現在の'},
  {question:'content',answers:['実装','処理','生成','内容'],correct:'内容'},
  {question:'cursor',answers:['インデント','カーソル','処理','汎用'],correct:'カーソル'},
  {question:'contain',answers:['拡張する','実行する','含む','除外する'],correct:'含む'},
  {question:'debug',answers:['デバッグ','エクスポート','デフォルト','インポート'],correct:'デバッグ'},
  {question:'developer',answers:['暗号化','開発者','分散','遅延'],correct:'開発者'},
  {question:'determine',answers:['判別する/決定する','配備する','表示する','停止する'],correct:'判別する/決定する'},
  {question:'define',answers:['競合する','圧縮する','複製する','定義する'],correct:'定義する'},
  {question:'element',answers:['制約','証明書','要素','計算'],correct:'要素'},
  {question:'exception',answers:['互換性','起動','例外','閲覧'],correct:'例外'},
  {question:'expected',answers:['期待された','圧縮された','割り当てられた','自動化された'],correct:'期待された'},
  {question:'feature',answers:['可用性','追加','機能','削除'],correct:'機能'},
  {question:'generate',answers:['接続する','集約する','管理する','生成する'],correct:'生成する'},
  {question:'indicate',answers:['示す','追加する','削除する','修正する'],correct:'示す'},
  {question:'integer',answers:['小数','整数','分数','結合'],correct:'整数'},
  {question:'merge',answers:['通知する','発生する','描画する','統合する'],correct:'統合する'},
  {question:'parameter',answers:['登録','冗長化','仮引数','実行'],correct:'仮引数'},
  {question:'previous',answers:['前の','現在の','安全な','分割された'],correct:'前の'},
  {question:'query',answers:['証明','問合せ','範囲','仕様'],correct:'問合せ'},
  {question:'range',answers:['簡略化','設定','範囲','同期'],correct:'範囲'},
  {question:'reference',answers:['終了','起動','参照','条件'],correct:'参照'},
  {question:'rename',answers:['切り替える','名前を変更する','統合する','権限を与える'],correct:'名前を変更する'},
  {question:'specific',answers:['不要な','予期しない','有効な','特定の'],correct:'特定の'},
  {question:'submit',answers:['確認する','提出する','調整する','復元する'],correct:'提出する'},
  

//アドバンス
  {question: 'allocation',answers: ['割り当て','認証 ','可用性','機能'],correct: '割り当て'},
  {question:'abstruct',answers:['確定した','抽象的な','サイズの違う','冗長な'],correct:'抽象的な'},
  {question:'administrator',answers:['優先順位','進行状況','概要','管理者'],correct:'管理者'},
  {question:'aggregate',answers:['数値の','集約する','通知する','始める'],correct:'集約する'},
  {question:'annotation',answers:['数字','修正','最大数','注釈'],correct:'注釈'},
  {question:'append',answers:['追加する','削除する','一致する','繰り返す'],correct:''},
  {question:'applicable',answers:['非推奨の','初期化された','該当する/適用可能な','汎用的な'],correct:'該当する/適用可能な'},
  {question:'assign',answers:['取得する','終了させる','代入する','確実にする'],correct:'代入する'},
  {question:'authentification',answers:['暗号化','拡張','実行','認証'],correct:'認証'},
  {question:'authorize',answers:['権限を与える','実行する','重複する','検出する'],correct:'権限を与える'},
  {question:'availability',answers:['無効化','可用性','分散','期間'],correct:'可用性'},
  {question:'binary',answers:['桁','範囲','二進法の','依存している'],correct:'二進法の'},
  {question:'brace',answers:['波かっこ','角かっこ','丸かっこ','キー'],correct:'波かっこ'},
  {question:'bracket',answers:['波かっこ','丸かっこ','キー','角かっこ'],correct:'角かっこ'},
  {question:'certificate',answers:['期間','描画','証明書','機能'],correct:'証明書'},
  {question: 'compatibility',answers: ['互換性','補完、完了','制約','遅延'],correct: '互換性'},
  {question:'configure',answers:['処理する','構成する','実装する','初期化する'],correct:'構成する'},
  {question:'constraint',answers:['間隔','移行','制約','通知'],correct:'制約'},
  {question:'credential',answers:['認証情報','発生','解析','永続化'],correct:'認証情報'},
  {question:'deprecated',answers:['優先度の高い','非公開の','読み込まれた','非推奨の'],correct:'非推奨の'},
  {question:'digit',answers:['桁','解決','復元','範囲'],correct:'桁'},
  {question:'dynamic',answers:['静的な','分割できる','動的な','安全な'],correct:'動的な'},
  {question: ' duration',answers: ['処理','期間','改装','実装'],correct: '期間'},
  {question: ' enumeration',answers: ['機能','抽出する','外部の','列挙'],correct: '列挙'},
  {question:'encryption',answers:['仕様','暗号化','設定','転送'],correct:'暗号化'},
  {question:'excutable',answers:['実行可能ファイル','切り替えられる','一意の','不要な'],correct:'実行可能ファイル'},
  {question:'fetch',answers:['検証する','取得する','圧縮する','変換する'],correct:'取得する'},
  {question:'generic',answers:['解析できる','入れ子の','汎用の','移動された'],correct:'汎用の'},
  {question:'identifier',answers:['数値','移動','修正','識別子'],correct:'識別子'},
  {question:'increment',answers:['増分させる','監視する','変更する','起動する'],correct:'増分させる'},
  {question:'modification',answers:['間隔','起動','内部','修正'],correct:'修正'},
  {question:'numeric',answers:['初期の','数値の','外部の','既存の'],correct:'数値の'},
  {question:'optimize',answers:['取得する','始動する','最適化する','終了する'],correct:'最適化する'},
  {question:'redundant',answers:['内部の','外部の','確かな','冗長な'],correct:'冗長な'},
  {question:'static',answers:['動的な','実行可能な','静的な','有効な'],correct:''},
  {question:'syntax',answers:['構文','証明','列挙','期間'],correct:'構文'},
  {question:'terminate',answers:['開始する','終了する','追加する','削除する'],correct:'終了する'},
  {question:'toggle',answers:['編集する','符号化する','切り替える','検出する'],correct:'切り替える'},
  {question:'tweak',answers:['微調整する','取得する','宣言する','変換する'],correct:'微調整する'},
  {question:'validation',answers:['著作権','構成','補完','検証'],correct:'検証'},
  {question:'verify',answers:['生成する','検証する','非表示にする','取り込む'],correct:'検証する'},
  {question:'verbose',answers:['抽象的な','該当する','詳細な','関連した'],correct:'詳細な'},
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

