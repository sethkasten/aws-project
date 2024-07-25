import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p className='myText'>
          My Text!
        </p>
        <div className='myFlex'>
          <h1>Flex1</h1>
          <h2>Flex2</h2>
          <h3>Flex3</h3>
          <h4>Flex4</h4>
        </div>
        <button className='button1'>Press Me!</button>
        <button className='button2'>Press Me too!</button>
        <p className='example'>This Text has prepended content</p>
      </header>
      <body>
        <p className='bodyText'>Some wild body text</p>
        <p className='bodyText2'>Some wild body text</p>
      </body>
      <footer>
        <p>Footer Text</p>
      </footer>
    </div>
  );
}

export default App;
