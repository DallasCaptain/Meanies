//recieve http requests
const http = require('http')
const fs = require('fs')

const server = http.createServer(function(request,response){

    // respond to the request
    // http://gmail.com/funstuff
    if(request.url === '/'){
        //homepage

        response.writeHead(200, {'Content-Type':'text/html'})
        response.write('hello my very briliant class')
        response.end()

    }else if(request.url === '/kitten'){
        fs.readFile('kittens.jpg',function(errors,contents){
            response.writeHead(200, {'Content-Type':'image/*'})
            response.write(contents)
            response.end()
        })
        
    }
    else if(request.url ==='/hello'){
        fs.readFile('index.html','utf8',function(errors, contents){
            response.writeHead(200, {'Content-Type':'text/html'})
            response.write(contents)
            response.end()
        })
    }
    else{
        response.writeHead(404)
        response.end('file not found')
    }

})


server.listen(9000)
//render some html


/// function(){}    /// ()=>{}