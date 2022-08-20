import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";

import logo from "../logo.svg";
import { routes } from "./routes";

export const Navigation = () => {
  return (

      <Router>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {routes.map(({ path, name }, index) => (
                <li key={index}>
                  <NavLink to={path} activeClassName="nav-active">
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Switch>
            {routes.map(({ path, component: Component }, index) => (
              <Route key={index} path={path} render={() => <Component />} />
            ))}
            <Redirect to={routes[0].path} />
          </Switch>
        </div>
      </Router>

  );
};
