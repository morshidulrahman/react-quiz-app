import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import Quiz from "../components/pages/quiz";
import Result from "../components/pages/Result";
import Singup from "../components/pages/Singup";
import "../styles/App.css";
import Layout from "./Layout";
function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/singup" component={Singup} />
          <Route exact path="/quiz" component={Quiz} />
          <Route exact path="/result" component={Result} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
