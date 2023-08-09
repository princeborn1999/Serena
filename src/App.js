import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/Header';
import NavComponent from './components/Nav';
import ControlComponent from './pages/Control/Control';
import FooterComponent from './components/Footer';
import { Link, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <div className='flex h-screen'>
       <NavComponent />
       <Route exact path="/"><div>wait to come.</div></Route>
       <Route path="/control"><ControlComponent /></Route>
       <Route path="/template"><ControlComponent /></Route>
       <Route path="/timeline"><ControlComponent /></Route>
       <Route path="/api"><ControlComponent /></Route>
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
