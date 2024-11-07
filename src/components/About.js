import React from 'react';
import './About.css';


function About() {
  return (
    <div className="about-container"> {/* Add container class */}
      <h1>About Our Project</h1>
      
      <p>This project is designed to simulate educational and interactive learning experiences using modern technologies. It leverages a web server, which handles client requests and serves web pages or resources. Web servers play a crucial role in delivering content and supporting dynamic, data-driven applications by executing server-side scripts. Apache, one of the most popular open-source web servers, is widely used for managing web traffic and enabling seamless user experiences on websites and applications.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li>Interactive learning modules</li>
        <li>Simulations to enhance understanding</li>
        <li>Pre-tests and quizzes for self-assessment</li>
        <li>Detailed procedures and references</li>
      </ul>

      <h2>Our Team</h2>
      <ul className="team-list"> {/* Add team-list class */}
        <li>Atharva Donkar - Developer - 53</li>
        <li>Harsh Patil - Developer - 54</li>
        <li>Vijay Shete - Developer - 55</li>
        <li>Shweta Jadhav - Developer - 56</li>
        <li>Rutuja Hattikote - Developer - 57</li>
      </ul>

      <footer>
        <p>Thank you...!</p>
      </footer>
    </div>
  );
}

export default About;
