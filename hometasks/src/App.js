import logo from './logo.svg';
import './App.css';
import Hex2rgb from './components/Hex2rgb/Hex2rgb';
import Steps from './components/Steps/Steps';
import { Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/users" component={Hex2rgb} />
          <Route exact path="/login" component={Steps} />
        </div>
      </Router>
    </div>
  );
}

export default App;
