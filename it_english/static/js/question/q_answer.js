'use strict';

const question = 'Apple';
const answers = [
    'りんご',
    'ぶどう',
    'レモン',
    'メロン'
   ];
   const correct = "りんご";

   

   document.getElementById('button1').textContent = answers[0];
   const que1 = document.getElementById('button1');
   const ans1 = document.getElementById('button1').textContent;

   document.getElementById('button2').textContent = answers[1];
   const que2 = document.getElementById('button2');
   const ans2 = document.getElementById('button2').textContent;

   document.getElementById('button3').textContent = answers[2];
   const que3 = document.getElementById('button3');
   const ans3 = document.getElementById('button3').textContent;

   document.getElementById('button4').textContent = answers[3];
   const que4 = document.getElementById('button4');
   const ans4 = document.getElementById('button4').textContent;

   que1.addEventListener('click', () => {
    if(correct === ans1){
       window.alert('正解！');
    } else {
       window.alert('不正解！');
    }
   });

   que2.addEventListener('click', () => {
    if(correct === ans2){
       window.alert('正解！');
    } else {
       window.alert('不正解！');
    }
   });

   que3.addEventListener('click', () => {
    if(correct === ans3){
       window.alert('正解！');
    } else {
       window.alert('不正解！');
    }
   });

   que4.addEventListener('click', () => {
    if(correct === ans4){
       window.alert('正解！');
    } else {
       window.alert('不正解！');
    }
   });



