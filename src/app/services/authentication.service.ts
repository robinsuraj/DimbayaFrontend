import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) { }
  
  register(data):Observable<any>{
    return this.http.post("http://localhost:466",data);
  }

  payment(data):Observable<any>{
    return this.http.post("http://localhost:7000/api/payment",data);
  }
}
