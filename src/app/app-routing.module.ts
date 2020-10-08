import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { NewRequestComponent } from './request/new-request/new-request.component';

const mainRoutes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: 'newRequest',
    component: NewRequestComponent
  }
]

const langRoutes: Routes = [
  {
    path: 'en',
    children: mainRoutes,
  },
  {
    path: 'fr',
    children: mainRoutes,
  },
  {
    path: '',
    children: mainRoutes,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(langRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
