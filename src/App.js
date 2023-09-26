import './App.css';
import HeaderComponent from './components/Header';
import NavComponent from './components/Nav';
import ControlComponent from './pages/Control/Control';
import FooterComponent from './components/Footer';
import IntroComponent from './pages/Intro';
import ApplicationComponent from './pages/Application';
import ArticlesComponent from './pages/Articles';
import { Route } from "react-router-dom";
function App() {
  //TODO直接先預設跳出一個modal 表示廣告
  return (
    <div className="App">
      <HeaderComponent />
      <div className='flex divide-x divide-slate-300'>
        <NavComponent />
        <div className='w-screen min-h-screen'>
          <Route exact path="/"><IntroComponent /></Route>
          <Route path="/control"><ControlComponent /></Route>
          <Route path="/application"><ApplicationComponent /></Route>
          <Route path="/articles"><ArticlesComponent /></Route>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
