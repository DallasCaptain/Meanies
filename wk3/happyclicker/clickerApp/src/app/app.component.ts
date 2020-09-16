import { Component } from '@angular/core';
import { SocketServiceService } from './socket-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'clickerApp';
  socket:any;
  color:string;
  constructor(private _socket:SocketServiceService){}
  ngOnInit(){
    this.color = 'white'
    this.socket = this._socket.setupsocket()
    this.socket.on('welcome',(data)=>{console.log(data)})
    this.socket.on('changecolor',(data)=>{
      console.log('new color recieved: ',data)
      this.color = data.color
    })
    this.discotime()
  }


  requestColor(newcolor){
    console.log(newcolor)
    this.socket.emit('newcolor',{color:newcolor})
  }

  discotime(){
    this.socket.emit('disco',{})
  }
}
