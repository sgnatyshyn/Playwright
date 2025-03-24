//hometask6.1
const http = require('http');

const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/plain');
    
    if (request.url === '/') {
        response.writeHead(200);
        response.end('Welcome to the new Server!');
    } else if (request.url === '/about') {
        response.writeHead(200);
        response.end('This is a simple http Node.js server');
    } else if (request.url === '/contact') {
        response.writeHead(200);
        response.end('Contact us at contact@newserver.com');
    } else {
        response.writeHead(404);
        response.end('Page not found!');
    }
});

const PORT = 5000; 
server.listen(PORT, '127.0.0.1', () => {
    console.log(`Server is running at http://127.0.0.1:${PORT}`);
});

