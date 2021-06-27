import "./styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="App" style={{ overflowX: "hidden" }}>
      <Router>
        <Navbar />
        <Switch>
          <Route to="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}
