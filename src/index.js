import React from 'react';
import ReactDOM from 'react-dom';
import { useLocalStorageState } from './uselocalstoragestate';
import './index.css';

function App() {
  const [count, setCount] = useLocalStorageState('react-app:count', 0);

  return (
    <>
      <button onClick={() => setCount(0)}>clear</button>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
