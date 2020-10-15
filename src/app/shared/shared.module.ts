import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { httpLoaderFactory } from './factories/httpLoaderFactory';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  exports: [
    CommonModule,
    TranslateModule
  ]
})
export class SharedModule { }
