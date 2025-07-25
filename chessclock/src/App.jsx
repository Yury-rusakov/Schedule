import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Tableau from './components/Tableau/Tableau.jsx';
import MultiTable from './components/MultiTable/MultiTable.jsx';

 
function App() {
  const [count, setCount] = useState(0);
  let currentTime = new Date().toLocaleTimeString();

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className='App'>
        <h1>{currentTime}</h1>
        <Tableau />
        <MultiTable size = {5}/>
      </div>
    </>
  );
}

export default App;
