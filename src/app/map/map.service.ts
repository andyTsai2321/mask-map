import { Injectable } from '@angular/core';
import { latLng, tileLayer } from 'leaflet';
import * as L from 'leaflet';
import 'leaflet.markercluster';
import { MainService } from '../service/main.service';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  map: L.Map;

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
      })
    ],
    zoom: 16,
    center: latLng(25.043095, 121.533803)
  };

  markerClusterGroup: L.MarkerClusterGroup;
  markerClusterData: L.Marker[] = [];
  markerClusterOptions: L.MarkerClusterGroupOptions;

  constructor(private mainService: MainService) { }

  generateData(maskData) {
    this.markerClusterData = this.generateMarker(maskData);
  }

  generateMarker(maskData): L.Marker[] {
    const data: L.Marker[] = [];
    const icon = L.icon({
      iconSize: [48, 61],
      iconUrl: 'assets/images/icons/maker.svg',
    });

    maskData.forEach(item => {
      data.push(L.marker([item.geometry.coordinates[1], item.geometry.coordinates[0]], { icon }).bindPopup(
        `
            <div class="heading">${item.properties.name}</div>
            <div class="detail">
              <img src="assets/images/icons/map-marker-alt-solid.svg">
              ${item.properties.address}
            </div>
            <div class="detail">
            <img src="assets/images/icons/phone.svg">
              ${item.properties.phone}
            </div>
            <div class="mask-detail-wrap">
              <span class="mask-adult">成人口罩：${item.properties.mask_adult}</span>
              <span class="mask-child">小孩口罩：${item.properties.mask_child}</span>
            </div>
          `
      ));
    });
    this.mainService.loading = false;
    return data;
  }

  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.map.panTo(new L.LatLng(position.coords.latitude, position.coords.longitude));
      });
    }
  }

  changeLocation(lat, lng) {
    this.map.panTo(new L.LatLng(lat, lng));
    this.map.setView([lat, lng], 22)
  }

  onMapReady(map: L.Map) {
    this.map = map;
  }

  markerClusterReady(group: L.MarkerClusterGroup) {
    this.markerClusterGroup = group;
  }
}
