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
