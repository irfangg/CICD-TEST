import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        Git hub profile : <a href='https://github.com/irfangg'>irfangg</a>
      </header>
      <div className='outerMost'>
          <div>Some component</div>
          <div>One more component</div>
          <div className='rows'>
            <div className='row'>
              <input value='' />
              <div className='suggestions'>
                <ul>
                  <li>option 1</li>
                  <li>option 1</li>
                  <li>option 1</li>
                  <li>option 1</li>
                </ul>
              </div>
            </div>
            <div className='row'>
              <input value='' />
              <div className='suggestions'>
                <ul>
                  <li>option 1</li>
                  <li>option 1</li>
                  <li>option 1</li>
                  <li>option 1</li>
                </ul>
              </div>
            </div>
            <div className='row'>
              <input value='' />
              <div className='suggestions'>
                <ul>
                  <li>option 1</li>
                  <li>option 1</li>
                  <li>option 1</li>
                  <li>option 1</li>
                </ul>
              </div>
            </div>
          </div>
          <div><button>click me</button></div>
      </div>
    </div>
  );
}

export default App;
