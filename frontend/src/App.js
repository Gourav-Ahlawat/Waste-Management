import Login from "./components/login";
import AdminLogin from "./components/adminLogin";
import Driver from "./pages/driver";
import ManagerOps from "./pages/ManagerOps";
import ManagerFin from "./pages/ManagerFin";
import LandingPage from "./pages/landingPage";
import AdminHome from "./pages/adminhome";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="flex w-full h-screen">
        <div className="flex w-full items-center justify-center">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/adminLogin" element={<AdminLogin />} />
            <Route path="/managerOps" element={<ManagerOps />} />
            <Route path="/managerFin" element={<ManagerFin />} />
            <Route path="/driver" element={<Driver />} />
            <Route path="/admin/about" element={<AdminHome />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
