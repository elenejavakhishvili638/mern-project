import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import User from "./user/pages/User";
import NewPlace from "./places/pages/NewPlace";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<User />} />
        <Route path="/places/new" element={<NewPlace />} />
      </Routes>
    </Router>
  );
}

export default App;
