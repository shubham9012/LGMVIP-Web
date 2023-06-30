function clearResult() {
    document.getElementById('result').value = '';
  }
  
  function calculate(value) {
    document.getElementById('result').value += value;
  }
  
  function calculation() {
    var result = document.getElementById('result').value;
    var answer = eval(result);
    document.getElementById('result').value = answer;
  }

  // Keyboard keys activation


  document.addEventListener('keydown', function(event) {
    var key = event.key;
    var allowedKeys = ['0','00', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '+', '-', '*', '/', '=', 'Enter', 'Escape'];

    if (allowedKeys.includes(key)) {
      event.preventDefault();

      if (key === 'Enter') {
        calculation();
      } else if (key === 'Escape') {
        clearResult();
      } else {
        calculate(key);
      }
    }
  });