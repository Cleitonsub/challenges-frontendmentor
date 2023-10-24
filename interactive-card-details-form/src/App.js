import bg_main_desktop from './images/bg_main_desktop.png';
import bg_main_mobile from './images/bg_main_mobile.png';

function App() {
  return (
    <div className="App">
      <header className="App_header">
        <img src={ bg_main_desktop } alt="bg_main_desktop"/>
        <img src={ bg_main_mobile } alt="bg_main_mobile"/>
      </header>
    </div>
  );
}

export default App;
