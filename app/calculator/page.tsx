'use client';
import React, { useState } from 'react';
import './style.css';

function Calculator() {
  const [input, setInput] = useState('');
  const [hasCalculated, setHasCalculated] = useState(false);

  const handleButtonClick = (value) => {
    if (value === '/') {
      setInput((prevInput) => prevInput + '÷');
    } else if (value === '*') {
      setInput((prevInput) => prevInput + '×');
    } else if (value === '=') {
      calculateResult();
    } else {
      setInput((prevInput) => {
        if (hasCalculated) {
          setHasCalculated(false);
          return value;
        }
        return prevInput + value;
      });
    }
  };

  const handleClear = () => {
    setInput('');
    setHasCalculated(false);
  };

  const calculateResult = () => {
    try {
      const cleanedInput = input.replace(/÷/g, '/').replace(/×/g, '*');
      const result = Function('return ' + cleanedInput)();
      setInput(result.toString().replace(/\//g, '÷').replace(/\*/g, '×'));
      setHasCalculated(true);
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div>
      <div className="cal-grid-container">
        <div className="output">{input}</div>
        <button className="span-three top" onClick={handleClear}>Clear All</button>
        <button className="orange" onClick={() => handleButtonClick('/')}>÷</button>

        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button className="orange" onClick={() => handleButtonClick('×')}>×</button>

        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button className="orange" onClick={() => handleButtonClick('+')}>+</button>

        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button className="orange" onClick={() => handleButtonClick('-')}>-</button>

        <button className="span-two" onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button className="orange" onClick={calculateResult}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
