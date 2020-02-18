import { Component, OnInit } from '@angular/core';
import { MainService } from '../service/main.service';
import { MapService } from './map.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  allData;
  allMaskData;
  autoTimer;
  onDestroy = new Subject<void>();

  constructor(private mainService: MainService, public mapService: MapService) {
    this.mainService.data$.pipe(takeUntil(this.onDestroy)).subscribe(res => {
      this.allMaskData = res;
      this.mapService.generateData(res);
      this.mainService.loading = false;
    });
  }

  ngOnInit() {
    this.mapService.getUserLocation();
  }

  ngOnDestroy() {
    this.onDestroy.next();
    this.onDestroy.unsubscribe();
  }

}

