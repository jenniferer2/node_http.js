const http = require ('http');
//it makes http required 

const server = http.createServer((req,res) => {
if (req.url === '/') {
    res.write('Hello world');
    res.write("This is our first server");
    res.end();
}
if (req.url === '/api/courses') {
    res.write(JSON.stringify([1,2,3]));
    res.write('This is a list offerings');
    res.write(' at BTHS');
    res.end();
}
});

server.listen(3000); 
console.log("Listening on port 3000 ..."); 




