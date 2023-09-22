import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../containers/Home.js';
import Dashboard from '../containers/Dashboard.js'
import ChannelsByGenre from '../containers/show/ChannelsByGenre.js';
import AllGenres from '../containers/show/AllGenres.js';
import AuthorizedNavBar from '../components/authorized/AuthorizedNavBar.js';
import MyProfile from '../components/authorized/MyProfile.js';
import FavouriteList from '../containers/auth/FavouriteList.js';
import EpisodesByChannel from '../containers/show/EpisodesByChannel';
import { LIGHT_BEIGE } from '../components/shared/Constant.js';

export default function AuthorizedRoutes() {
  return (
    <Router>
      <div style={{ backgroundColor: LIGHT_BEIGE }}>
        <AuthorizedNavBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/genres" element={<AllGenres />} />
            <Route path="/favourites" element={<FavouriteList />}/>
            <Route path="/profile" element={<MyProfile />}/>
            <Route path="/channels/:channel" element={<EpisodesByChannel />} />
            <Route path="/genres/:genre" element={<ChannelsByGenre />} />
          </Routes>
        </AuthorizedNavBar>
      </div>
    </Router>
  )
}

