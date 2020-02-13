import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class MaskService {
  private heroesUrl = 'https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json?fbclid=IwAR14CXKVx8AwxOzt1stzo8GVkhT11ek2XpyqFzPhfC695Wf50AFPonuQZ3Q';
  constructor(private http: HttpClient) { }

  updateTime = Date.now();
  loading: boolean;
  getMaskServiceData() {
    this.updateTime = Date.now();
    this.loading = true;
    return this.http.get(this.heroesUrl);
  }

  HandleError(e: any): void {
    this.loading = false;
    alert(e.error.error);
  }
}
