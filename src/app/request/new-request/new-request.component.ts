import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.scss']
})
export class NewRequestComponent implements OnInit {
  requestForm: FormGroup;
  constructor(private fb: FormBuilder, private translate: TranslateService, private router: Router) {
  }

  ngOnInit(): void {
    this.translate.use(this.translate.getBrowserLang());
    this.requestForm = this.fb.group({
      requestType: ['', Validators.required],
      // Should be a valid employee
      employee: ['', Validators.required],
      employeeType: ['', Validators.required],
      isCritical: ['false'],
      dateOfMove: ['', Validators.required],
    });
  }

  /**
   * Method to handle form submittal
   */
  requestFormSubmit(): void {
    console.log(this.requestForm.value);
    this.router.navigate(['/selectWorkspace'], { queryParams:
      {
        requestType: this.requestForm.get('requestType').value,
        employee: this.requestForm.get('employee').value,
        employeeType: this.requestForm.get('employeeType').value,
        isCritical: this.requestForm.get('isCritical').value,
        dateOfMove: this.requestForm.get('dateOfMove').value
      }
    });
  }

  /**
   * Helper method to determine if a field is valid
   * @param fieldName the name of the field to check
   */
  isFieldValid(fieldName: string): boolean {
    return (this.requestForm.get(fieldName).touched || this.requestForm.get(fieldName).dirty) && this.requestForm.get(fieldName).valid;
  }
  /**
   * Helper method to determine if a field is invalid
   * @param fieldName the name of the field to check
   */
  isFieldInValid(fieldName: string): boolean {
    return (this.requestForm.get(fieldName).touched || this.requestForm.get(fieldName).dirty) && !this.requestForm.get(fieldName).valid;
  }

}
