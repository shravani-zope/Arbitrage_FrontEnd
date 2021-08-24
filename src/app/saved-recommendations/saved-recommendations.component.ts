import { Component, OnInit } from '@angular/core';
import { Users } from '../login/login.model';
import { SavedRecommendationsService } from '../saved-recommendations.service';
import { savedShares } from './saved-recommendations.model';

@Component({
  selector: 'app-saved-recommendations',
  templateUrl: './saved-recommendations.component.html',
  styleUrls: ['./saved-recommendations.component.css']
})
export class SavedRecommendationsComponent implements OnInit {

  constructor(private _service : SavedRecommendationsService) { }

  ngOnInit(): void {
  }
  share:savedShares;
  msg="";
  displaymyportfolio(){
    this._service.displayPortfolio(this.share).subscribe(
      data => {
        console.log("Portfolio Displayed");
       
        
      },
      error => {
        console.log("error");
        // this.msg="Bad credentials, please enter valid username and password!";
      }
    );
  }



}
