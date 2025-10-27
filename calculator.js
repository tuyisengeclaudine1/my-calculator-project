

    const display = document.getElementById('display');

    // Append numbers or operators
    function appendValue(val) {
      display.value += val;
    }

    // Clear entire display
    function clearAll() {
      display.value = '';
    }

    // Delete last character
    function clearLast() {
      display.value = display.value.slice(0, -1);
    }

    // Parentheses toggle
    let openParen = true;
    function appendParenthesis() {
      if (openParen) {
        display.value += '(';
      } else {
        display.value += ')';
      }
      openParen = !openParen;
    }

    // Calculate result with % support
    function calculateResult() {
      try {
        // Convert percentages like 50% to 0.5
        let expression = display.value.replace(/(\d+(\.\d+)?)%/g, (_, num) => num / 100);
        // Prevent trailing operators
        if (/[\+\-\*\/\.\(]$/.test(expression)) {
          display.value = 'Error';
          return;
        }
        display.value = eval(expression);
      } catch {
        display.value = 'Error';
      }
    }

    // Keyboard support (optional)
    document.addEventListener('keydown', (e) => {
      if ((e.key >= '0' && e.key <= '9') || ['+', '-', '*', '/', '.', '(', ')', '%'].includes(e.key)) {
        appendValue(e.key);
      } else if (e.key === 'Enter') {
        calculateResult();
      } else if (e.key === 'Backspace') {
        clearLast();
      } else if (e.key === 'Escape') {
        clearAll();
      }
    });







