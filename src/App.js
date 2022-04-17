import { useState } from 'react';
import './App.css';

function App() {
  const [firstNumber, setFirstNumber] = useState(Math.ceil(Math.random() * 9));
  const [secondNumber, setSecondNumber] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      setResult('숫자를 입력해주세요!');
    } else if(parseInt(value) === (firstNumber * secondNumber)) {
      setResult('정답!!');
      setFirstNumber(Math.ceil(Math.random() * 9));
      setSecondNumber(Math.ceil(Math.random() * 9));
      setValue("");
    } else {
      setResult('땡! 다시 입력해보세요!');
      setValue("")
    }
  }

  const onChange = (e) => {
    setValue(e.target.value);
  }
  return (
    <div className="App">
      <div className='container'>
        <h1>{firstNumber} X {secondNumber} 은?</h1>
        <form onSubmit={onSubmit} className="form">
          <span>
            <input 
              className='input'
              type="text"
              value={value} 
              onChange={onChange}
            />
          </span>
          <button className='btn'>입력!</button>
          <div className='result'>{result}</div>
        </form>
      </div>
    </div>
  );
}

export default App;
