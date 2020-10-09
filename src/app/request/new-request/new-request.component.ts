import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

// TODO: Set default date to current
// TODO: Validators for fields

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.scss']
})
export class NewRequestComponent implements OnInit {
  requestForm: FormGroup;
  constructor(private _fb: FormBuilder, private _translate: TranslateService) { 
  }

  ngOnInit(): void {
    this.requestForm = this._fb.group({
      requestType: [''],
      employee: [''],
      employeeType: [''],
      isCritical: ['false'],
      dateOfMove: [''],
    });
    this._translate.use('en');
    console.log(this._translate.currentLang);
  }

  // handler for form submittal
  requestFormSubmit(): void {
    console.log(this.requestForm.value);
    this.requestForm.reset({
      requestType: '',
      employee: '',
      employeeType: '',
      isCritical: 'false',
      dateOfMove: ''
    });
  }

}
