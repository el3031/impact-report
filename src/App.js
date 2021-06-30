import './App.css';
import HomePage from './HomePage.js'
import Vision from './Vision.js'
import Sidebar from './Sidebar.js'

function App() {
  return (
    <div>
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div id="main" className="ImpactReport">
        <HomePage id="Home"/>
        <Vision id="Vision"/>
      </div>
      
    </div>
    
    
    
    /*
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
      </header>
    </div>
    */
  );
}

export default App;
