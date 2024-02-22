import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonPress = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input));
        setInput(''); // Reset input when showing result
      } catch (error) {
        setResult('Error');
        setInput('');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td colSpan="4">
              <input type="text" value={input} readOnly />
            </td>
          </tr>
          <tr>
            <td><button onClick={() => handleButtonPress('7')}>7</button></td>
            <td><button onClick={() => handleButtonPress('8')}>8</button></td>
            <td><button onClick={() => handleButtonPress('9')}>9</button></td>
            <td><button onClick={() => handleButtonPress('+')}>+</button></td>
          </tr>
          <tr>
            <td><button onClick={() => handleButtonPress('4')}>4</button></td>
            <td><button onClick={() => handleButtonPress('5')}>5</button></td>
            <td><button onClick={() => handleButtonPress('6')}>6</button></td>
            <td><button onClick={() => handleButtonPress('-')}>-</button></td>
          </tr>
          <tr>
            <td><button onClick={() => handleButtonPress('1')}>1</button></td>
            <td><button onClick={() => handleButtonPress('2')}>2</button></td>
            <td><button onClick={() => handleButtonPress('3')}>3</button></td>
            <td><button onClick={() => handleButtonPress('*')}>*</button></td>
          </tr>
          <tr>
            <td><button onClick={() => handleButtonPress('0')}>0</button></td>
            <td><button onClick={() => handleButtonPress('.')}>.</button></td>
            <td><button onClick={() => handleButtonPress('=')}>=</button></td>
            <td><button onClick={() => handleButtonPress('/')}>/</button></td>
          </tr>
          <tr>
            <td colSpan="4"><button onClick={() => handleButtonPress('C')}>C</button></td>
          </tr>
        </tbody>
      </table>
      {result && <div>{result}</div>} {/* Only display result if it's not empty */}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>React Calculator</h1>
      <Calculator />
    </div>
  );
};

export default App;
