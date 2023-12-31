import { Component } from '@angular/core';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {
  constructor(private placesService: PlacesService){
  }
  get isLoandingPlaces(){
    return this.placesService.isLoadingPlaces;
  }
}
