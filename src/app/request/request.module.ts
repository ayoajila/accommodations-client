import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewRequestComponent } from './new-request/new-request.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { httpLoaderFactory } from '../shared/factories/httpLoaderFactory';
import { HttpClient } from '@angular/common/http';
import { SelectWorkspaceComponent } from './select-workspace/select-workspace.component';


@NgModule({
  declarations: [NewRequestComponent, SelectWorkspaceComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ]
})
export class RequestModule { }
