import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NgEventsComponent } from './ngEvents/ng-events/ng-events.component';
import { NgEventComponent } from './ngEvents/ng-event/ng-event.component';
import { DetailsComponent } from './ngEvents/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NgEventsComponent,
    NgEventComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
