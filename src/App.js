import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import { Beau_s, Black_line, Clubbing, Healthy_nail, Onycholysis, Onychomycosis, Whitespot } from './Contentpage';

const App = () => {
  return (
    <Router>
      {/* 路由 */}
      <Routes>
        <Route path="/nailweb" element={<Homepage/>} />
        <Route path="/nailweb/white_spot" element={<Whitespot/>} />
        <Route path="/nailweb/Onychomycosis" element={<Onychomycosis/>} />
        <Route path="/nailweb/beau_s" element={<Beau_s/>} />
        <Route path="/nailweb/black_line" element={<Black_line/>} />
        <Route path="/nailweb/clubbing" element={<Clubbing/>} />
        <Route path="/nailweb/healthy_nail" element={<Healthy_nail/>} />
        <Route path="/nailweb/onycholysis" element={<Onycholysis/>} />
      </Routes>
    </Router>
  );
};

export default App;
