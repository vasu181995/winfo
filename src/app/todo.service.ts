import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './todo.module';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
apiUrl = "https://api.github.com/repos/vasu181995/test/issues";
repoUrl = "https://api.github.com/repos/vasu181995/test";
commentUrl = "https://api.github.com/repos/vasu181995/test/issues/4/comments";
  constructor(private _http:HttpClient) { }

  getUser() {
    return this._http.get<User[]>(this.apiUrl);
  }
  getRepo() {
    return this._http.get<User[]>(this.repoUrl);
  }
  getComments(val) {
    return this._http.get<User[]>(val);
  }
}
