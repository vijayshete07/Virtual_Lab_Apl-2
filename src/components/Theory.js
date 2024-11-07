import React from 'react';
import './Theory.css'; // Optional: Create a CSS file for styling if needed

function Theory() {
  return (
    <div className="theory-content">
      <h1>Node.js Web Module Theory</h1>
      <p>
        A <strong>Web Server</strong> is a software program or hardware device that handles HTTP requests sent by HTTP clients, such as web browsers, and returns the requested web pages or resources in response. It listens for incoming requests from clients and serves them with HTML documents, images, style sheets, scripts, or any other required files.  
        <br /><br />
        Web servers play a crucial role in delivering content to users, enabling the seamless functioning of websites and applications.
        In addition to serving static content like HTML pages, many modern web servers support server-side scripting, allowing them to execute scripts (using languages like PHP, Python, or Node.js) directly on the server before sending the final output to the client.  
        In some cases, web servers work in conjunction with application servers, which handle more complex tasks, such as retrieving data from databases, processing business logic, or executing algorithms. The application server sends the computed result back to the web server, which then forwards it to the client.  
        <br />
        Web servers are an integral part of the client-server architecture and are vital for enabling dynamic, data-driven web applications.  
        <br />
        Apache web server is one of the most commonly used web servers. It is an open source project.  
        <br /><br />
        <strong>Web Application Architecture</strong>  
        <br />
        A web application can be divided into four layers:  
        <br /><br />
        <strong>Client Layer:</strong> The Client layer contains web browsers, mobile browsers, or applications that can make HTTP requests to the web server.  
        <br /><br />
        <strong>Server Layer:</strong> The Server layer contains a Web server that intercepts the requests made by clients and responds accordingly.  
        <br /><br />
        <strong>Business Layer:</strong> The business layer contains an application server, which is utilized by the web server to do the required processing. This layer interacts with the data layer via a database or some external programs.  
        <br /><br />
        <strong>Data Layer:</strong> The data layer contains databases or any source of data.  
        <br />
        Node.js web layer
      </p>
      <div className="image-container">
        {/* Adding an image from the public/images folder */}
        <img src="/images/arch.jpg" alt="Node.js Web Server" className="theory-image" />
      </div>
    </div>
  );
}

export default Theory;
