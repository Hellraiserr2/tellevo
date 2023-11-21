import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feature, PlacesResponse } from '../interfaces/places'
import { PlacesApiClient } from '../api/placesApiClients';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public userLocation?:[number, number];
  public isLoadingPlaces:boolean = false;
  public places:Feature[]=[];
  get isUserLocationRedy():boolean{
    return !!this.userLocation;
  } 

  constructor(private http : HttpClient) {
    this.getUserLocation();
   }


  getUserLocation(): Promise<[number, number]>{
    return new Promise( (resolve, reject)=>{
    
    navigator.geolocation.getCurrentPosition(
      ( { coords } )=> {
        this.userLocation = [ coords.longitude, coords.latitude];
        resolve( this.userLocation );
      },
      ( err ) =>{
        console.error('Error al obtener la ubicación:', err);
        reject(err);
      }
    );

    });
  }

  getPlacesByQuery(query: string = ''){

    this.isLoadingPlaces = true;
    //todo: evaluar cuando el query es nulo
    this.http.get<PlacesResponse>(`https://api.mapbox.com/geocoding/v5/mapbox.places/${ query }.json?proximity=-70.75182382119678%2C-33.511347645040935&language=es&access_token=pk.eyJ1IjoiaGVsbHJhaXNlcnIyIiwiYSI6ImNsbnR5MjVtODA3eWIya283djB6bTZya2gifQ.pobj6tcVNShRHszZZCoeVg`)
    .subscribe(resp => {
      console.log(resp.features)
      this.isLoadingPlaces = false;
      this.places=resp.features;
    });
  }




}
