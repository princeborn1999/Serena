import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/Header';
import NavComponent from './components/Nav';
import ControlComponent from './pages/Control/Control';
import FooterComponent from './components/Footer';
import { GameComponent } from './pages/Game';
import { Link, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <div className='flex h-screen'>
        <NavComponent />
        <div className='w-screen bg-gray-200'>
          <Route exact path="/"><div>Wait to come.</div></Route>
          <Route path="/control"><ControlComponent /></Route>
          <Route path="/template"><ControlComponent /></Route>
          <Route path="/timeline"><ControlComponent /></Route>
          <Route path="/game"><GameComponent /></Route>
          <Route path="/api"><ControlComponent /></Route>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
