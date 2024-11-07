import React from 'react';
import { Typography, Link } from '@mui/material';
import './References.css';

function Reference() {
  return (
    <div className="reference-container">
      <Typography variant="h5"  style={{ fontSize: '2rem' }}>
        <strong>References</strong>
      </Typography>

      <Typography variant="body1" gutterBottom>
        For more information on Node.js web modules, you can visit these helpful articles:
      </Typography>

      <ul className="reference-list">
        <li>
          <Link href="https://www.javatpoint.com/nodejs-web-modules" target="_blank" rel="noopener noreferrer" className="reference-link">
            Node.js Web Modules - Javatpoint
          </Link>
        </li>
        <li>
          <Link href="https://www.tutorialspoint.com/nodejs/nodejs_web_module.htm" target="_blank" rel="noopener noreferrer" className="reference-link">
            Node.js Web Modules - Tutorialspoint
          </Link>
        </li>
        <li>
          <Link href="https://www.geeksforgeeks.org/introduction-to-node-js-web-server" target="_blank" rel="noopener noreferrer" className="reference-link">
            Introduction to Node.js Web Server - GeeksforGeeks
          </Link>
        </li>
        <li>
          <Link href="https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction" target="_blank" rel="noopener noreferrer" className="reference-link">
            Anatomy of an HTTP Transaction - Node.js Docs
          </Link>
        </li>
        <li>
          <Link href="https://www.w3schools.com/nodejs/nodejs_intro.asp" target="_blank" rel="noopener noreferrer" className="reference-link">
            Node.js Introduction - W3Schools
          </Link>
        </li>
        <li>
          <Link href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Node_server_without_framework" target="_blank" rel="noopener noreferrer" className="reference-link">
            Node Server Without Framework - MDN Web Docs
          </Link>
        </li>
        <li>
          <Link href="https://expressjs.com/en/starter/hello-world.html" target="_blank" rel="noopener noreferrer" className="reference-link">
            Hello World with Express - Express.js Documentation
          </Link>
        </li>
        <li>
          <Link href="https://nodesource.com/blog/understanding-module-exports-and-exports-in-node-js" target="_blank" rel="noopener noreferrer" className="reference-link">
            Understanding Module Exports - NodeSource Blog
          </Link>
        </li>
        <li>
          <Link href="https://www.digitalocean.com/community/tutorials/how-to-create-a-web-server-in-node-js-with-the-http-module" target="_blank" rel="noopener noreferrer" className="reference-link">
            Creating a Web Server in Node.js - DigitalOcean
          </Link>
        </li>
        <li>
          <Link href="https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4" target="_blank" rel="noopener noreferrer" className="reference-link">
            Build a RESTful API Using Node and Express - Scotch.io
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Reference;
