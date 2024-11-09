import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// import Protected from "../layouts/Protected";
import FooterLayout from "../layouts/FooterLayout";

import Login from "../screen/Login";
import Logout from "../screen/Logout";

import Home from "../screen/Home";

import Gupshup from "../pages/Gupshup";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      {/* <Route Component={Protected}> */}
      <Route Component={FooterLayout}>
        <Route index Component={Home} />
        <Route path="campaign" Component={SpaceList} />
        <Route path="spaces/create" Component={SpaceForm} />
        <Route path="gupshup" Component={Gupshup} />
      </Route>
      <Route path="spaces/:id" Component={SpaceChat} />
      {/* </Route> */}
      <Route path="login" Component={Login} />
      <Route path="logout" Component={Logout} />
    </Route>,
  ),
);

export default router;
