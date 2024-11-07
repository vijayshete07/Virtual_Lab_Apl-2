import React from 'react';
import './Home.css'; // Import the CSS file
import HeroSection from './HeroSection'; // Import HeroSection here

function Home() {
  return (
    <div className="container">
      <HeroSection /> {/* Use HeroSection inside Home */}
      <h1>Welcome to Our Site..</h1>
      <p>
        A Web Server is a software program or hardware device that handles HTTP requests sent by HTTP clients, such as web browsers, and returns the requested web pages or resources in response. It listens for incoming requests from clients and serves them with HTML documents, images, style sheets, scripts, or any other required files.
      </p>

      {/* New section container for Features, Benefits, and How MERN Works */}
      <div className="section-container">
        <section>
          <h2>Features</h2>
          <ul>
            <li><strong>Interactive Learning:</strong> Engage with interactive content that makes learning enjoyable and effective.</li>
            <li><strong>Personalized Courses:</strong> Tailor your learning path with courses that fit your interests and career goals.</li>
            <li><strong>Expert Instructors:</strong> Learn from industry experts and experienced educators dedicated to your success.</li>
            <li><strong>Community Support:</strong> Join a vibrant community of learners to share ideas, ask questions, and collaborate.</li>
          </ul>
        </section>

        <section>
          <h2>Benefits</h2>
          <p>
            By choosing EduQuest, you will benefit from:
          </p>
          <ul>
            <li>Flexible learning schedules that fit your lifestyle.</li>
            <li>Access to a wealth of resources, including videos, articles, and quizzes.</li>
            <li>Certification upon completion of courses to boost your resume.</li>
          </ul>
        </section>

        <section>
          <h2>About MERN Stack</h2>
          <p>
            The MERN stack is a popular collection of technologies used to develop full-stack web applications. It includes the following components:
          </p>
          <ul>
            <li><strong>MongoDB:</strong> A NoSQL database used to store application data in a flexible, JSON-like format. It's scalable and performs well with large data sets.</li>
            <li><strong>Express.js:</strong> A web application framework for Node.js, used to build backend APIs and manage routes effectively. It simplifies the creation of server-side applications.</li>
            <li><strong>React.js:</strong> A JavaScript library for building user interfaces. React allows for the development of dynamic, single-page applications with a component-based architecture.</li>
            <li><strong>Node.js:</strong> A JavaScript runtime built on Chrome's V8 engine that allows you to run JavaScript on the server-side. It handles server logic and interacts with databases.</li>
          </ul>
          <p>
            With MERN, developers can use JavaScript for both the frontend and backend, making the development process smoother and more efficient. The stack allows for building scalable, maintainable, and high-performance applications.
          </p>
        </section>
      </div>

      <footer>
        <p>Join us today and start your learning journey with EduQuest!</p>
      </footer>
    </div>
  );
}

export default Home;
