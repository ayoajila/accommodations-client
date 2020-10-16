import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app-routing.module';
import { NewRequestComponent } from './new-request/new-request.component';
import { SelectWorkspaceComponent } from './select-workspace/select-workspace.component';
import { RequestDetailsComponent } from './request-details/request-details.component';
import { RequestConfirmationComponent } from './request-confirmation/request-confirmation.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [NewRequestComponent, SelectWorkspaceComponent, RequestDetailsComponent, RequestConfirmationComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule
  ]
})
export class RequestModule { }
