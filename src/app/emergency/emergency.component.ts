import { Component, OnInit } from '@angular/core';
import { AmbulanceComponent } from '../ambulance/ambulance.component';
import {MatDialog} from '@angular/material/dialog';

declare const L: any;

@Component({
  selector: 'app-emergency',
  templateUrl: './emergency.component.html',
  styleUrls: ['./emergency.component.scss']
})
export class EmergencyComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    if (!navigator.geolocation){
      console.log('not supported');
    }
    navigator.geolocation.getCurrentPosition((position) => {
      const coards = position.coords;
      const LatLong = [coards.latitude, coards.longitude];
      console.log(
        `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
      );
      let mymap = L.map('map').setView(LatLong, 13);
      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3VtbWFpeWEtaWJhZCIsImEiOiJja2l4MnA0bXYwemFmMzBtZWIzbzl6eG9hIn0.K7t0SVV6IAuAHR4pW54yVg', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);
let marker = L.marker(LatLong).addTo(mymap);
marker.bindPopup('<b>My Location</b>').openPopup();
    });
    this.watchPosition();
  }

  watchPosition(){
    let deslat = 0;
    let deslon = 0;
    let id = navigator.geolocation.watchPosition((position) => {
      console.log(
        `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
      );

      if(position.coords.latitude === deslat){
        navigator.geolocation.clearWatch(id);
      }

    },(err) => {
      console.log(err);
    }, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    });
  }

  openAmb(){
    const dialogRef = this.dialog.open(AmbulanceComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
