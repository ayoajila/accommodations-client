import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import { GreetingService } from '../shared/services/greeting.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  greeting$ = this.greetingService.getGreeting$.pipe(catchError(e => {
    console.log(e); // TODO replace with error service
    return EMPTY;
  }));

  constructor(private greetingService: GreetingService) {
  }

  ngOnInit(): void {
  }
}
