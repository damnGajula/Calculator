import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      result: '',
      history: []
    };
  }

  handleButtonPress = (value) => {
    if (value === '=') {
      // try {
      //   const result = eval(this.state.input);
      //   const calculation = '${this.state.input} = ${result}';
      //   this.setState((prevState) => ({ 
      //     result,
      //     history: [...prevState.history, calculation],
      //     input: ''
      //   }));
      try {
        const calculation = `${this.state.input} = ${this.state.result}`;
        this.setState((prevState) => ({
          result: eval(this.state.input),
          input: '',
          history: [...prevState.history, calculation] // Add calculation to history
        }));

      } catch (error) {
        this.setState({ result: 'Error' });
      }

    } else if (value === 'C') {
      this.setState({ input: '', result: '' });
    } else {
      this.setState((prevState) => ({
        input: prevState.input + value
      }));
    }
  };

  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td colSpan="4">
                <input type="text" value={this.state.input} readOnly />
              </td>
            </tr>
            <tr>
              <td><button onClick={() => this.handleButtonPress('7')}>7</button></td>
              <td><button onClick={() => this.handleButtonPress('8')}>8</button></td>
              <td><button onClick={() => this.handleButtonPress('9')}>9</button></td>
              <td><button onClick={() => this.handleButtonPress('+')}>+</button></td>
            </tr>
            <tr>
              <td><button onClick={() => this.handleButtonPress('4')}>4</button></td>
              <td><button onClick={() => this.handleButtonPress('5')}>5</button></td>
              <td><button onClick={() => this.handleButtonPress('6')}>6</button></td>
              <td><button onClick={() => this.handleButtonPress('-')}>-</button></td>
            </tr>
            <tr>
              <td><button onClick={() => this.handleButtonPress('1')}>1</button></td>
              <td><button onClick={() => this.handleButtonPress('2')}>2</button></td>
              <td><button onClick={() => this.handleButtonPress('3')}>3</button></td>
              <td><button onClick={() => this.handleButtonPress('*')}>*</button></td>
            </tr>
            <tr>
              <td><button onClick={() => this.handleButtonPress('0')}>0</button></td>
              <td><button onClick={() => this.handleButtonPress('.')}>.</button></td>
              <td><button onClick={() => this.handleButtonPress('=')}>=</button></td>
              <td><button onClick={() => this.handleButtonPress('/')}>/</button></td>
            </tr>
            <tr>
              <td colSpan="4"><button onClick={() => this.handleButtonPress('C')}>C</button></td>
            </tr>
          </tbody>
        </table>
        <div>
          <h3>History</h3>
          <ul>
            {this.state.history.map((calculation, index) => (
              <li key={index}>{calculation}</li>
            ))}
          </ul>
          </div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Calculator</h1>
        <Calculator />
      </div>
    );
  }
}

export default App;
