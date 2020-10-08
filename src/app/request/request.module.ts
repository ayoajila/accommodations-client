import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewRequestComponent } from './new-request/new-request.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [NewRequestComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class RequestModule { }
