import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './login/login.model';
import { savedShares } from './saved-recommendations/saved-recommendations.model';

@Injectable({
  providedIn: 'root'
})
export class SavedRecommendationsService {

 
  constructor(private _http :HttpClient) { }

  public displayPortfolio(share:savedShares):Observable<any>{
   

    return this._http.get("http://localhost:8090/portfolio/"+share.user_id);
    

  }
  

}
