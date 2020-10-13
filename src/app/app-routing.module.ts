import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { NewRequestComponent } from './request/new-request/new-request.component';
import { RequestDetailsComponent } from './request/request-details/request-details.component';
import { SelectWorkspaceComponent } from './request/select-workspace/select-workspace.component';
import { RequestConfirmationComponent } from './request/request-confirmation/request-confirmation.component';

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
  },
  {
    path: 'selectWorkspace',
    component: SelectWorkspaceComponent
  },
  {
    path: 'requestDetails',
    component: RequestDetailsComponent
  },
  {
    path: 'requestConfirmation',
    component: RequestConfirmationComponent
  }
];

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
