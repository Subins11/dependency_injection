import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { OfficialDetailsComponent } from './official-details/official-details.component';
import { EmployeDetailsService } from './employe-details.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailsComponent,
    OfficialDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    EmployeDetailsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
