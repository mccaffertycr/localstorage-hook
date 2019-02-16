import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  const [count, setCount] = useState(() => {
    let value;
    try {
      value = JSON.parse(window.localStorage.getItem('react-app:count') || '0');
    } catch (e) {
      // ignore error
    }
    return value;
  });

  useEffect(() => {
    window.localStorage.setItem('react-app:count', count);
  }, [count]);

  return (
    <>
      <button onClick={() => setCount(0)}>clear</button>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
