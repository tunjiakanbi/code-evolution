
import './App.css';
import User from './Components/User/User';
import Info from './Components/Info/Info';
import Data from './Components/Data/Data';
function App() {
  return (
    <div className="App">
      {/* <User name="Tunji"/> */}
      <User name="Tunji">
        <p>This is children props</p>
      </User>
      <Info name="Teniola" />
      <Data />
    </div>
  );
}

export default App;
