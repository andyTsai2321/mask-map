import { Component, OnInit } from '@angular/core';
import { MainService } from '../service/main.service';
import { MapService } from '../map/map.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.scss']
})
export class LeftSideComponent implements OnInit {

  allMaskData;
  resultList = [];
  pharmacyStore = [];
  searchValue;
  errorStr;
  onDestroy = new Subject<void>();

  constructor(private mainService: MainService, public mapService: MapService) {
    this.mainService.data$.pipe(takeUntil(this.onDestroy)).subscribe(res => {
      this.allMaskData = res;
    });
  }

  ngOnInit() {
  }

  startSearch() {

    const result = [];
    this.errorStr = '';
    if (this.searchValue == '' || !this.searchValue) {
      this.errorStr = '請輸入你要尋找的區域';
      return;
    }

    this.allMaskData.forEach(item => {
      if (item.properties.address.indexOf(this.searchValue.trim()) != -1) {
        result.push(item);
      }
    });

    this.resultList = result;
  }

  goTarget(lat, lng) {
    this.mapService.changeLocation(lat, lng);
  }

  ngOnDestroy() {
    this.onDestroy.next();
    this.onDestroy.unsubscribe();
  }

}
