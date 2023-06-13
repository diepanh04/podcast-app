import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Container from '@mui/material/Container';
import Home from './Pages/Home.js';
import Dashboard from './Pages/Dashboard.js';
import Signin from './Pages/Signin.js';
import Register from './Pages/Register.js';

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: '#EDE4E0' }}>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;