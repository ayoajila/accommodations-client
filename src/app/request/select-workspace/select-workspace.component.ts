import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select-workspace',
  templateUrl: './select-workspace.component.html',
  styleUrls: ['./select-workspace.component.scss']
})
export class SelectWorkspaceComponent implements OnInit {
  filterForm: FormGroup;
  constructor(private fb: FormBuilder) { }

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
