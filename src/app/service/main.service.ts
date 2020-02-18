import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MainService {

  private maskUrl = 'https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json?fbclid=IwAR14CXKVx8AwxOzt1stzo8GVkhT11ek2XpyqFzPhfC695Wf50AFPonuQZ3Q';

  private data = new BehaviorSubject([]);
  data$ = this.data.asObservable();
  isMobile: boolean;
  leftSideOpen: boolean;

  autoTimer;

  updateTime = Date.now();
  loading = false;

  constructor(private http: HttpClient) {
    this.getData();

    if (document.body.clientWidth < 600) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }

  getData() {
    this.http.get(this.maskUrl).subscribe(res => {
      this.updateTime = Date.now();
      this.loading = true;
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

  HandleError(e: any): void {
    this.loading = false;
    alert(e.error.error);
  }
}
