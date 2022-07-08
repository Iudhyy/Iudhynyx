var counter;
    counter = 1000;
    setInterval(function () {
      counter = counter - 1;
      document.getElementById("counterarea").innerHTML = counter;
      if(counter === 0){
        window.location.href = 'http://127.0.0.1:5502/Form/index.html';
      }
    }, 1000);