import React, { useCallback, useState } from 'react';
import './App.css';

function App() {
  const [expression, setExpression] = useState("");
  const [showVal,setShowVal]=useState()
 

  const handleButtonClick = (value) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  const calculateResult = () => {
    
    if(expression){
      let  result = eval(expression);
      
      return result;
    }
     return "Error"
    
    }

  const clearInput = () => {
    setExpression("");
  };

  return (
    <div className="App">
      <h2>React Calculator</h2>
      <div className="input-box">
        <input type="text" value={expression} readOnly />
      </div>
      <div className='result-container'>
        <h3>{showVal}</h3>
      </div>
      <div className="btn-container">
        {[7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, '*', 'C', 0, '=', '/'].map((value, index) => (
          <button key={index} onClick={() => {
            if (value === 'C') {
              clearInput();
            } else if (value === '=') {
              // setExpression("")
            let value=  calculateResult();
            if(value==undefined){
              setShowVal(undefined)
            }else setShowVal(value)
              // console.log(showVal);
            } else {
              handleButtonClick(value);
            }
          }} className="btn">{value}</button>
        ))}
      </div>
    </div>
  );
}

export default App;
