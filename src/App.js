import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Graph from "./Components/Graph/Graph";
import Header from "./Components/Header/Header";
const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/graph" component={Graph} />
        </Switch>
      </div>
    </Router>
  );
};
export default App;
