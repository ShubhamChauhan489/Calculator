import React, { useState } from 'react';
import './index.css'; 

const App = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const calculate = (operation) => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    let res;

    if (isNaN(number1) || isNaN(number2)) {
      setResult('Please enter valid numbers');
      return;
    }

    switch (operation) {
      case 'add':
        res = number1 + number2;
        break;
      case 'subtract':
        res = number1 - number2;
        break;
      case 'multiply':
        res = number1 * number2;
        break;
      case 'divide':
        res = number2 !== 0 ? number1 / number2 : 'Cannot divide by zero';
        break;
      default:
        break;
    }

    setResult(res);
  };

  const clearInputs = () => {
    setNum1('');
    setNum2('');
    setResult(null);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96">
        <h1 className="text-2xl font-bold text-center mb-4">Simple Calculator</h1>
        <input 
          type="number" 
          value={num1} 
          onChange={(e) => setNum1(e.target.value)} 
          placeholder="First number" 
          className="mb-2 p-2 border border-gray-300 rounded w-full"
        />
        <input 
          type="number" 
          value={num2} 
          onChange={(e) => setNum2(e.target.value)} 
          placeholder="Second number" 
          className="mb-4 p-2 border border-gray-300 rounded w-full"
        />
        <div className="flex justify-between mb-4 gap-2">
          <button onClick={() => calculate('add')} className="p-2 bg-blue-500 text-white rounded w-1/4">+</button>
          <button onClick={() => calculate('subtract')} className="p-2 bg-blue-500 text-white rounded w-1/4">-</button>
          <button onClick={() => calculate('multiply')} className="p-2 bg-blue-500 text-white rounded w-1/4">*</button>
          <button onClick={() => calculate('divide')} className="p-2 bg-blue-500 text-white rounded w-1/4">/</button>
        </div>
        <button onClick={clearInputs} className="mb-4 w-full p-2 bg-red-500 text-white rounded">Clear</button>
        {result !== null && <h2 className="text-xl text-center">Result: {result}</h2>}
      </div>
    </div>
  );
};

export default App;
