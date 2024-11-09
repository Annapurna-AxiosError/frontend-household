import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// import Protected from "../layouts/Protected";
import FooterLayout from "../layouts/FooterLayout";

import Login from "../screens/Login"
import Logout from "../screens/Logout";

import Home from "../screens/Home";

import Campaign from "../screens/Campaign"
import Recipe from "../screens/Recipe"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      {/* <Route Component={Protected}> */}
      <Route Component={FooterLayout}>
        <Route index Component={Home} />
        <Route path="campaign" Component={Campaign} />
        <Route path="recipe" Component={Recipe} />
      </Route>
      {/* </Route> */}
      <Route path="login" Component={Login} />
      <Route path="logout" Component={Logout} />
    </Route>,
  ),
);

export default router;
