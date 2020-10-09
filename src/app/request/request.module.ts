import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewRequestComponent } from './new-request/new-request.component';
import { ReactiveFormsModule } from '@angular/forms';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { httpLoaderFactory } from '../shared/factories/httpLoaderFactory';
import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [NewRequestComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
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
