import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  searchList = [];
  pharmacyStore = [];
  searchValue;
  errorStr;
  constructor() { }

  ngOnInit() {
  }
  startSearch() {
    if (this.searchValue == '' || !this.searchValue) {
      this.errorStr = '請輸入你要尋找的區域';
      return;
    }

  }
}
