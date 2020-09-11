import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getData(){
    return this._http.get('/api/')
    
  }

  updateTable(table){
    return this._http.put('/api/table/'+table.id,table)
  }

}
