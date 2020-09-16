import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
@Injectable({
  providedIn: 'root'
})
export class SocketServiceService {
  //socket: any;

  constructor() { }

  setupsocket(){
    return io('http://localhost:3000')
  }
}
