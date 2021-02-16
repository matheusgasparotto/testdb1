import { Switch, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Game from "../Pages/Game";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/game" component={Game} />
    </Switch>
  );
};

export default Routes;
