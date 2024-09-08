import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/HeadertTemp';  
import Home from './components/Home';      
import Projects from './components/Projects'; 
import Footer from './components/Footer';  
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer /> 
    </Router>
  );
};

export default App;
