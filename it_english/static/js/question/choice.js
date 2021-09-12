var quizCountStorage = localStorage;

$("#Ten").on('click', function () {
    quizCountStorage.setItem('count',10);
    console.log(quizCountStorage.getItem('count')); 
  });