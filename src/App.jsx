import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Constants/Header.jsx';  // Import Header component
import Footer from './Constants/Footer.jsx';
import HomePage from './Home/HomePage.jsx';  // Import the HomePage component
import AboutPage from './About/AboutPage';  // Example for another page (e.g., About)
import SEPage from './SE/SEPage.jsx';
import ContactPage from './Contact/ContactPage.jsx';

function App() {
  return (
    <Router> {/* Wrap the entire app in Router */}
      <Header /> {/* Your Header with navigation links */}
      <Routes> {/* Define your routes */}
        <Route path="/" element={<HomePage />} /> {/* Home route */}
        <Route path="/home" element={<HomePage />} /> {/* Home route */}
        <Route path="/about" element={<AboutPage />} /> {/* About route */}
        <Route path="/skills-and-experience" element={<SEPage />} /> {/* Skills and Experience route */}
        <Route path="/contact" element={<ContactPage />} /> {/* Contact route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
