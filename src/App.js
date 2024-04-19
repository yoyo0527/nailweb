import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import { Beau_s, Black_line, Clubbing, Healthy_nail, Onycholysis, Onychomycosis, Whitespot } from './Contentpage';

const App = () => {
  return (
    <Router>
      {/* 路由 */}
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="white_spot" element={<Whitespot/>} />
        <Route path="Onychomycosis" element={<Onychomycosis/>} />
        <Route path="beau_s" element={<Beau_s/>} />
        <Route path="black_line" element={<Black_line/>} />
        <Route path="clubbing" element={<Clubbing/>} />
        <Route path="healthy_nail" element={<Healthy_nail/>} />
        <Route path="onycholysis" element={<Onycholysis/>} />
      </Routes>
    </Router>
  );
};

export default App;
