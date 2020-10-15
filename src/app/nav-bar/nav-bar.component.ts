import { Component, OnInit } from '@angular/core';
import { GreetingService } from '../shared/services/greeting.service';
import { TranslateService } from '@ngx-translate/core';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  greeting$ = this.greetingService.getGreeting$.pipe(catchError(e => {
    console.log(e) // TODO replace with error service
    return EMPTY;
  }))

  constructor(private greetingService: GreetingService, private _translate: TranslateService) { 
    this._translate.setDefaultLang('en');
    this._translate.use('en');
  }

  ngOnInit(): void {
  }

  /**
   * Triggered on button click, swaps language between english and french.
   */
  swapLanguage(): void {
    if (this._translate.currentLang === 'en') {
      this._translate.use('fr');
    } else {
      this._translate.use('en');
    }
  }

}
