import './App.css';
import Orders from './components/Orders';
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import {
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>

      <Switch>
        <Route path="/posiljke">
          <Orders />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
