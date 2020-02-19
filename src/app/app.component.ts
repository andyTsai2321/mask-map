import { Component } from '@angular/core';
import { MainService } from './service/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public mainService: MainService) { }

  title = 'mask-map';

  goNews() {
    window.open(
      'https://www.cdc.gov.tw/Bulletin/List/MmgtpeidAR5Ooai4-fgHzQ',
      '_blank'
    );
  }

  onResize(event) {
    if (event.target.innerWidth < 1024) {
      this.mainService.isMobile = true;
    } else {
      this.mainService.isMobile = false;
    }
  }

}
