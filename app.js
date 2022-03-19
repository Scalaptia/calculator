  const add = function(a, b) {
      return a + b;
  };
  
  const subtract = function(a, b) {
      return a - b;
  };

  const multiply = function(a, b) {
      return a * b;
  };
  
  const divide = function(a, b) {
      return a / b;
  }

  function operate(func, a, b) {
      return func(a, b);
  }