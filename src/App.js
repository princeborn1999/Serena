import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/Header';
import NavComponent from './components/Nav';
import ControlComponent from './components/Control';
import FooterComponent from './components/Footer';
function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <div className='flex'>
       <NavComponent />
       <ControlComponent />
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
