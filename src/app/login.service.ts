import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './login/login.model';
import{HttpClient,HttpHeaders,HttpParams} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http :HttpClient) { }

  public LoginUserFromRemote(user:Users):Observable<any>{
   
    return this._http.post("http://localhost:8090/Login",user);
    
  }

  
  


// HTTP POST using these headers

}
