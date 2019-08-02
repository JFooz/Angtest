import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { $ } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'http://localhost:8090/api/users';
  constructor(private http: HttpClient) { }

  public getAllUser() {
    return this.http.get(this.baseUrl);
  }

  public getUserById(id: number) {
    //return this.http.get(this.baseUrl + '/' + id);
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
