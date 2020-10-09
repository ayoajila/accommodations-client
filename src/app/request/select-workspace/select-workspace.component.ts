import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-select-workspace',
  templateUrl: './select-workspace.component.html',
  styleUrls: ['./select-workspace.component.scss']
})
export class SelectWorkspaceComponent implements OnInit {
  filterForm: FormGroup;
  constructor(private fb: FormBuilder, private translate: TranslateService) { }

  ngOnInit(): void {
    this.translate.use(this.translate.getBrowserLang());
    this.filterForm = this.fb.group({
      workspaceType: (''),
      workspaceFloor: ('')
    });
  }

  /**
   * Method to filter the search results based on form data submitted
   */
  filterSearch(): void {
    console.log(this.filterForm.value);
  }

}
