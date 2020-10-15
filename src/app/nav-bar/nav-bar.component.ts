import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit(): void { }

  /**
   * Triggered on button click, swaps language between english and french.
   */
  swapLanguage(): void {
    if (this.translate.currentLang === 'en') {
      this.translate.use('fr');
      localStorage.setItem('localLang', 'fr');
    } else {
      this.translate.use('en');
      localStorage.setItem('localLang', 'en');
    }
  }

}
