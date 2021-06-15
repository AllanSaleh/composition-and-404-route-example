import "./App.css";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import Navbar from "./components/Navbar";
import ErrorMessage from "./components/ErrorMessage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact>
              <First />
            </Route>
            <Route path="/second" exact>
              <Second />
            </Route>
            <Route path="/third" exact>
              <Third />
            </Route>
            <Route path="/">
              <ErrorMessage />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
