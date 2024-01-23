'use client';
import React, {useState} from 'react';
import './style.css';


function Calculator () {
  const [input, setInput] = useState('');

  const handleButtonClick = (value: string) => {
    if (value === '/') {
      setInput((prevInput) => prevInput + '÷');
    } else if (value === '*') {
      setInput((prevInput) => prevInput + '×');
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const handleClear = () => {
    setInput('');
  };
  
  const handleCalculate = () => {
    try {
      const result = Function('return ' + input.replace(/÷/g, '/'))();
      setInput(result.toString().replace(/\//g, '÷'));
    } catch (error) {
      setInput('Error');
    }
  };

    return (
        <div>
          <div className="cal-grid-container">
            <div className="output">{input}</div>
            <button className="span-two top" onClick={handleClear}>AC</button>
            <button className="top" onClick={() => handleButtonClick('back')}>←</button>
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
            <button className="orange" onClick={handleCalculate}>=</button>
          </div>
        </div>

    );
}

export default Calculator;