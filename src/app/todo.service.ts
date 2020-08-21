import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './todo.module';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
apiUrl = "";
  constructor(private _http:HttpClient) { }

  getUser(event) {
    this.apiUrl = event+"/issues";
    return this._http.get<User[]>(this.apiUrl);
  }
  getRepo(event) {
    return this._http.get<User[]>(event);
  }
  getComments(val) {
    return this._http.get<User[]>(val);
  }
}
