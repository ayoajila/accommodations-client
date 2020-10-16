import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.scss']
})
export class NewRequestComponent implements OnInit {
  requestForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.requestForm = this.fb.group({
      requestType: ['', Validators.required],
      // Should be a valid employee
      employee: ['', Validators.required],
      employeeType: ['', Validators.required],
      isCritical: ['false'],
      dateOfMove: ['', Validators.required],
    });
    this.route.queryParams.subscribe(params => {
      if (params.requestType !== undefined) {
        this.requestForm.get('requestType').setValue(params.requestType);
        this.requestForm.get('employee').setValue(params.employee);
        this.requestForm.get('employeeType').setValue(params.employeeType);
        this.requestForm.get('isCritical').setValue(params.isCritical);
        this.requestForm.get('dateOfMove').setValue(params.dateOfMove);
      } else {
        this.resetForm();
      }
    });
  }

  resetForm(): void {
    this.requestForm.reset({
      requestType: '',
      employee: '',
      employeeType: '',
      isCritical: 'false',
      dateOfMove: ''
    });
  }

  /**
   * Method to handle form submittal
   */
  requestFormSubmit(): void {
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
