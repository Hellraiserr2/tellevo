import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { MapService, PlacesService } from '../../services';
import {  Popup, Marker } from 'mapbox-gl';
import mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit{

  @ViewChild('mapDiv')
  mapDivElement!: ElementRef

  constructor(
    private mapService:MapService,
    private placesService: PlacesService){

  }
  ngAfterViewInit(): void {
    if(!this.placesService.userLocation) throw Error('No hay placesService.userLocation');

    const map = new mapboxgl.Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.placesService.userLocation,
      zoom: 14, // starting zoom
      });

    const popup = new Popup()
      .setHTML(`
      <span> Aqui empieza tu viaje </span>
    `);

    new Marker ({color:'red'})
    .setLngLat(this.placesService.userLocation)
    .setPopup (popup)
    .addTo( map )

    
    this.mapService.setMap( map );
  }

}
