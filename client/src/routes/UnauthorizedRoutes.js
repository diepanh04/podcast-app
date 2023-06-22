import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home.js';
import Dashboard from '../Pages/Dashboard.js'
import Signin from '../Pages/Signin.js';
import Register from '../Pages/Register.js';
import ChannelsByGenre from '../Pages/ChannelsByGenre.js';
import AllGenres from '../Pages/AllGenres.js';
import UnauthorizedNavBar from '../Components/UnAuthorizedNavBar.js';

export default function UnauthorizedRoutes() {
  return (
    <Router>
      <div style={{ backgroundColor: '#EDE4E0' }}>
        <UnauthorizedNavBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/register" element={<Register />} />
            <Route path="/:genre" element={<ChannelsByGenre />} />
            <Route path="/genres" element={<AllGenres />} />
          </Routes>
        </UnauthorizedNavBar>
      </div>
    </Router>
  )
}