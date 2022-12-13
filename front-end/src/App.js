import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./user/pages/User";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/navigation/MainNavigation";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route exact path="/" element={<User />} />
          <Route path="/places/new" element={<NewPlace />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
