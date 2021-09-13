var quizCountStorage;

$("#Five").on('click', function () {
    localStorage.setItem('count',5);
    quizCountStorage =  localStorage.getItem('count');
  });

  $("#Ten").on('click', function () {
    localStorage.setItem('count',10);
    quizCountStorage =  localStorage.getItem('count');
  });


  $("#Thirty").on('click', function () {
    localStorage.setItem('count',30);
    quizCountStorage =  localStorage.getItem('count');
  });



  $("#Fifty").on('click', function () {
    localStorage.setItem('count',50);
    quizCountStorage =  localStorage.getItem('count');
  });