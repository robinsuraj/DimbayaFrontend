import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) { }

  register(data):Observable<any>{
    return this.http.post("http://3.136.169.121:7000",data);
  }

  payment(data):Observable<any>{
    return this.http.post("http://3.136.169.121:7000/api/payment",data);
  }

  paypal(data):Observable<any>{
   const headers = new HttpHeaders({'authorization':localStorage.getItem('token')});
    return this.http.post("http://3.136.169.121:7000/api/payment/paypal",data,{headers:headers});
  }

  //login user API

  loginUser(data):Observable<any>{
    return this.http.post("http://3.136.169.121:7000/api/users",data);
  }

  loginUserVerify(data):Observable<any>{
    return this.http.post("http://3.136.169.121:7000/api/users/verify",data);
  }

  sendToRestApiMethod(userData) : Observable<any> {
   return this.http.post("http://ec2-3-136-169-121.us-east-2.compute.amazonaws.com:7000/api/users/social",
       {   userData: userData     }
    )
  }
  
}
