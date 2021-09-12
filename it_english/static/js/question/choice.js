var quizCountStorage;

$("#Ten").on('click', function () {
    localStorage.setItem('count',10);
    quizCountStorage =  localStorage.getItem('count');
  });