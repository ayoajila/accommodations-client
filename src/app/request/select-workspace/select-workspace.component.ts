import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-workspace',
  templateUrl: './select-workspace.component.html',
  styleUrls: ['./select-workspace.component.scss']
})
export class SelectWorkspaceComponent implements OnInit {
  filterForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.filterForm = this.fb.group({
      workspaceType: ['all'],
      workspaceFloor: ['all']
    });
  }

  /**
   * Method to filter the search results based on form data submitted
   */
  filterSearch(): void {
    console.log(this.filterForm.value);
  }
}
