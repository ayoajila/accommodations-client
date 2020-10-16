import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'accommodations-client';

  constructor(private translate: TranslateService) {
  }

  /**
   * Sets the current translate language using first, what is stored locally from past visists
   * and if not, then defaulting to the browser's language setting.
   */
  ngOnInit(): void {
    this.translate.use(localStorage.getItem('localLang') || (this.isSupported() ? this.translate.getBrowserLang() : 'en'));
  }

  /**
   * Method used to determine if the browser's default language is supported
   */
  isSupported(): boolean {
    return this.translate.getBrowserLang() === 'en' || this.translate.getBrowserLang() === 'fr';
  }
}
