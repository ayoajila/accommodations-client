import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

// TODO: Set up with translate
// TODO: Set default date to current
// TODO: Validators for fields

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.scss']
})
export class NewRequestComponent implements OnInit {
  requestForm: FormGroup;
  requestTypes: string[];
  employeeTypes: string[];
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.requestForm = this.fb.group({
      requestType: [''],
      employee: [''],
      employeeType: [''],
      isCritical: ['false'],
      dateOfMove: [''],
    });
    this.requestTypes = [
      "Workplace for new hire",
      "Move from a current workspace",
      "Vacate a workspace"
    ]
    this.employeeTypes = [
      "Student",
      "Developer/Analyst",
      "Team Leader",
      "Manager",
      "Director",
      "Admin"
    ]
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
