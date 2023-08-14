import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomePage from './Components/HomePage';
import MatrimonialProfiles from './Components/MatrimonialProfiles';
import CommunitySection from './Components/CommunitySection';
import BlogPage from './Components/BlogPage';
import ContactPage from './Components/ContactPage';
import './App.css';
function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <HomePage/>
        <Routes>
          <Route path="/" exact component={HomePage} />
          <Route path="/matrimonial" component={MatrimonialProfiles} />
          <Route path="/community" component={CommunitySection} />
          <Route path="/blog" component={BlogPage} />
          <Route path="/contact" component={ContactPage} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
