import { Injectable } from '@angular/core';
import { LngLat, LngLatLike, Map } from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private map?: Map;

  get isMapReady(){
    return !!this.map;
  }


  setMap(map:Map){
    this.map = map;
  }

  flyTo(coords: LngLatLike) {
    if (this.isMapReady) {
      this.map?.flyTo({
        zoom: 14,
        center: coords
      });
    } else {
      console.error('El mapa no está listo. No se puede volar a la ubicación.');
    }
  }

  constructor() { }
}
