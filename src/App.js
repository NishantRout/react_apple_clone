import "./App.css";
import Iphone from "./components/Iphone";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Shop from "./components/Shop";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/shop/:Id">
            <Shop />
          </Route>
          <Route path="/">
            <Iphone />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
