const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http);

    app.use(express.static(__dirname+'/clickerApp/dist/clickerApp'))
    
    app.use(express.urlencoded({extended: true}));
    app.use(express.json())
    app.get('/',(req,res)=>{
        //does nothing
    })

    io.on('connection', (socket)=>{
        console.log('user connected')
        socket.emit('welcome','welcome to the server')
        socket.on('disco',(data)=>{
            
            colors = ['red','green','blue']
            time = 0
            for(let color of colors){
                setTimeout(()=>{
                    io.emit('changecolor',{color:color})
                },1000+time)
                time+=1000
            }
            

        })
        socket.on('newcolor',(data)=>{
            console.log('new color requested: ',data)
            io.emit('changecolor',data)
            setTimeout(()=>{io.emit('changecolor',{color:'red'})},3000)
        })
    })
    

http.listen(3000, ()=>{console.log('listening on port 3000')})


