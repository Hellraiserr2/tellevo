import { Component } from '@angular/core';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-map-screen',
  templateUrl: './map-screen.component.html',
  styleUrls: ['./map-screen.component.css']
})
export class MapScreenComponent {

  constructor(private placesService: PlacesService) {
    console.log('MapScreenComponent constructor:', placesService);
  }
  

  get isUserLocationRedy(){
    return this.placesService.isUserLocationRedy;
  }


}
