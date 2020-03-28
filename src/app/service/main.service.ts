import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MainService {

  private maskUrl = 'https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json?fbclid=IwAR14CXKVx8AwxOzt1stzo8GVkhT11ek2XpyqFzPhfC695Wf50AFPonuQZ3Q';

  private data = new BehaviorSubject([]);
  data$ = this.data.asObservable();

  private saveFavorite = new BehaviorSubject([]);
  saveFavorite$ = this.saveFavorite.asObservable();

  isMobile: boolean;
  leftSideOpen: boolean;

  autoTimer;

  updateTime = Date.now();
  loading = true;

  constructor(private http: HttpClient) { }

  getData() {
    this.http.get(this.maskUrl).subscribe(res => {
      this.loading = true;
      this.updateTime = Date.now();
      this.data.next(res['features']);
      this.autoRefresh();
    },
      (error: HttpErrorResponse) => this.HandleError(error)
    );
  }

  autoRefresh() {
    clearTimeout(this.autoTimer);
    let that = this;
    this.autoTimer = setTimeout(function () {
      // that.autoRefresh();
      that.refreshMaskData();
      // 10分鐘更新一次
    }, 600000);
  }

  refreshMaskData() {
    this.getData();
  }

  toggleLeftSide() {
    if (this.isMobile) {
      this.leftSideOpen = !this.leftSideOpen;
    }
  }


  // favorite cookie start
  getFavoriteCookie() {
    const tmp = this.getCookie('Favorite_');
    const arr = tmp.split('@');
    const newArray = [];
    console.log(tmp)
    for (let i = 0; i < arr.length; i++) {
      const key = arr[i];
      if (key) {
        newArray.push(key);
      }
    }
    this.saveFavorite.next(newArray);
  }

  getCookie(name) {
    const saveName = name + '=';
    const allCookieArray = document.cookie.split(';');
    let result;
    allCookieArray.forEach(item => {

      while (item.charAt(0) === ' ') {
        item = item.substring(1);
      }

      // 找到favorite cookie
      if (item.indexOf(saveName) === 0) {
        // 只取id部分
        result = item.substring(saveName.length, item.length);
      }

    });

    // for (var i = 0; i < allCookieArray.length; i++) {
    //   let item= allCookieArray[i];

    //   while (item.charAt(0) === ' ') {
    //     item = item.substring(1);
    //   }

    //   // 找到favorite cookie
    //   if (item.includes(saveName)) {
    //     // 只取id部分
    //     return item.substring(saveName.length, c.length);
    //   }

    // }

    // return '';
    return result ? result : '';
  }

  setCookie(key, value) {
    document.cookie = key + '=' + value;
  }

  updateFavorite(id) {
    const favoriteArray = this.saveFavorite.value;

    if (!favoriteArray.includes(id)) {
      favoriteArray.push(id);
      this.saveFavorite.next(favoriteArray);
      this.updateFavoriteCookie();
    }
  }

  updateFavoriteCookie() {
    let str = '';
    this.saveFavorite.value.forEach((item) => {
      str += item + '@';
    });
    this.setCookie('Favorite_', str);
  }

  removeFavorite(index, id) {
    const favoriteArray = this.saveFavorite.value;
    if (favoriteArray.includes(id)) {
      this.saveFavorite.value.splice(index, 1);
      this.saveFavorite.next(favoriteArray);
      this.updateFavoriteCookie();
    }
  }
  // favorite cookie end

  HandleError(e: any): void {
    this.loading = false;
    alert(e.error.error);
  }
}
