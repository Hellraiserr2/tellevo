import { Component } from '@angular/core';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrls: ['./btn-my-location.component.css']
})
export class BtnMyLocationComponent {

  constructor(
    private mapService: MapService,
    private placesService:PlacesService
  ){ }


  goToMyLocation(){
    if(!this.placesService.isUserLocationRedy) throw Error('no Hay ubicacion de usuario');
    if(!this.mapService.isMapReady) throw Error('El mapa no esta listo');



    this.mapService.flyTo( this.placesService.userLocation!);

  }

}
