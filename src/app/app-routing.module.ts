import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './ngEvents/details/details.component';
import { NgEventComponent } from './ngEvents/ng-event/ng-event.component';
import { NgEventsComponent } from './ngEvents/ng-events/ng-events.component';

const routes: Routes = [
  {
    path:'ngEvents',
    component: NgEventsComponent,
  },
  {
    path:'ngEvents/details/:id',
    component: DetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
