import React from 'react';

function Simulation() {
  // JavaScript code for server.js
  const serverCode = `
  var http = require('http');  
  var fs = require('fs');  
  var url = require('url');  
  var path = require('path');

  // Create a server  
  http.createServer(function (request, response) {    
     
     var pathname = url.parse(request.url).pathname;
     
     if (pathname === '/favicon.ico') {
         response.writeHead(204, { 'Content-Type': 'image/x-icon' });
         response.end();
         return;
     }

     if (pathname === '/') {
         pathname = '/index.html';
     }

     var filePath = path.join(__dirname, pathname.substr(1));

     console.log("Request for " + pathname + " received.");

     fs.readFile(filePath, function (err, data) {  
        if (err) {  
           console.log(err);  
           response.writeHead(404, {'Content-Type': 'text/html'});  
           response.write('<h1>404 Not Found</h1>');
        } else {      
             response.writeHead(200, {'Content-Type': 'text/html'});      
             response.write(data.toString());         
        }
        response.end();  
     });     
  }).listen(8081);  
  console.log('Server running at http://127.0.0.1:8081/');
  `;

  // HTML code for index.html
  const indexHtml = `
  <!DOCTYPE html>
  <html>
  <head>  
      <title>Sample Page</title>  
  </head>  
  <body>  
      <h1>Hello World!</h1>  
      <p>Welcome to the Sample Page served by the HTTP Server.</p>  
  </body>  
  </html>
  `;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Node.js Server Code (server.js)</h2>
      <pre style={{
        backgroundColor: '#f4f4f4', 
        padding: '10px', 
        borderRadius: '5px', 
        whiteSpace: 'pre-wrap',
        fontFamily: 'monospace'
      }}>
        {serverCode}
      </pre>

      <h2>HTML Content (index.html)</h2>
      <pre style={{
        backgroundColor: '#f4f4f4', 
        padding: '10px', 
        borderRadius: '5px', 
        whiteSpace: 'pre-wrap',
        fontFamily: 'monospace'
      }}>
        {indexHtml}
      </pre>

      <h2>Server Output</h2>
      <iframe 
        src= "http://127.0.0.1:8081/" 
        title="Simulation Output"
        style={{
          width: '100%', 
          height: '400px', 
          border: '1px solid #ccc', 
          marginTop: '20px'
        }}
      ></iframe>
    </div>
  );
}

export default Simulation;
