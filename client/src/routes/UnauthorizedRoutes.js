import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../containers/Home.js';
import Dashboard from '../containers/Dashboard.js'
import Signin from '../containers/auth/Signin.js';
import Register from '../containers/auth/Register.js';
import ChannelsByGenre from '../containers/show/ChannelsByGenre.js';
import AllGenres from '../containers/show/AllGenres.js';
import UnauthorizedNavBar from '../components/unauthorized/UnAuthorizedNavBar.js';

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