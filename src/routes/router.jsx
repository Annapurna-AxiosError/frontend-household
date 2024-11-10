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
import GetStarted from "../screens/GetStarted";

import Home from "../screens/Home";
import Campaign from "../screens/Campaign";
import Announcement from "../screens/Announcement";

import Locate from "../screens/Locate";

import FoodDetails from "../screens/FoodDetails";

import Callback from "../screens/Callback";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="callback" Component={Callback} />
      <Route path="login" Component={Login} />
      <Route path="logout" Component={Logout} />

      <Route Component={HeaderLayout}>
        <Route Component={FooterLayout}>
          <Route index Component={Home} />
          <Route path="campaign" Component={Campaign} />
          <Route path="announcement" Component={Announcement} />
        </Route>
        <Route path="locate" Component={Locate} />
        <Route path="get-started" Component={GetStarted} />
        <Route path="food/:id" Component={FoodDetails} />
      </Route>
    </Route>
  )
);

export default router;
