import { Switch, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Game from "../Pages/Game";
import RankingPage from "../Pages/RankingPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/game" component={Game} />
      <Route exact path="/ranking" component={RankingPage} />
    </Switch>
  );
};

export default Routes;
