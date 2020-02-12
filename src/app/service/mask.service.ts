import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; //加入http類別

@Injectable()
export class MaskService {
  private heroesUrl = 'https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json?fbclid=IwAR14CXKVx8AwxOzt1stzo8GVkhT11ek2XpyqFzPhfC695Wf50AFPonuQZ3Q';
  constructor(private http: HttpClient) { }

  getMaskApi() {
    return this.http.get(this.heroesUrl);
  }

  HandleError(e: any): void {
    // console.log(e);
    alert(e.error.error);
  }
}
