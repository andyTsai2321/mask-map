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
  searchValue = '';
  errorStr;
  maskFilterShow = false;
  maskOption = '全部';
  favoriteList;
  allFavoriteList;

  currentList = 'all';

  onDestroy = new Subject<void>();

  constructor(public mainService: MainService, public mapService: MapService) {
    this.mainService.data$.pipe(takeUntil(this.onDestroy)).subscribe(res => {
      this.allMaskData = res;
    });
    this.mainService.saveFavorite$.pipe(takeUntil(this.onDestroy)).subscribe(res => {
      this.favoriteList = res;
    });
  }

  ngOnInit() {
  }

  maskFilterToggle() {
    this.maskFilterShow = !this.maskFilterShow;
  }

  setMaskOption(type) {
    this.maskOption = type;
    this.maskFilterShow = false;
  }
  startSearch() {
    this.resultList = [];
    this.currentList = 'all';
    this.maskFilterShow = false;
    const result = [];
    this.errorStr = '';
    const cleanValue = this.searchValue.trim();
    if (cleanValue === '') {
      this.errorStr = '請輸入你要尋找的區域';
      return;
    }

    this.allMaskData.forEach(item => {
      if (item.properties.address.includes(cleanValue) ||
        item.properties.name.includes(cleanValue)) {
        if (this.maskOption === '全部') {
          result.push(item);
        }
        if (item.properties.mask_child !== 0 && this.maskOption === '兒童口罩') {
          result.push(item);
        }
        if (item.properties.mask_adult !== 0 && this.maskOption === '成人口罩') {
          result.push(item);
        }
      }
    });

    if (result.length === 0) {
      this.errorStr = '查無資料';
      return;
    }
    this.resultList = result;
  }

  goTarget(lat, lng) {
    this.mapService.changeLocation(lat, lng);
  }
  toggleFavorite(id) {
    event.stopPropagation();
    const index = this.favoriteList.indexOf(id);
    if (index === -1) {
      this.mainService.updateFavorite(id);
    } else {
      this.mainService.removeFavorite(index, id);
    }
  }

  favoriteCheck(id) {

    if (this.favoriteList.includes(id)) {
      return 'fas fa-star';
    } else {
      return 'far fa-star';
    }
  }

  toggleFavoriteList() {
    if (this.currentList === 'favorite') {
      this.currentList = 'all';
      this.errorStr = '';
    } else {
      this.currentList = 'favorite';
      this.favoriteList.length === 0 ? this.errorStr = '無關注的藥局' : this.errorStr = '';
    }
  }

  showFavorite() {
    this.allFavoriteList = this.allMaskData.filter(v => this.favoriteList.includes(v.properties.id));
    this.toggleFavoriteList();
  }

  ngOnDestroy() {
    this.onDestroy.next();
    this.onDestroy.unsubscribe();
  }

}
