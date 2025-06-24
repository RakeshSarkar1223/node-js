const http = require('http');

const server = http.createServer((req,res) => {
    // res.writeHead(200, {'content-type' : 'text/html'});
    // console.log(req);
    // res.write("<h1>This is my first page. I am learning Node.js</h1>");
    // res.end();
    if(req.url === '/'){
        res.end("Hello this is our home page.")
    }
    else if(req.url === '/about'){
        res.end("Hello  this  is our about page.")
    }
    else {
        res.end(`
            <h1>404 page not found</h1>
            <a href="/" >Home</a>
        `)
    }
})

server.listen(5000);