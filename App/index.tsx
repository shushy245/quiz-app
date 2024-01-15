import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import { Quiz, Score } from "../src/routes";
import { ScoreProvider } from "../src/providers/ScoreProvider";

const App = () => (
  <ScoreProvider>
    <BrowserRouter>
      <Switch>
        <Route exact path="/quiz" component={Quiz} />
        <Route exact path="/score" component={Score} />
        <Redirect to="/quiz" />
      </Switch>
    </BrowserRouter>
  </ScoreProvider>
);

export default App;
