import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import {Home, AdminHome, UserHome} from './pages/export';
import {Navbar} from './components/export';

function App() {
  return (
    <div className="App bg-slate-600">
    {/* <Navbar /> */}
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<AdminHome />} />
            <Route path="/user" element={<UserHome />} />
          </Routes>
        </Router>

    </div>
  );
}

export default App;
