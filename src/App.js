import React, { useState } from 'react';

const Calculator = () => {
  const [expression, setExpression] = useState([]);
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);

  const handleButtonClick = (value) => {
    setExpression((prevExpression) => [...prevExpression, value]);
  };

  const handleClear = () => {
    setExpression([]);
    setResult(null);
  };

  const handleEvaluate = () => {
    try {
      const calculationResult = eval(expression.join(''));
      setResult(calculationResult);
      setHistory([...history, calculationResult]);
    } catch (error) {
      setResult('Error');
    }
  };

  const buttons = [
    '1', '2', '3', '+',
    '4', '5', '6', '-',
    '7', '8', '9', '*',
    '0', 'C', '=', '/'
  ];

  return (
    <div>
      <h2>Calculator</h2>
      <div>
        <input type="text" value={expression.join('')} readOnly />
      </div>
      <div>
        <table>
          <tbody>
            {Array.from({ length: 4 }).map((_, rowIndex) => (
              <tr key={rowIndex}>
                {Array.from({ length: 4 }).map((_, colIndex) => {
                  const buttonValue = buttons[rowIndex * 4 + colIndex];
                  return (
                    <td key={colIndex}>
                      <button onClick={() => handleButtonClick(buttonValue)}>
                        {buttonValue}
                      </button>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {result !== null && <p>Result: {result}</p>}

      <h3>History</h3>
      <table>
        <thead>
          <tr>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item, index) => (
            <tr key={index}>
              <td>{item}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calculator;
