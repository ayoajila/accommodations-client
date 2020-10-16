import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.scss']
})
export class RequestDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  /**
   * TODO: Send request to the backend service and retrieve reference number.
   */
  submitRequest(): void{ }

}
