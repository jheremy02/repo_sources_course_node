
// cargar libreria http

const http=require('http');

const Chance=require('chance');


const chance=new Chance();

//definr un servidor

const server = http.createServer(function(request,response){
    response.writeHead(200,{'Content-type':'text/html'})
    response.end(`wake up ${chance.name()} Hello world `)
});

//arrancar un servidor

server.listen(8080)
    console.log('servidor arrancado en http://localhost:8080');
