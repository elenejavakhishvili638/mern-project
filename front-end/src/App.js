import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import User from "./user/pages/User";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/navigation/MainNavigation";
import UserPlace from "./places/pages/UserPlace";
import UpdatePlace from "./places/pages/UpdatePlace";
import Auth from "./user/pages/Auth";
import { useAuthContext } from "../src/shared/context/auth-context";

function App() {
  const { isLoggedIn } = useAuthContext();

  console.log(isLoggedIn);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Routes>
        <Route exact path="/" element={<User />} />
        <Route path="/:userId/places" element={<UserPlace />} />
        <Route path="/places/new" element={<NewPlace />} />
        <Route path="/places/:placeId" element={<UpdatePlace />} />
        <Route path="/auth" element={<Navigate replace to="/" />} />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route exact path="/" element={<User />} />
        <Route path="/:userId/places" element={<UserPlace />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Navigate replace to="/auth" />} />
      </Routes>
    );
  }

  return (
    <Router>
      <MainNavigation />
      <main>{routes}</main>
    </Router>
  );
}

export default App;

{
  /* <Route exact path="/" element={<User />} /> */
}
{
  /* <Route path="/places/new" element={<NewPlace />} /> */
}
{
  /* <Route path="/:userId/places" element={<UserPlace />} /> */
}
{
  /* Routing order matters if we make past through the new place check after that we get to update place  */
}
{
  /* <Route path="/places/new" element={<NewPlace />} />
<Route path="/places/:placeId" element={<UpdatePlace />} />
<Route path="/auth" element={<Auth />} /> */
}
