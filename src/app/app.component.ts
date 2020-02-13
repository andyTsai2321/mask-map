import { Component } from '@angular/core';
import { MaskService } from './service/mask.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public maskService: MaskService) { }

  title = 'mask-map';

  goNews(){
    window.open(
      'https://www.cdc.gov.tw/Bulletin/List/MmgtpeidAR5Ooai4-fgHzQ',
      '_blank'
    );
  }
}
