var quizCountStorage;

$("#Ten").on('click', function () {
    localStorage.setItem('count',3);
    quizCountStorage =  localStorage.getItem('count');
  });