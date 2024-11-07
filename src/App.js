import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'; 
import About from './components/About'; // Single import of About
import LeftDrawer from './components/LeftDrawer'; // Import the drawer component
import './App.css';
import Aim from './components/Aim'; // Import Aim component
import Theory from './components/Theory';
import Pretest from './components/Pretest'; // Import the Quiz component
import Procedure from './components/Procedure';
import References from './components/References';
import Posttest from './components/Posttest';

// Feedback related components
import Feedback from './components/Feedback'; // Import Feedback component
import FeedbackForm from './components/FeedbackForm'; // Import FeedbackForm component
import Simulation from "./components/Simulation";

function App() {
  return (
    <Router>
      <div className="App">
        <LeftDrawer />
        <div className="main-content">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} /> {/* Single route for About */}
              <Route path="/aim" element={<Aim />} /> {/* Route for Aim component */}
              <Route path="/theory" element={<Theory />} />
              <Route path="/pretest" element={<Pretest />} /> {/* Add this line for the quiz */}
              <Route path="/procedure" element={<Procedure />} />
              <Route path="/references" element={<References />} />
              <Route path="/simulation" element={<Simulation />} />
              <Route path="/posttest" element={<Posttest />} />

              
              {/* Feedback Routes */}
              <Route path="/feedback" element={<Feedback />} /> {/* Feedback page */}
              <Route path="/feedback-form" element={<FeedbackForm />} /> {/* Feedback form page */}
            </Routes>
          </main>
           {/* Footer at the bottom */}
        </div>
      </div>
    </Router>
  );
}

export default App;
