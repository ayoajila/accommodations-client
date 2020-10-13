import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RequestModule } from './request/request.module';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { httpLoaderFactory } from './shared/factories/httpLoaderFactory';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { ReplaceWithSpacePipe } from './shared/pipes/replace-with-space.pipe';



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ReplaceWithSpacePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RequestModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
