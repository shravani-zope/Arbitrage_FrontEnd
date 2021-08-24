import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApicallComponent } from './apicall/apicall.component';
import { LoginComponent } from './login/login.component';
import { SavedRecommendationsComponent } from './saved-recommendations/saved-recommendations.component';

const routes: Routes = [
  {path:'' , component:LoginComponent},
  {path:'apicall' , component:ApicallComponent},
  {path:'portfolio',component:SavedRecommendationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
