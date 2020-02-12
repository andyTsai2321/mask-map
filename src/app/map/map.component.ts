import { Component, OnInit } from '@angular/core';
import { MaskService } from '../service/mask.service';
import { HttpErrorResponse } from '@angular/common/http';
import { latLng, tileLayer } from 'leaflet';
import * as L from 'leaflet';
import 'leaflet.markercluster';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  map: L.Map;

  allData;

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
      })
    ],
    zoom: 16,
    center: latLng(25.043095, 121.533803)
  };

  markerClusterGroup: L.MarkerClusterGroup;
  markerClusterData: L.Marker[] = [];
  markerClusterOptions: L.MarkerClusterGroupOptions;

  constructor(private maskService: MaskService) {
    this.maskService.getMaskApi()
      .subscribe(res => {
        this.allData = res['features'];
        // console.log(this.allData);
        this.getUserLocation();
      },
        (error: HttpErrorResponse) => this.maskService.HandleError(error)
      );
  }

  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.map.panTo(new L.LatLng(position.coords.latitude, position.coords.longitude));
      });
    }

    this.refreshData();
  }

  refreshData() {
    this.markerClusterData = this.generateMarker();
  }

  generateMarker(): L.Marker[] {
    const data: L.Marker[] = [];
    const icon = L.icon({
      iconSize: [48, 61],
      iconUrl: '../assets/images/icons/maker.svg',
    });

    this.allData.forEach(item => {
      if (item.properties.mask_adult !== 0 && item.properties.mask_child !== 0) {
        data.push(L.marker([item.geometry.coordinates[1], item.geometry.coordinates[0]], { icon }).bindPopup(
          `
              <div class="heading">${item.properties.name}</div>
              <div class="detail">
                <img src="../assets/images/icons/map-marker-alt-solid.svg">
                ${item.properties.address}
              </div>
              <div class="detail">
              <img src="../assets/images/icons/phone.svg">
                ${item.properties.phone}
              </div>

              <div class="mask-detail-wrap">
                <span class="mask-adult">成人口罩：${item.properties.mask_adult}</span>
                <span class="mask-child">小孩口罩：${item.properties.mask_child}</span>
              </div>

            `
        ));

      }
    });

    return data;
  }

  onMapReady(map: L.Map) {
    this.map = map;
  }

  markerClusterReady(group: L.MarkerClusterGroup) {
    this.markerClusterGroup = group;
  }

  ngOnInit() {

  }

}
