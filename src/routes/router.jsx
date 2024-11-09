import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// Import layouts
import FooterLayout from "../layouts/FooterLayout";
import HeaderLayout from "../layouts/HeaderLayout";

// Import screens
import Login from "../screens/Login";
import Logout from "../screens/Logout";

import Home from "../screens/Home";
import Campaign from "../screens/Campaign";
import Locate from "../screens/Locate";

import FoodDetails from "../screens/FoodDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="login" Component={Login} />
      <Route path="logout" Component={Logout} />

      <Route Component={HeaderLayout}>
        <Route Component={FooterLayout}>
          <Route index Component={Home} />
          <Route path="campaign" Component={Campaign} />
          <Route path="Locate" Component={Locate} />
        </Route>
        <Route path="food/:id" Component={FoodDetails} />
      </Route>
    </Route>
  )
);

export default router;
