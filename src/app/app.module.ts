import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ApicallComponent } from './apicall/apicall.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SavedRecommendationsComponent } from './saved-recommendations/saved-recommendations.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ApicallComponent,
    HeaderComponent,
    FooterComponent,
    SavedRecommendationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
